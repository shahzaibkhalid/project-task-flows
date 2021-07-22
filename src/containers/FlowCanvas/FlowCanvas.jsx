import { Box, Container } from '@theme-ui/components';
import { useCallback, useEffect, useRef, useState } from 'react';
import ReactFlow, {
  Background,
  Controls,
  MiniMap,
  addEdge,
  isEdge,
  isNode,
  removeElements,
} from 'react-flow-renderer';
import TaskConnectionLine from 'components/TaskConnectionLine';
import TaskEdge from 'components/TaskEdge';
import TaskNode from 'components/TaskNode';
import useDoubleTap from 'hooks/useDoubleTap';
import { useElements } from 'state/elementsContext';
import { ELEMENT_CATEGORIES } from 'utils/constants';
import isTouchDevice from 'utils/device';
import {
  createTaskEdge,
  createTaskNode,
  doesEdgeExistsBetweenNodes,
  getElementId,
} from 'utils/elements';

function FlowCanvas() {
  const [elements, setElements] = useElements();
  const reactFlowWrapper = useRef(null);
  const [reactFlowInstance, setReactFlowInstance] = useState(null);
  const [tempEdge, setTempEdge] = useState(createTaskEdge());

  const onPaneDoubleTap = useDoubleTap((event) => {
    onAddNode(event);
  });

  /**
   * edge must only be added when all the following conditions meet
   * - source has already been added to edge object
   * - source id is different from target id (to avoid self-referencing)
   * - no edge already exists between source and target nodes
   */
  const shouldConnectEdgeWithTaregt = useCallback(
    (node) => {
      const sourceId = tempEdge.source;
      const targetId = node.id;
      if (
        sourceId &&
        sourceId !== targetId &&
        !doesEdgeExistsBetweenNodes(elements, sourceId, targetId)
      ) {
        return true;
      }
      return false;
    },
    [tempEdge, elements]
  );

  const updateEdgeWithSourceNode = useCallback((node) => {
    setTempEdge((preValue) => ({ ...preValue, source: node.id }));
    // if no target node is chosen for 2 seconds, source node selection is cleared
    setTimeout(() => setTempEdge(createTaskEdge()), 2000);
  }, []);

  const updateEdgeWithTargetNode = useCallback(
    (node) => {
      onConnectElements({ ...tempEdge, target: node.id });
      setTempEdge(createTaskEdge());
    },
    [tempEdge, onConnectElements]
  );

  const onNodeDoubleTap = useCallback(
    (node) => {
      if (shouldConnectEdgeWithTaregt(node)) {
        updateEdgeWithTargetNode(node);
      } else {
        updateEdgeWithSourceNode(node);
      }
    },
    [
      shouldConnectEdgeWithTaregt,
      updateEdgeWithSourceNode,
      updateEdgeWithTargetNode,
    ]
  );

  const onNodeSingleTap = useCallback(
    (node) => {
      // TODO: technically, this should be extracted into a function as close extended node
      // and the other condition is when clicked elsewhere
      if (
        elements.find((el) => el.id === node.id).data.extendedNodeId === node.id
      ) {
        // TODO: extract this logic to a separate function coz we need to reset when we click anywhere else
        // TODO: store this extendedNodeId in a separate identifier like other data identifiers
        // TODO: node must move back to its original state when clicked somewhere else
        onNodeStateChange('extendedNodeId', '');
      } else {
        onNodeStateChange('extendedNodeId', node.id);
      }
    },
    [elements, onNodeStateChange]
  );
  const onEdgeSingleTap = useCallback(() => {}, []);
  const onEdgeDoubleTap = useCallback(() => {}, []);

  const onElementSingleTap = useCallback(
    (_, element) => {
      if (isNode(element)) {
        onNodeSingleTap(element);
      } else if (isEdge(element)) {
        onEdgeSingleTap(element);
      }
    },
    [onNodeSingleTap, onEdgeSingleTap]
  );

  const onElementDoubleTap = useDoubleTap(
    (_, element) => {
      if (isNode(element)) {
        onNodeDoubleTap(element);
      } else if (isEdge(element)) {
        onEdgeDoubleTap(element);
      }
    },
    300,
    onElementSingleTap
  );

  const onLoad = useCallback(
    (_reactFlowInstance) => setReactFlowInstance(_reactFlowInstance),
    []
  );

  const onNodeStateChangeById = useCallback(
    (nodeId, stateKey, stateValue) => {
      setElements((els) =>
        els.map((el) => {
          if (isNode(el) && el.id === nodeId) {
            return {
              ...el,
              data: {
                ...el.data,
                [stateKey]: stateValue,
              },
            };
          }
          return el;
        })
      );
    },
    [setElements]
  );

  const onNodeStateChange = useCallback(
    (stateKey, stateValue) => {
      setElements((els) =>
        els.map((el) => {
          if (isNode(el)) {
            return {
              ...el,
              data: {
                ...el.data,
                [stateKey]: stateValue,
              },
            };
          }
          return el;
        })
      );
    },
    [setElements]
  );

  const onAddNode = useCallback(
    (event) => {
      const reactFlowBounds = reactFlowWrapper.current.getBoundingClientRect();
      const position = reactFlowInstance.project({
        x: event.clientX - reactFlowBounds.left,
        y: event.clientY - reactFlowBounds.top,
      });
      const id = getElementId(ELEMENT_CATEGORIES.node);
      setElements((preValue) => [
        ...preValue,
        createTaskNode({
          // `data` object passed to `TaskNode` component
          data: {
            onNodeStateChangeById,
          },
          id,
          position,
        }),
      ]);
    },
    [reactFlowInstance, setElements, onNodeStateChangeById]
  );

  const onConnectElements = useCallback(
    (params) =>
      setElements((preValue) =>
        addEdge({ ...createTaskEdge(), ...params }, preValue)
      ),
    [setElements]
  );

  const onRemoveElements = useCallback(
    (elementsToRemove) =>
      setElements((preValue) => removeElements(elementsToRemove, preValue)),
    [setElements]
  );

  useEffect(() => {
    console.log('elements: ', elements);
  }, [elements]);

  return (
    <Container>
      <Box
        ref={reactFlowWrapper}
        sx={{ height: 'container', width: 'container' }}
      >
        <ReactFlow
          elements={elements}
          onConnect={onConnectElements}
          onElementsRemove={onRemoveElements}
          onPaneClick={onPaneDoubleTap}
          onLoad={onLoad}
          nodeTypes={{ taskNode: TaskNode }}
          edgeTypes={{ taskEdge: TaskEdge }}
          zoomOnScroll={false}
          zoomOnDoubleClick={false}
          paneMoveable={!isTouchDevice()}
          onElementClick={onElementDoubleTap}
          connectionLineComponent={TaskConnectionLine}
          snapToGrid
        >
          <Background size={1} />
          <MiniMap />
          <Controls />
        </ReactFlow>
      </Box>
    </Container>
  );
}

export default FlowCanvas;

import { EDGE_TYPES, ELEMENT_CATEGORIES, NODE_TYPES } from 'utils/constants';

function getElementId(idPrefix) {
  return `${idPrefix}_${Math.random()}`;
}

function createTaskNode(param) {
  return {
    ...param,
    type: NODE_TYPES.task,
  };
}

function createTaskEdge() {
  return {
    id: getElementId(ELEMENT_CATEGORIES.edge),
    source: null,
    target: null,
    ...getEdgeMeta(),
  };
}

function getEdgeMeta() {
  return {
    arrowHeadType: 'arrowclosed',
    type: EDGE_TYPES.task,
  };
}

function doesEdgeExistsBetweenNodes(elements, source, target) {
  /**
   * edge connection can be initiated both ways
   * - source can be connected with target
   * - target can be connected with source
   */
  return elements.some(
    (element) =>
      (element.source === source && element.target === target) ||
      (element.source === target && element.target === source)
  );
}

export {
  createTaskNode,
  getElementId,
  createTaskEdge,
  getEdgeMeta,
  doesEdgeExistsBetweenNodes,
};

import {
  EDGE_TYPES,
  ELEMENT_CATEGORIES,
  NODE_TYPES,
  TASK_NODE_ELEMENT_NAMES,
} from 'utils/constants';

function getElementId(idPrefix) {
  return `${idPrefix}_${Math.random()}`;
}

function createTaskNode(param) {
  return {
    ...param,
    data: {
      ...param.data,
      ...getNodeMeta(),
    },
    type: NODE_TYPES.task,
  };
}

function getNodeMeta() {
  return {
    [TASK_NODE_ELEMENT_NAMES.isDoneChecked]: false,
    [TASK_NODE_ELEMENT_NAMES.taskText]: '',
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

function extractStateKeyAndValueFromEvent(event) {
  let stateKey = event.target.name,
    stateValue;
  switch (event.target.name) {
    case TASK_NODE_ELEMENT_NAMES.isDoneChecked:
      stateValue = event.target.checked;
      break;
    case TASK_NODE_ELEMENT_NAMES.taskText:
      stateValue = event.target.value;
      break;
    default:
      throw new Error('Unable to identify Task Node element.');
  }
  return [stateKey, stateValue];
}

export {
  createTaskNode,
  getElementId,
  createTaskEdge,
  getEdgeMeta,
  doesEdgeExistsBetweenNodes,
  extractStateKeyAndValueFromEvent,
};

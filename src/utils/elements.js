import { ELEMENT_NAMES, NODE_TYPES } from 'utils/constants';

function getElementId(idPrefix) {
  return `${idPrefix}_${Math.random()}`;
}

function createElement(id, data, position) {
  return { data, id, position, type: NODE_TYPES.task };
}

function getBaseEdge() {
  return {
    id: getElementId(ELEMENT_NAMES.edge),
    source: null,
    target: null,
  };
}

export { createElement, getElementId, getBaseEdge };

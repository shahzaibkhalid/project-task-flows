import PropTypes from 'prop-types';
import { memo } from 'react';
import { getBezierPath, getMarkerEnd } from 'react-flow-renderer';

function TaskEdge({
  id,
  sourceX,
  sourceY,
  targetX,
  targetY,
  sourcePosition,
  targetPosition,
  arrowHeadType,
  markerEndId,
}) {
  const path = getBezierPath({
    sourcePosition,
    sourceX,
    sourceY,
    targetPosition,
    targetX,
    targetY,
  });
  const markerEnd = getMarkerEnd(arrowHeadType, markerEndId);
  return (
    <path
      id={id}
      d={path}
      markerEnd={markerEnd}
      sx={{
        fill: 'none',
        stroke: 'highlight',
        strokeWidth: 2,
      }}
    />
  );
}

TaskEdge.defaultProps = {
  markerEndId: '',
};

TaskEdge.propTypes = {
  arrowHeadType: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  markerEndId: PropTypes.string,
  sourcePosition: PropTypes.string.isRequired,
  sourceX: PropTypes.number.isRequired,
  sourceY: PropTypes.number.isRequired,
  targetPosition: PropTypes.string.isRequired,
  targetX: PropTypes.number.isRequired,
  targetY: PropTypes.number.isRequired,
};

export default memo(TaskEdge);

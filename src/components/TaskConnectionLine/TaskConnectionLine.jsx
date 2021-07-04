import PropTypes from 'prop-types';
import { memo } from 'react';
import { getBezierPath } from 'react-flow-renderer';

function TaskConnectionLine({
  sourceX,
  sourceY,
  targetX,
  targetY,
  sourcePosition,
  targetPosition,
}) {
  const path = getBezierPath({
    sourcePosition,
    sourceX,
    sourceY,
    targetPosition,
    targetX,
    targetY,
  });
  return (
    <g>
      <path
        d={path}
        sx={{
          fill: 'none',
          stroke: 'highlight',
          strokeWidth: 2,
        }}
      />
    </g>
  );
}

TaskConnectionLine.propTypes = {
  sourcePosition: PropTypes.string.isRequired,
  sourceX: PropTypes.number.isRequired,
  sourceY: PropTypes.number.isRequired,
  targetPosition: PropTypes.string.isRequired,
  targetX: PropTypes.number.isRequired,
  targetY: PropTypes.number.isRequired,
};

export default memo(TaskConnectionLine);

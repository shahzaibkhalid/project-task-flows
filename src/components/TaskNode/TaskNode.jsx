import { Box, Checkbox, Flex, Input, Label } from '@theme-ui/components';
import PropTypes from 'prop-types';
import { memo } from 'react';
import { Handle } from 'react-flow-renderer';

function TaskNode({ data, id }) {
  function onNodeStateChange(event) {
    // data.onNodeStateChange(id, stateKey, event.target.checked);
  }
  return (
    <Box
      sx={{
        bg: 'primary',
        borderRadius: 0,
        color: 'background',
        cursor: 'pointer',
        padding: 2,
      }}
    >
      <Handle type='target' position='top' />
      <Flex sx={{ alignItems: 'center' }}>
        <Label sx={{ width: '10%' }}>
          <input type='text' className='nodrag' />
          <Checkbox
            onChange={onNodeStateChange}
            checked={data.isDoneChecked}
            variant='taskCheckbox'
            // eslint-disable-next-line react/forbid-component-props
            className='nodrag'
          />
        </Label>
        <Input
          type='text'
          value={data.taskText}
          onChange={onNodeStateChange}
          variant='taskInput'
          // eslint-disable-next-line react/forbid-component-props
          className='nodrag'
        />
      </Flex>
      <Handle type='source' position='bottom' />
    </Box>
  );
}

TaskNode.propTypes = {
  data: PropTypes.shape({
    isDoneChecked: PropTypes.bool.isRequired,
    onNodeStateChange: PropTypes.func.isRequired,
    taskText: PropTypes.string.isRequired,
  }).isRequired,
  id: PropTypes.string.isRequired,
};

export default memo(TaskNode);

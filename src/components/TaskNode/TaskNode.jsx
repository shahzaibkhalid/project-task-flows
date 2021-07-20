import { Box, Checkbox, Flex, Input, Label, Text } from '@theme-ui/components';
import PropTypes from 'prop-types';
import { memo } from 'react';
import { Handle } from 'react-flow-renderer';
import { TASK_NODE_ELEMENT_NAMES } from 'utils/constants';

function TaskNode({ data, id }) {
  function onNodeStateChange(event) {
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
    data.onNodeStateChange(id, stateKey, stateValue);
  }
  return (
    <Box
      sx={{
        bg: 'purple',
        borderRadius: 0,
        color: 'background',
        cursor: 'pointer',
        padding: 2,
      }}
    >
      <Handle type='target' position='top' />
      <Flex sx={{ alignItems: 'center' }}>
        <Label sx={{ width: '10%' }}>
          <Checkbox
            onChange={onNodeStateChange}
            checked={data.isDoneChecked}
            variant='taskCheckbox'
            name={TASK_NODE_ELEMENT_NAMES.isDoneChecked}
            // eslint-disable-next-line react/forbid-component-props
            className='nodrag'
          />
        </Label>
        <Text as='h2' variant='taskHeading'>
          {data.taskText}
        </Text>
      </Flex>
      <Flex>
        <Input
          type='text'
          value={data.taskText}
          onChange={onNodeStateChange}
          variant='taskInput'
          name={TASK_NODE_ELEMENT_NAMES.taskText}
          placeholder='Add task description...'
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

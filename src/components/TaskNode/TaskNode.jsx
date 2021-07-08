import { Box, Checkbox, Flex, Input, Label } from '@theme-ui/components';
import PropTypes from 'prop-types';
import { memo } from 'react';
import { Handle } from 'react-flow-renderer';

function TaskNode({ data }) {
  const { isDoneChecked, taskText, onChangeDone, onChangeTaskText } = data;
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
          <Checkbox
            onChange={onChangeDone}
            checked={isDoneChecked}
            variant='taskCheckbox'
          />
        </Label>
        <Label>
          <Input
            type='text'
            value={taskText}
            onChange={onChangeTaskText}
            variant='taskInput'
          />
        </Label>
      </Flex>
      <Handle type='source' position='bottom' />
    </Box>
  );
}

TaskNode.propTypes = {
  data: PropTypes.shape({
    isDoneChecked: PropTypes.bool.isRequired,
    onChangeDone: PropTypes.func.isRequired,
    onChangeTaskText: PropTypes.func.isRequired,
    taskText: PropTypes.string.isRequired,
  }).isRequired,
};

export default memo(TaskNode);

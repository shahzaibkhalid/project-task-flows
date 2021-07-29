import { Input } from '@theme-ui/components';
import PropTypes from 'prop-types';
import Modal from 'react-modal';
import { TASK_NODE_ELEMENT_NAMES } from 'utils/constants';

function TaskNodeDetailOverlay({ taskText, onChange }) {
  return (
    <Modal>
      <Input
        type='text'
        value={taskText}
        onChange={onChange}
        variant='taskInput'
        name={TASK_NODE_ELEMENT_NAMES.taskText}
        placeholder='Add task description...'
        // eslint-disable-next-line react/forbid-component-props
        className='nodrag'
      />
    </Modal>
  );
}

TaskNodeDetailOverlay.propTypes = {
  onChange: PropTypes.func.isRequired,
  taskText: PropTypes.string.isRequired,
};

export default TaskNodeDetailOverlay;

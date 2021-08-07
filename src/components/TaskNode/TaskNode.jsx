import { Box, Checkbox, Flex, Input, Label, Text } from '@theme-ui/components';
import { motion } from 'framer-motion';
import PropTypes from 'prop-types';
import { memo, useCallback } from 'react';
import { Handle } from 'react-flow-renderer';
import useConfig from 'hooks/useConfig';
import { TASK_NODE_ELEMENT_NAMES } from 'utils/constants';
import { extractStateKeyAndValueFromEvent } from 'utils/elements';

function TaskNode({ data, id }) {
  const config = useConfig();
  const onChange = useCallback(
    (event) => {
      const [stateKey, stateValue] = extractStateKeyAndValueFromEvent(event);
      data.onNodeStateChangeById(stateKey, stateValue, id);
    },
    [data, id]
  );
  const isOpen = config.data.selectedNode === id;
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
            onChange={onChange}
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
        <motion.div
          initial='collapsed'
          animate={isOpen ? 'open' : 'collapsed'}
          variants={{
            collapsed: { height: 0, opacity: 0, visibility: 'hidden' },
            open: { height: 'auto', opacity: 1, visibility: 'visible' },
          }}
          transition={{ duration: 0.8, ease: [0.04, 0.62, 0.23, 0.98] }}
        >
          <Input
            type='text'
            value={data.taskText}
            onChange={onChange}
            variant='taskInput'
            name={TASK_NODE_ELEMENT_NAMES.taskText}
            placeholder="What's up?"
            // eslint-disable-next-line react/forbid-component-props
            className='nodrag'
          />
        </motion.div>
      </Flex>
      <Handle type='source' position='bottom' />
    </Box>
  );
}

TaskNode.propTypes = {
  data: PropTypes.shape({
    isDoneChecked: PropTypes.bool.isRequired,
    onNodeStateChangeById: PropTypes.func.isRequired,
    taskText: PropTypes.string.isRequired,
  }).isRequired,
  id: PropTypes.string.isRequired,
};

export default memo(TaskNode);

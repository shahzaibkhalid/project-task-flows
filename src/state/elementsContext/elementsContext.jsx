import PropTypes from 'prop-types';
import { createContext, useContext, useMemo, useState } from 'react';
import { CONFIG_ID } from 'utils/constants';

const elementsValue = [
  {
    data: {
      selectedNode: '',
    },
    id: CONFIG_ID,
    isHidden: true,
    position: { x: 0, y: 0 },
    type: 'default',
  },
];

const ElementsContext = createContext();

function useElements() {
  const context = useContext(ElementsContext);

  if (!context) {
    throw new Error(
      'Error: useElements context must be used within ElementsProvider.'
    );
  }

  return context;
}

function ElementsProvider({ children }) {
  const [elements, setElements] = useState(elementsValue);

  const value = useMemo(() => [elements, setElements], [elements]);
  return (
    <ElementsContext.Provider value={value}>
      {children}
    </ElementsContext.Provider>
  );
}

ElementsProvider.defaultProps = {
  children: null,
};

ElementsProvider.propTypes = {
  children: PropTypes.node,
};

export { elementsValue, useElements, ElementsProvider };

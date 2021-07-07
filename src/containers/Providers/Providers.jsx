import { ThemeProvider } from '@theme-ui/core';
import PropTypes from 'prop-types';
import { ReactFlowProvider } from 'react-flow-renderer';
import { ElementsProvider } from 'state/elementsContext';
import defaultTheme from 'theme/defaultTheme';

function Providers({ children }) {
  return (
    <ThemeProvider theme={defaultTheme}>
      <ReactFlowProvider>
        <ElementsProvider>{children}</ElementsProvider>
      </ReactFlowProvider>
    </ThemeProvider>
  );
}

Providers.defaultProps = {
  children: null,
};

Providers.propTypes = {
  children: PropTypes.node,
};

export default Providers;

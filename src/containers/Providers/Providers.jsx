import { ThemeProvider } from '@theme-ui/core';
import PropTypes from 'prop-types';

function Providers({ children }) {
  return <ThemeProvider theme={{}}>{children}</ThemeProvider>;
}

Providers.defaultProps = {
  children: null,
};

Providers.propTypes = {
  children: PropTypes.element,
};

export default Providers;

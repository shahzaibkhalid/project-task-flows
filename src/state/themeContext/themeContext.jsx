import PropTypes from 'prop-types';
import { createContext, useContext, useMemo, useState } from 'react';

const themeValue = {
  dark: 'dark',
  light: 'light',
};

const ThemeContext = createContext();

function useTheme() {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error(
      'Error: useTheme custom hook must be used within ThemeContext.'
    );
  }

  return context;
}

function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(themeValue.dark);

  const value = useMemo(() => [theme, setTheme], [theme]);

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}

ThemeProvider.defaultProps = {
  children: null,
};

ThemeProvider.propTypes = {
  children: PropTypes.element,
};

export { themeValue, useTheme, ThemeProvider };

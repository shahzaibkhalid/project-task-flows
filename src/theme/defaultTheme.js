const defaultTheme = {
  breakpoints: ['640px', '768px', '1024px', '1280px'],
  buttons: {
    disabled: {
      color: 'black',
      cursor: 'not-allowed',
    },
    primary: {
      bg: 'pink',
      color: 'black',
      cursor: 'pointer',
    },
    secondary: {
      bg: 'purple',
      color: 'black',
      cursor: 'pointer',
    },
  },
  colors: {
    black: 'hsl(230, 25%, 18%)',
    highlight: 'hsl(260, 20%, 40%)',
    pink: 'hsl(290, 100%, 80%)',
    purple: 'hsl(260, 100%, 80%)',
  },
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 72],
  fontWeights: {
    body: 400,
    display: 900,
    heading: 700,
  },
  fonts: {
    body: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif',
    heading: 'Ubuntu, sans-serif',
    monospace: 'Menlo, monospace',
  },
  forms: {
    taskCheckbox: {
      color: 'highlight',
      'input:checked ~ &': {
        color: 'highlight',
      },
      'input:focus ~ &': {
        bg: 'purple',
        color: 'highlight',
      },
    },
    taskInput: {
      border: 'none',
      color: 'black',
      outline: 'none',
      pl: 1,
      pr: 1,
    },
  },
  lineHeights: {
    body: 1.5,
    heading: 1.25,
  },
  links: {
    bold: {
      '&:hover': {
        color: 'pink',
      },
      cursor: 'pointer',
      fontWeight: 'bold',
    },
    purple: {
      '&:hover': {
        color: 'pink',
      },
      color: 'purple',
      cursor: 'pointer',
    },
    underline: {
      '&:hover': {
        color: 'pink',
      },
      borderBottom: '2px solid',
      color: 'purple',
      cursor: 'pointer',
    },
  },
  radii: [5],
  sizes: {
    container: 700,
  },
  text: {
    taskHeading: {
      color: 'black',
      fontFamily: 'Ubuntu, sans-serif',
      fontSize: 2,
      ml: 2,
      mr: 2,
    },
  },
};

export default defaultTheme;

const defaultTheme = {
  breakpoints: ['640px', '768px', '1024px', '1280px'],
  buttons: {
    disabled: {
      color: 'background',
      cursor: 'not-allowed',
    },
    primary: {
      bg: 'primary',
      color: 'background',
      cursor: 'pointer',
    },
    secondary: {
      bg: 'secondary',
      color: 'background',
      cursor: 'pointer',
    },
  },
  colors: {
    background: 'hsl(230, 25%, 18%)',
    gray: 'hsl(210, 50%, 60%)',
    highlight: 'hsl(260, 20%, 40%)',
    muted: 'hsla(230, 20%, 0%, 20%)',
    primary: 'hsl(260, 100%, 80%)',
    purple: 'hsl(290, 100%, 80%)',
    secondary: 'hsl(290, 100%, 80%)',
    text: 'hsl(210, 50%, 96%)',
  },
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 72],
  fontWeights: {
    body: 400,
    display: 900,
    heading: 700,
  },
  fonts: {
    body: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif',
    heading: 'inherit',
    monospace: 'Menlo, monospace',
  },
  lineHeights: {
    body: 1.5,
    heading: 1.25,
  },
  links: {
    bold: {
      '&:hover': {
        color: 'secondary',
      },
      cursor: 'pointer',
      fontWeight: 'bold',
    },
    primary: {
      '&:hover': {
        color: 'secondary',
      },
      color: 'primary',
      cursor: 'pointer',
    },
    underline: {
      '&:hover': {
        color: 'secondary',
      },
      borderBottom: '2px solid',
      color: 'primary',
      cursor: 'pointer',
    },
  },
  sizes: {
    container: 700,
  },
  text: {
    display: {
      fontSize: [5, 6],
      fontWeight: 'display',
      letterSpacing: '-0.03em',
      mt: 3,
      variant: 'text.heading',
    },
    heading: {
      color: 'primary',
      fontFamily: 'heading',
      fontWeight: 'heading',
      lineHeight: 'heading',
    },
  },
};

export default defaultTheme;

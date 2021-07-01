import { css } from '@emotion/react';

const globalStyles = (theme) =>
  css({
    body: {
      backgroundColor: theme.colors.background,
      margin: 0,
      padding: 0,
    },
  });

export default globalStyles;

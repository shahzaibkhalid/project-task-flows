import { css } from '@emotion/react';

const globalStyles = (theme) =>
  css({
    body: {
      backgroundColor: theme.colors.black,
      margin: 0,
      padding: 0,
    },
  });

export default globalStyles;

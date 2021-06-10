import { memo } from 'react';
import { Heading } from 'theme-ui';

function Home() {
  // return <h1 sx={{ color: 'primary', p: 1 }}>This is Home Page.</h1>;
  return (
    <Heading as='h1' p={2}>
      This is Home Page.
    </Heading>
  );
}

export default memo(Home);

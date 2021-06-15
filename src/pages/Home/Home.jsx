import { Heading } from '@theme-ui/components';
import { memo } from 'react';

function Home() {
  return (
    <Heading as='h1' p={2}>
      This is Home Page.
    </Heading>
  );
}

export default memo(Home);

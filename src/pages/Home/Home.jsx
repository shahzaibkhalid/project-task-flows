import { Heading } from '@theme-ui/components';
import { memo } from 'react';
import FlowCanvas from 'containers/FlowCanvas';

function Home() {
  return (
    <>
      <Heading as='h1' sx={{ p: 2 }}>
        This is Home Page.
      </Heading>
      <FlowCanvas />
    </>
  );
}

export default memo(Home);

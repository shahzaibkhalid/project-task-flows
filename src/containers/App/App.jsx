import { Global } from '@emotion/react';
import { StrictMode } from 'react';
import GenericErrorBoundary from 'containers/GenericErrorBoundary';
import Providers from 'containers/Providers';
import Routes from 'containers/Routes';
import globalStyles from 'theme/globalStyles';

function App() {
  return (
    <StrictMode>
      <GenericErrorBoundary>
        <Providers>
          <Global styles={globalStyles} />
          <Routes />
        </Providers>
      </GenericErrorBoundary>
    </StrictMode>
  );
}

export default App;

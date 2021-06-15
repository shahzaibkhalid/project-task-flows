import { Global } from '@emotion/react';
import { StrictMode } from 'react';
import GenericErrorBoundary from 'containers/GenericErrorBoundary';
import Providers from 'containers/Providers';
import Routes from 'containers/Routes';
import globalStyles from 'theme/globalStyles';

function App() {
  return (
    <StrictMode>
      <Global styles={globalStyles} />
      <GenericErrorBoundary>
        <Providers>
          <Routes />
        </Providers>
      </GenericErrorBoundary>
    </StrictMode>
  );
}

export default App;

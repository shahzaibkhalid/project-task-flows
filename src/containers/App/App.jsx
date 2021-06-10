import { StrictMode } from 'react';
import GenericErrorBoundary from 'containers/GenericErrorBoundary';
import Providers from 'containers/Providers';
import Routes from 'containers/Routes';

function App() {
  return (
    <StrictMode>
      <GenericErrorBoundary>
        <Providers>
          <Routes />
        </Providers>
      </GenericErrorBoundary>
    </StrictMode>
  );
}

export default App;

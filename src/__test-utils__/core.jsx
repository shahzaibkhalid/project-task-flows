import { render } from '@testing-library/react';
import PropTypes from 'prop-types';
import { StrictMode } from 'react';
import { MemoryRouter } from 'react-router-dom';
import GenericErrorBoundary from 'containers/GenericErrorBoundary';
import Providers from 'containers/Providers';

function Wrapper({ children }) {
  return (
    <StrictMode>
      <GenericErrorBoundary>
        <Providers>
          <MemoryRouter>{children}</MemoryRouter>
        </Providers>
      </GenericErrorBoundary>
    </StrictMode>
  );
}

Wrapper.defaultProps = {
  children: null,
};

Wrapper.propTypes = {
  children: PropTypes.element,
};

function customRender(ui, options) {
  return render(ui, { wrapper: Wrapper, ...options });
}

export * from '@testing-library/react';
export { customRender as render };

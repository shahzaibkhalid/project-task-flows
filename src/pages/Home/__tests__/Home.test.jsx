import { render, screen } from '__test-utils__/core';
import {
  mockResizeObserver,
  unmockResizeObserver,
} from '__test-utils__/testUtils';
import Home from 'pages/Home';

describe('Home', () => {
  beforeAll(() => {
    mockResizeObserver();
  });

  afterAll(() => {
    unmockResizeObserver();
  });

  it('should render the main heading', () => {
    render(<Home />);
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(
      /^This is Home Page.$/
    );
  });
});

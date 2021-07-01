import { render } from '__test-utils__/core';
import {
  mockResizeObserver,
  unmockResizeObserver,
} from '__test-utils__/testUtils';
import FlowCanvas from 'containers/FlowCanvas';

describe('FlowCanvas', () => {
  beforeAll(() => {
    mockResizeObserver();
  });

  afterAll(() => {
    unmockResizeObserver();
  });

  it('should render the flow canvas', () => {
    render(<FlowCanvas />);
  });
});

function mockResizeObserver() {
  window.ResizeObserver = jest.fn().mockImplementation(() => ({
    disconnect: jest.fn(),
    observe: jest.fn(),
    unobserve: jest.fn(),
  }));
}

function unmockResizeObserver() {
  delete window.ResizeObserver;
}

export { mockResizeObserver, unmockResizeObserver };

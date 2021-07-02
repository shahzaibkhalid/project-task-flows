import { render, screen } from '__test-utils__/core';
import About from 'pages/About';

describe('About', () => {
  it('should render the main heading', () => {
    render(<About />);
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(
      /^This is About Page.$/
    );
  });
});

import { render, screen } from '__test-utils__/test-utils';
import Home from 'pages/Home';

describe('Home', () => {
  it('should render the main heading', () => {
    render(<Home />);
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(
      /^This is Home Page.$/
    );
  });
});

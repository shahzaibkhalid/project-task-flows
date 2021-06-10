import { render, screen } from '__test-utils__/test-utils';
import NoMatch from 'components/NoMatch';
import { routes } from 'utils/routing';

describe('NoMatch', () => {
  it('should render NoMatch messages', () => {
    render(<NoMatch />);
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(
      /^It's not you, it's us!$/
    );
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent(
      /^Seems like \/ does not exist.$/
    );
  });

  it('should render a link to the Home page', () => {
    render(<NoMatch />);
    expect(screen.getByRole('link')).toHaveAttribute('href', routes.HOME);
  });
});

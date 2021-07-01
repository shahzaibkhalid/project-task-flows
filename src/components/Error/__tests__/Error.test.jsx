import { render, screen } from '__test-utils__/core';
import Error from 'components/Error';

describe('Error', () => {
  function sharedHeadingAssertions() {
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(
      /^Something went wrong!$/
    );
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent(
      /^Please try again.$/
    );
  }
  it('should render default error messages when specific error is not present', () => {
    render(<Error />);
    sharedHeadingAssertions();
    expect(screen.queryByTestId('error-message')).not.toBeInTheDocument();
  });

  it('should render default error messages along with specific error', () => {
    const errorMessage = 'Unable to find your account';
    render(<Error errorMessage={errorMessage} />);
    sharedHeadingAssertions();
    expect(screen.getByText(errorMessage, { selector: 'p' })).toHaveTextContent(
      /^Unable to find your account$/
    );
  });
});

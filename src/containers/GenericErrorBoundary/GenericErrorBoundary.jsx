import PropTypes from 'prop-types';
import { Component } from 'react';
import Error from 'components/Error';

class GenericErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch() {
    // TODO: use some error reporting service here
  }

  render() {
    const { hasError } = this.state;
    const { children } = this.props;

    if (hasError) {
      return <Error />;
    }
    return children;
  }
}

GenericErrorBoundary.propTypes = {
  children: PropTypes.element.isRequired,
};

export default GenericErrorBoundary;

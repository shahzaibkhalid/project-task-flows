import PropTypes from 'prop-types';

function Error({ errorMessage }) {
  return (
    <>
      <h1>Something went wrong!</h1>
      <h2>Please try again.</h2>
      {errorMessage ? <p data-error-message>{errorMessage}</p> : null}
    </>
  );
}

Error.defaultProps = {
  errorMessage: '',
};

Error.propTypes = {
  errorMessage: PropTypes.string,
};

export default Error;

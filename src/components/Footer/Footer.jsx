import PropTypes from 'prop-types';

function Footer({ copy, src }) {
  return (
    <>
      <h1>{copy}</h1>
      <img src={src} alt='surface notebook' />
    </>
  );
}

Footer.propTypes = {
  copy: PropTypes.string,
  src: PropTypes.string,
};

export default Footer;

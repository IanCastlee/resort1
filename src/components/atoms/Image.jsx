import PropTypes from 'prop-types';

export default function Image({
  src,
  alt,
  className = '',
  eager = false,
}) {
  return (
    <img
      src={src}
      alt={alt}
      loading={eager ? 'eager' : 'lazy'}
      decoding="async"
      className={`block object-cover ${className}`}
    />
  );
}

Image.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  className: PropTypes.string,
  eager: PropTypes.bool,
};

import PropTypes from 'prop-types';

export default function Label({ htmlFor, children, required = false, className = '' }) {
  return (
    <label
      htmlFor={htmlFor}
      className={`block text-xs font-semibold uppercase tracking-widest text-brand-navy mb-2 ${className}`}
    >
      {children}
      {required && <span className="text-brand-gold ml-1">*</span>}
    </label>
  );
}

Label.propTypes = {
  htmlFor: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  required: PropTypes.bool,
  className: PropTypes.string,
};

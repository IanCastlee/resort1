import PropTypes from 'prop-types';

export default function Input({
  id,
  name,
  type = 'text',
  value,
  onChange,
  placeholder = '',
  hasError = false,
  required = false,
  min,
  className = '',
}) {
  return (
    <input
      id={id}
      name={name}
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      required={required}
      min={min}
      aria-invalid={hasError}
      className={`w-full bg-brand-ivory px-4 py-3 text-sm text-brand-charcoal placeholder:text-brand-slate border transition-colors duration-200 focus:outline-none focus:border-brand-gold ${
        hasError ? 'border-red-600' : 'border-brand-border'
      } ${className}`}
    />
  );
}

Input.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  hasError: PropTypes.bool,
  required: PropTypes.bool,
  min: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  className: PropTypes.string,
};

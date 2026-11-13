import PropTypes from 'prop-types';

export default function Textarea({
  id,
  name,
  value,
  onChange,
  placeholder = '',
  rows = 4,
  hasError = false,
  required = false,
  className = '',
}) {
  return (
    <textarea
      id={id}
      name={name}
      rows={rows}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      required={required}
      aria-invalid={hasError}
      className={`w-full bg-brand-ivory px-4 py-3 text-sm text-brand-charcoal placeholder:text-brand-slate border transition-colors duration-200 focus:outline-none focus:border-brand-gold resize-y ${
        hasError ? 'border-red-600' : 'border-brand-border'
      } ${className}`}
    />
  );
}

Textarea.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  rows: PropTypes.number,
  hasError: PropTypes.bool,
  required: PropTypes.bool,
  className: PropTypes.string,
};

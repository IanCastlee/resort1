import PropTypes from 'prop-types';
import Label from '../atoms/Label';
import Input from '../atoms/Input';
import Textarea from '../atoms/Textarea';
import Text from '../atoms/Text';

export default function FormField({
  id,
  name,
  label,
  type = 'text',
  value,
  onChange,
  placeholder = '',
  error,
  required = false,
  options = [],
  rows = 4,
  min,
}) {
  return (
    <div className="flex flex-col">
      <Label htmlFor={id} required={required}>
        {label}
      </Label>

      {type === 'textarea' ? (
        <Textarea
          id={id}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          rows={rows}
          hasError={Boolean(error)}
          required={required}
        />
      ) : type === 'select' ? (
        <select
          id={id}
          name={name}
          value={value}
          onChange={onChange}
          required={required}
          aria-invalid={Boolean(error)}
          className={`w-full bg-brand-ivory px-4 py-3 text-sm text-brand-charcoal border transition-colors duration-200 focus:outline-none focus:border-brand-gold ${
            error ? 'border-red-600' : 'border-brand-border'
          }`}
        >
          <option value="">{placeholder}</option>
          {options.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
      ) : (
        <Input
          id={id}
          name={name}
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          hasError={Boolean(error)}
          required={required}
          min={min}
        />
      )}

      {error && (
        <Text as="span" size="xs" className="text-red-600 mt-1.5">
          {error}
        </Text>
      )}
    </div>
  );
}

FormField.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  type: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  error: PropTypes.string,
  required: PropTypes.bool,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    })
  ),
  rows: PropTypes.number,
  min: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

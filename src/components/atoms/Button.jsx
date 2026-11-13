import PropTypes from 'prop-types';

const variantStyles = {
  primary:
    'bg-brand-gold text-brand-navy hover:bg-brand-goldLight border border-brand-gold shadow-sm',
  secondary:
    'bg-brand-navy text-brand-ivory hover:bg-brand-navyLight border border-brand-navy',
  outline:
    'bg-transparent text-brand-navy border border-brand-navy hover:bg-brand-navy hover:text-brand-ivory',
  outlineLight:
    'bg-transparent text-brand-ivory border border-brand-ivory hover:bg-brand-ivory hover:text-brand-navy',
  ghost:
    'bg-transparent text-brand-navy hover:bg-brand-cream border border-transparent',
};

const sizeStyles = {
  sm: 'px-4 py-2 text-xs tracking-widest uppercase',
  md: 'px-6 py-3 text-xs tracking-widest uppercase',
  lg: 'px-8 py-4 text-sm tracking-widest uppercase',
};

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  type = 'button',
  disabled = false,
  fullWidth = false,
  onClick,
  className = '',
  ariaLabel,
}) {
  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      aria-label={ariaLabel}
      className={`inline-flex items-center justify-center gap-2 font-semibold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-brand-gold focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed ${
        variantStyles[variant] || variantStyles.primary
      } ${sizeStyles[size] || sizeStyles.md} ${fullWidth ? 'w-full' : ''} ${className}`}
    >
      {children}
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf(['primary', 'secondary', 'outline', 'outlineLight', 'ghost']),
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
  disabled: PropTypes.bool,
  fullWidth: PropTypes.bool,
  onClick: PropTypes.func,
  className: PropTypes.string,
  ariaLabel: PropTypes.string,
};

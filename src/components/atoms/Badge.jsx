import PropTypes from 'prop-types';

const variantStyles = {
  gold: 'bg-brand-cream text-brand-navy border-brand-gold',
  navy: 'bg-brand-navyLight text-brand-goldLight border-brand-gold',
  cream: 'bg-brand-cream text-brand-navy border-brand-border',
  light: 'bg-brand-ivory text-brand-navy border-brand-border',
};

export default function Badge({ children, variant = 'gold', className = '' }) {
  return (
    <span
      className={`inline-flex items-center px-3 py-1 text-[11px] font-semibold uppercase tracking-widest border ${
        variantStyles[variant] || variantStyles.gold
      } ${className}`}
    >
      {children}
    </span>
  );
}

Badge.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf(['gold', 'navy', 'cream', 'light']),
  className: PropTypes.string,
};

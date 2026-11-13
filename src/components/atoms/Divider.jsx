import PropTypes from 'prop-types';

const variantStyles = {
  gold: 'bg-brand-gold h-0.5 w-16',
  subtle: 'bg-brand-border h-px w-full',
  navy: 'bg-brand-navy h-0.5 w-16',
};

export default function Divider({
  variant = 'gold',
  centered = false,
  className = '',
}) {
  return (
    <div
      role="separator"
      className={`${variantStyles[variant] || variantStyles.gold} ${
        centered ? 'mx-auto' : ''
      } ${className}`}
    />
  );
}

Divider.propTypes = {
  variant: PropTypes.oneOf(['gold', 'subtle', 'navy']),
  centered: PropTypes.bool,
  className: PropTypes.string,
};

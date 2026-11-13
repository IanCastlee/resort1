import PropTypes from 'prop-types';

const sizeStyles = {
  xs: 'text-xs leading-relaxed',
  sm: 'text-sm leading-relaxed',
  md: 'text-base leading-relaxed',
  lg: 'text-lg leading-relaxed',
};

const toneStyles = {
  default: 'text-brand-charcoal',
  muted: 'text-brand-slate',
  light: 'text-brand-ivory',
  gold: 'text-brand-gold',
};

export default function Text({
  as = 'p',
  size = 'md',
  tone = 'default',
  children,
  className = '',
}) {
  const Tag = as;
  return (
    <Tag
      className={`${sizeStyles[size] || sizeStyles.md} ${
        toneStyles[tone] || toneStyles.default
      } ${className}`}
    >
      {children}
    </Tag>
  );
}

Text.propTypes = {
  as: PropTypes.oneOf(['p', 'span', 'div']),
  size: PropTypes.oneOf(['xs', 'sm', 'md', 'lg']),
  tone: PropTypes.oneOf(['default', 'muted', 'light', 'gold']),
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

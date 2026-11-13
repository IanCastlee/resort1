import PropTypes from 'prop-types';

const levelStyles = {
  h1: 'text-4xl sm:text-5xl lg:text-6xl font-serif font-normal leading-tight tracking-tight',
  h2: 'text-3xl sm:text-4xl font-serif font-normal leading-snug tracking-tight',
  h3: 'text-xl sm:text-2xl font-serif font-normal leading-snug',
  h4: 'text-lg sm:text-xl font-serif font-medium leading-snug',
};

const toneStyles = {
  dark: 'text-brand-navy',
  light: 'text-brand-ivory',
  gold: 'text-brand-gold',
};

export default function Heading({
  level = 'h2',
  tone = 'dark',
  children,
  className = '',
}) {
  const Tag = level;
  return (
    <Tag
      className={`${levelStyles[level] || levelStyles.h2} ${
        toneStyles[tone] || toneStyles.dark
      } ${className}`}
    >
      {children}
    </Tag>
  );
}

Heading.propTypes = {
  level: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4']),
  tone: PropTypes.oneOf(['dark', 'light', 'gold']),
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

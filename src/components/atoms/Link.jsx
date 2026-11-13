import PropTypes from 'prop-types';
import { Link as RouterLink } from 'react-router-dom';

export default function Link({
  to,
  href,
  external = false,
  children,
  className = '',
  onClick,
  ariaLabel,
}) {
  const baseClass =
    'transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-brand-gold rounded-sm';

  if (external || href) {
    return (
      <a
        href={href || to}
        target={external ? '_blank' : undefined}
        rel={external ? 'noopener noreferrer' : undefined}
        onClick={onClick}
        aria-label={ariaLabel}
        className={`${baseClass} ${className}`}
      >
        {children}
      </a>
    );
  }

  return (
    <RouterLink
      to={to || '/'}
      onClick={onClick}
      aria-label={ariaLabel}
      className={`${baseClass} ${className}`}
    >
      {children}
    </RouterLink>
  );
}

Link.propTypes = {
  to: PropTypes.string,
  href: PropTypes.string,
  external: PropTypes.bool,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  onClick: PropTypes.func,
  ariaLabel: PropTypes.string,
};

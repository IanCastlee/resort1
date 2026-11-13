import PropTypes from 'prop-types';
import { NavLink as RouterNavLink } from 'react-router-dom';

export default function NavLink({ to, label, tone = 'dark', onClick }) {
  const baseStyle =
    'text-xs uppercase tracking-[0.14em] font-medium whitespace-nowrap transition-colors duration-200 py-1 border-b-2';

  const activeStyle = 'border-brand-gold text-brand-gold font-semibold';
  const inactiveDark =
    'border-transparent text-brand-navy hover:text-brand-gold';
  const inactiveLight =
    'border-transparent text-brand-ivory hover:text-brand-goldLight';

  return (
    <RouterNavLink
      to={to}
      onClick={onClick}
      className={({ isActive }) =>
        `${baseStyle} ${
          isActive
            ? activeStyle
            : tone === 'light'
            ? inactiveLight
            : inactiveDark
        }`
      }
    >
      {label}
    </RouterNavLink>
  );
}

NavLink.propTypes = {
  to: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  tone: PropTypes.oneOf(['dark', 'light']),
  onClick: PropTypes.func,
};

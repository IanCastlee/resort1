import PropTypes from 'prop-types';
import Link from './Link';

export default function Logo({ name, subtitle, tone = 'dark', to = '/' }) {
  const textColor = tone === 'light' ? 'text-brand-ivory' : 'text-brand-navy';
  const subColor = tone === 'light' ? 'text-brand-goldLight' : 'text-brand-slate';

  return (
    <Link to={to} className="inline-flex items-center gap-3 group">
      <span className="w-9 h-9 flex items-center justify-center border border-brand-gold bg-brand-navy text-brand-gold font-serif text-lg tracking-wider transition-transform duration-300 group-hover:scale-105">
        {name ? name.charAt(0) : 'H'}
      </span>
      <span className="flex flex-col">
        <span className={`font-serif text-xl tracking-wide font-medium ${textColor}`}>
          {name}
        </span>
        {subtitle && (
          <span className={`text-[10px] uppercase tracking-[0.2em] ${subColor}`}>
            {subtitle}
          </span>
        )}
      </span>
    </Link>
  );
}

Logo.propTypes = {
  name: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  tone: PropTypes.oneOf(['dark', 'light']),
  to: PropTypes.string,
};

import PropTypes from 'prop-types';
import Link from '../atoms/Link';

export default function SocialLinks({ socials = [], tone = 'dark' }) {
  const linkTone =
    tone === 'light'
      ? 'border-brand-gold text-brand-ivory hover:bg-brand-gold hover:text-brand-navy'
      : 'border-brand-border text-brand-navy hover:border-brand-gold hover:text-brand-gold';

  return (
    <div className="flex flex-wrap items-center gap-3">
      {socials.map((item) => (
        <Link
          key={item.platform}
          href={item.url}
          external={item.url.startsWith('http')}
          ariaLabel={item.label}
          className={`px-4 py-2 text-xs uppercase tracking-widest border transition-colors ${linkTone}`}
        >
          {item.label}
        </Link>
      ))}
    </div>
  );
}

SocialLinks.propTypes = {
  socials: PropTypes.arrayOf(
    PropTypes.shape({
      platform: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    })
  ).isRequired,
  tone: PropTypes.oneOf(['dark', 'light']),
};

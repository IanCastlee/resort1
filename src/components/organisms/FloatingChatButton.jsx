import PropTypes from 'prop-types';
import Link from '../atoms/Link';
import Icon from '../atoms/Icon';

export default function FloatingChatButton({ href, label = 'Chat / Inquire' }) {
  return (
    <div className="fixed bottom-6 right-6 z-40">
      <Link
        href={href}
        external={href.startsWith('http')}
        ariaLabel={label}
        className="inline-flex items-center gap-2.5 bg-brand-navy text-brand-goldLight border border-brand-gold px-5 py-3.5 shadow-luxuryHover hover:bg-brand-gold hover:text-brand-navy transition-all duration-300"
      >
        <Icon name="chat" size="md" />
        <span className="text-xs font-semibold uppercase tracking-widest hidden sm:inline">
          {label}
        </span>
      </Link>
    </div>
  );
}

FloatingChatButton.propTypes = {
  href: PropTypes.string.isRequired,
  label: PropTypes.string,
};

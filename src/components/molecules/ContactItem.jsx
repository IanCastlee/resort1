import PropTypes from 'prop-types';
import Icon from '../atoms/Icon';
import Text from '../atoms/Text';
import Link from '../atoms/Link';

export default function ContactItem({ icon, label, value, href }) {
  return (
    <div className="flex items-start gap-4">
      <div className="w-10 h-10 shrink-0 flex items-center justify-center bg-brand-cream text-brand-gold border border-brand-border">
        <Icon name={icon} size="md" />
      </div>
      <div>
        <Text as="span" size="xs" tone="muted" className="uppercase tracking-widest block mb-1">
          {label}
        </Text>
        {href ? (
          <Link
            href={href}
            external={href.startsWith('http')}
            className="text-sm font-medium text-brand-navy hover:text-brand-gold"
          >
            {value}
          </Link>
        ) : (
          <Text size="sm" className="font-medium text-brand-navy">
            {value}
          </Text>
        )}
      </div>
    </div>
  );
}

ContactItem.propTypes = {
  icon: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  href: PropTypes.string,
};

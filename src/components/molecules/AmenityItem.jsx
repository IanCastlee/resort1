import PropTypes from 'prop-types';
import Icon from '../atoms/Icon';
import Heading from '../atoms/Heading';
import Text from '../atoms/Text';

export default function AmenityItem({ icon, title, description }) {
  return (
    <div className="group bg-brand-ivory border border-brand-border p-8 transition-all duration-300 hover:shadow-luxury hover:border-brand-gold">
      <div className="w-12 h-12 flex items-center justify-center bg-brand-cream text-brand-gold mb-6 transition-colors duration-300 group-hover:bg-brand-navy group-hover:text-brand-goldLight">
        <Icon name={icon} size="lg" />
      </div>
      <Heading level="h3" className="mb-3">
        {title}
      </Heading>
      <Text size="sm" tone="muted">
        {description}
      </Text>
    </div>
  );
}

AmenityItem.propTypes = {
  icon: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

import PropTypes from 'prop-types';
import Text from '../atoms/Text';
import Badge from '../atoms/Badge';

export default function MapSection({ embedUrl, googleMapsLink, caption }) {
  return (
    <div className="bg-brand-ivory border border-brand-border overflow-hidden shadow-luxury">
      <div className="relative h-80 sm:h-96 w-full bg-brand-cream">
        <iframe
          title="Featured Destination Map"
          src={embedUrl}
          className="w-full h-full border-0"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
      <div className="p-6 flex flex-wrap items-center justify-between gap-4 border-t border-brand-border">
        <Text size="xs" tone="muted">
          {caption}
        </Text>
        <Badge variant="cream">Google Maps Link: {googleMapsLink}</Badge>
      </div>
    </div>
  );
}

MapSection.propTypes = {
  embedUrl: PropTypes.string.isRequired,
  googleMapsLink: PropTypes.string.isRequired,
  caption: PropTypes.string,
};

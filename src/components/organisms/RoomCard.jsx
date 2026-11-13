import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import Image from '../atoms/Image';
import Badge from '../atoms/Badge';
import Heading from '../atoms/Heading';
import Text from '../atoms/Text';
import Button from '../atoms/Button';
import Link from '../atoms/Link';
import Icon from '../atoms/Icon';
import RoomPrice from '../molecules/RoomPrice';

export default function RoomCard({
  name,
  location,
  capacity,
  price,
  rating,
  reviewsCount,
  badge,
  description,
  features = [],
  externalUrl,
  image,
  inquireLabel = 'Inquire',
  profileLabel = 'View Profile',
}) {
  const navigate = useNavigate();

  const handleInquire = () => {
    navigate(`/contact?room=${encodeURIComponent(name)}`);
  };

  return (
    <article className="group bg-brand-ivory border border-brand-border flex flex-col justify-between overflow-hidden transition-all duration-300 hover:shadow-luxuryHover">
      <div>
        <div className="relative h-64 overflow-hidden bg-brand-cream">
          <Image
            src={image}
            alt={name}
            className="w-full h-full transition-transform duration-700 group-hover:scale-105"
          />
          {badge && (
            <div className="absolute top-4 left-4">
              <Badge variant="light">{badge}</Badge>
            </div>
          )}
        </div>

        <div className="p-6 sm:p-8">
          <div className="flex items-start gap-1.5 text-brand-slate mb-2">
            <Icon name="mapPin" size="sm" className="text-brand-gold shrink-0 mt-0.5" />
            <Text as="span" size="xs" tone="muted">
              {location}
            </Text>
          </div>

          <Heading level="h3" className="mb-2">
            {name}
          </Heading>

          <Text size="xs" tone="muted" className="mb-4 font-medium">
            {capacity}
          </Text>

          <Text size="sm" tone="muted" className="mb-5">
            {description}
          </Text>

          <div className="flex flex-wrap gap-2 mb-6">
            {features.map((feat) => (
              <Badge key={feat} variant="cream">
                {feat}
              </Badge>
            ))}
          </div>
        </div>
      </div>

      <div className="px-6 sm:px-8 pb-6 sm:pb-8">
        <RoomPrice price={price} rating={rating} reviewsCount={reviewsCount} />

        <div className="mt-5 flex items-center gap-3">
          <Button
            variant="secondary"
            size="sm"
            fullWidth
            onClick={handleInquire}
          >
            {inquireLabel}
          </Button>
          {externalUrl && (
            <Link
              href={externalUrl}
              external
              className="w-full inline-flex items-center justify-center px-4 py-2 text-xs uppercase tracking-widest border border-brand-navy text-brand-navy hover:bg-brand-cream text-center"
            >
              {profileLabel}
            </Link>
          )}
        </div>
      </div>
    </article>
  );
}

RoomCard.propTypes = {
  name: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  capacity: PropTypes.string.isRequired,
  price: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  rating: PropTypes.string,
  reviewsCount: PropTypes.string,
  badge: PropTypes.string,
  description: PropTypes.string.isRequired,
  features: PropTypes.arrayOf(PropTypes.string),
  externalUrl: PropTypes.string,
  image: PropTypes.string.isRequired,
  inquireLabel: PropTypes.string,
  profileLabel: PropTypes.string,
};

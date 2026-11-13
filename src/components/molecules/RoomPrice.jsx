import PropTypes from 'prop-types';
import Text from '../atoms/Text';
import Icon from '../atoms/Icon';
import { formatPrice } from '../../utils/formatters';

export default function RoomPrice({ price, rating, reviewsCount }) {
  return (
    <div className="flex flex-wrap items-center justify-between gap-2 pt-3 border-t border-brand-border">
      <div className="flex items-center gap-1.5">
        <Icon name="star" size="sm" className="text-brand-gold" />
        <Text as="span" size="sm" className="font-semibold text-brand-navy">
          {rating}
        </Text>
        {reviewsCount && (
          <Text as="span" size="xs" tone="muted">
            ({reviewsCount})
          </Text>
        )}
      </div>
      <Text as="span" size="xs" tone="muted" className=" uppercase tracking-wider">
        {formatPrice(price)}
      </Text>
    </div>
  );
}

RoomPrice.propTypes = {
  price: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  rating: PropTypes.string,
  reviewsCount: PropTypes.string,
};

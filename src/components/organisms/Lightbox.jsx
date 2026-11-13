import PropTypes from 'prop-types';
import Image from '../atoms/Image';
import Icon from '../atoms/Icon';
import Text from '../atoms/Text';
import Badge from '../atoms/Badge';

export default function Lightbox({
  isOpen,
  item,
  onClose,
  onNext,
  onPrev,
}) {
  if (!isOpen || !item) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={item.alt}
      style={{ backgroundColor: 'rgba(13, 27, 42, 0.95)' }}
      className="fixed inset-0 z-50 backdrop-blur-md flex items-center justify-center p-4 sm:p-8"
    >
      <button
        type="button"
        onClick={onClose}
        aria-label="Close lightbox"
        className="absolute top-6 right-6 p-3 text-brand-ivory hover:text-brand-gold focus:outline-none focus:ring-2 focus:ring-brand-gold"
      >
        <Icon name="close" size="lg" />
      </button>

      <button
        type="button"
        onClick={onPrev}
        aria-label="Previous image"
        className="absolute left-4 sm:left-8 p-3 bg-brand-navyLight text-brand-ivory hover:text-brand-gold border border-brand-gold focus:outline-none focus:ring-2 focus:ring-brand-gold"
      >
        <Icon name="chevronLeft" size="lg" />
      </button>

      <div className="max-w-4xl w-full flex flex-col items-center">
        <div className="max-h-[75vh] overflow-hidden border border-brand-gold">
          <Image
            src={item.src}
            alt={item.alt}
            eager
            className="max-h-[75vh] w-auto object-contain"
          />
        </div>
        <div className="mt-4 text-center">
          {item.category && <Badge variant="gold" className="mb-2">{item.category}</Badge>}
          <Text size="md" tone="light" className="font-serif">
            {item.caption}
          </Text>
        </div>
      </div>

      <button
        type="button"
        onClick={onNext}
        aria-label="Next image"
        className="absolute right-4 sm:right-8 p-3 bg-brand-navyLight text-brand-ivory hover:text-brand-gold border border-brand-gold focus:outline-none focus:ring-2 focus:ring-brand-gold"
      >
        <Icon name="chevronRight" size="lg" />
      </button>
    </div>
  );
}

Lightbox.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  item: PropTypes.shape({
    id: PropTypes.string,
    src: PropTypes.string,
    alt: PropTypes.string,
    category: PropTypes.string,
    caption: PropTypes.string,
  }),
  onClose: PropTypes.func.isRequired,
  onNext: PropTypes.func.isRequired,
  onPrev: PropTypes.func.isRequired,
};

import PropTypes from 'prop-types';
import Image from '../atoms/Image';
import Badge from '../atoms/Badge';
import Text from '../atoms/Text';
import RevealOnScroll from '../atoms/RevealOnScroll';

export default function GalleryGrid({ items = [], onSelect }) {
  return (
    <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
      {items.map((item, index) => (
        <RevealOnScroll key={item.id} delay={(index % 3) * 100}>
          <button
            type="button"
            onClick={() => onSelect && onSelect(index)}
            className="group relative block w-full overflow-hidden bg-brand-navy text-left break-inside-avoid border border-brand-border focus:outline-none focus:ring-2 focus:ring-brand-gold"
          >
            <Image
              src={item.src}
              alt={item.alt}
              className="w-full h-auto transition-transform duration-700 group-hover:scale-105 group-hover:opacity-90"
            />
            <div
              style={{
                background:
                  'linear-gradient(to top, rgba(13, 27, 42, 0.90), rgba(13, 27, 42, 0.25), transparent)',
              }}
              className="inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 absolute flex flex-col justify-end p-6"
            >
              {item.category && (
                <div className="mb-2">
                  <Badge variant="gold">{item.category}</Badge>
                </div>
              )}
              <Text size="sm" tone="light" className="font-serif">
                {item.caption}
              </Text>
            </div>
          </button>
        </RevealOnScroll>
      ))}
    </div>
  );
}

GalleryGrid.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      src: PropTypes.string.isRequired,
      alt: PropTypes.string.isRequired,
      category: PropTypes.string,
      caption: PropTypes.string,
    })
  ).isRequired,
  onSelect: PropTypes.func,
};

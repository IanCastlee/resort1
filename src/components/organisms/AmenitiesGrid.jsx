import PropTypes from 'prop-types';
import AmenityItem from '../molecules/AmenityItem';
import RevealOnScroll from '../atoms/RevealOnScroll';

export default function AmenitiesGrid({ amenities = [] }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {amenities.map((amenity, index) => (
        <RevealOnScroll key={amenity.id} delay={(index % 3) * 100}>
          <AmenityItem
            icon={amenity.icon}
            title={amenity.title}
            description={amenity.description}
          />
        </RevealOnScroll>
      ))}
    </div>
  );
}

AmenitiesGrid.propTypes = {
  amenities: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      icon: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    })
  ).isRequired,
};

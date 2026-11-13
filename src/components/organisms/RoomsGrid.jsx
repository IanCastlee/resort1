import PropTypes from 'prop-types';
import RoomCard from './RoomCard';
import RevealOnScroll from '../atoms/RevealOnScroll';

export default function RoomsGrid({ rooms = [] }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {rooms.map((room, index) => (
        <RevealOnScroll key={room.id} delay={(index % 3) * 120}>
          <RoomCard
            name={room.name}
            location={room.location}
            capacity={room.capacity}
            price={room.price}
            rating={room.rating}
            reviewsCount={room.reviewsCount}
            badge={room.badge}
            description={room.description}
            features={room.features}
            externalUrl={room.externalUrl}
            image={room.image}
          />
        </RevealOnScroll>
      ))}
    </div>
  );
}

RoomsGrid.propTypes = {
  rooms: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
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
    })
  ).isRequired,
};

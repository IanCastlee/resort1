import PropTypes from 'prop-types';
import Badge from '../atoms/Badge';
import Text from '../atoms/Text';
import Divider from '../atoms/Divider';

export default function TestimonialCard({ quote, author, role, rating }) {
  return (
    <article className="bg-brand-ivory border border-brand-border p-8 sm:p-10 shadow-luxury flex flex-col justify-between h-full">
      <div>
        {rating && (
          <div className="mb-6">
            <Badge variant="gold">{rating}</Badge>
          </div>
        )}
        <Text
          size="lg"
          className="font-serif italic text-brand-navy leading-relaxed mb-6"
        >
          &ldquo;{quote}&rdquo;
        </Text>
      </div>
      <div>
        <Divider variant="gold" className="mb-4" />
        <Text size="sm" className="font-semibold text-brand-navy">
          {author}
        </Text>
        {role && (
          <Text size="xs" tone="muted" className="uppercase tracking-widest mt-0.5">
            {role}
          </Text>
        )}
      </div>
    </article>
  );
}

TestimonialCard.propTypes = {
  quote: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  role: PropTypes.string,
  rating: PropTypes.string,
};

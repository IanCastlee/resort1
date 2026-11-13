import { useState } from 'react';
import PropTypes from 'prop-types';
import TestimonialCard from '../molecules/TestimonialCard';
import Icon from '../atoms/Icon';

export default function TestimonialsSlider({ testimonials = [] }) {
  const [current, setCurrent] = useState(0);

  if (!testimonials.length) return null;

  const nextSlide = () =>
    setCurrent((prev) => (prev + 1) % testimonials.length);
  const prevSlide = () =>
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <div>
      <div className="hidden lg:grid lg:grid-cols-3 gap-8">
        {testimonials.map((item) => (
          <TestimonialCard
            key={item.id}
            quote={item.quote}
            author={item.author}
            role={item.role}
            rating={item.rating}
          />
        ))}
      </div>

      <div className="lg:hidden">
        <TestimonialCard
          quote={testimonials[current].quote}
          author={testimonials[current].author}
          role={testimonials[current].role}
          rating={testimonials[current].rating}
        />
        <div className="flex items-center justify-center gap-4 mt-6">
          <button
            type="button"
            onClick={prevSlide}
            aria-label="Previous testimonial"
            className="p-2.5 border border-brand-border bg-brand-ivory text-brand-navy hover:border-brand-gold"
          >
            <Icon name="chevronLeft" size="md" />
          </button>
          <span className="text-xs uppercase tracking-widest text-brand-slate">
            {current + 1} / {testimonials.length}
          </span>
          <button
            type="button"
            onClick={nextSlide}
            aria-label="Next testimonial"
            className="p-2.5 border border-brand-border bg-brand-ivory text-brand-navy hover:border-brand-gold"
          >
            <Icon name="chevronRight" size="md" />
          </button>
        </div>
      </div>
    </div>
  );
}

TestimonialsSlider.propTypes = {
  testimonials: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      quote: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
      role: PropTypes.string,
      rating: PropTypes.string,
    })
  ).isRequired,
};

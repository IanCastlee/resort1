import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import Image from "../atoms/Image";
import Badge from "../atoms/Badge";
import Heading from "../atoms/Heading";
import Text from "../atoms/Text";
import Button from "../atoms/Button";

export default function HeroSection({
  badge,
  title,
  subtitle,
  primaryCta,
  secondaryCta,
  image,
  imageAlt,
  spotlightCards = [],
}) {
  const navigate = useNavigate();

  return (
    <section className="relative min-h-screen w-full flex flex-col justify-center pt-36 sm:pt-40 lg:pt-32 pb-16 overflow-hidden bg-brand-navy">
      {/* Full-Screen Background Image & Rich Dark Gradient Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src={image}
          alt={imageAlt}
          eager
          className="w-full h-full object-cover opacity-50 scale-105 transition-transform duration-1000"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(90deg, rgba(13, 27, 42, 0.94) 0%, rgba(13, 27, 42, 0.82) 55%, rgba(13, 27, 42, 0.68) 100%)",
          }}
        />
      </div>

      {/* Hero Foreground Content */}
      <div className="relative z-10 max-w-[1536px] mx-auto px-2 sm:px-6 lg:px-10 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-7 animate-fade-up">
          {badge && (
            <div className="mb-6">
              <Badge variant="navy">{badge}</Badge>
            </div>
          )}

          <Heading level="h1" tone="light" className="mb-6 drop-shadow">
            {title}
          </Heading>

          <Text
            size="lg"
            tone="light"
            className="max-w-2xl mb-10 font-normal leading-relaxed drop-shadow"
          >
            {subtitle}
          </Text>

          <div className="flex flex-wrap items-center gap-4">
            {primaryCta && (
              <Button
                variant="primary"
                size="lg"
                onClick={() => navigate(primaryCta.path)}
              >
                {primaryCta.label}
              </Button>
            )}
            {secondaryCta && (
              <Button
                variant="outlineLight"
                size="lg"
                onClick={() => navigate(secondaryCta.path)}
              >
                {secondaryCta.label}
              </Button>
            )}
          </div>
        </div>

        {spotlightCards.length > 0 && (
          <div className="lg:col-span-5 space-y-5 animate-fade-up">
            {spotlightCards.map((card) => (
              <div
                key={card.name}
                className="bg-brand-ivory p-6 sm:p-7 border-l-4 border-brand-gold shadow-luxuryHover"
              >
                <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                  <Badge variant="gold">{card.badge}</Badge>
                  <Text
                    as="span"
                    size="xs"
                    className="font-semibold text-brand-navy"
                  >
                    {card.score}
                  </Text>
                </div>
                <Heading level="h3" tone="dark" className="mb-1.5">
                  {card.name}
                </Heading>
                <Text size="xs" tone="muted" className="mb-2.5">
                  {card.location}
                </Text>
                <Text size="xs" className="text-brand-navy font-semibold">
                  {card.note}
                </Text>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

HeroSection.propTypes = {
  badge: PropTypes.string,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  primaryCta: PropTypes.shape({
    label: PropTypes.string.isRequired,
    path: PropTypes.string.isRequired,
  }),
  secondaryCta: PropTypes.shape({
    label: PropTypes.string.isRequired,
    path: PropTypes.string.isRequired,
  }),
  image: PropTypes.string.isRequired,
  imageAlt: PropTypes.string.isRequired,
  spotlightCards: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      location: PropTypes.string.isRequired,
      badge: PropTypes.string,
      score: PropTypes.string,
      note: PropTypes.string,
    }),
  ),
};

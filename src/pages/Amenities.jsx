import { Helmet } from 'react-helmet-async';
import MainLayout from '../components/templates/MainLayout';
import AmenitiesGrid from '../components/organisms/AmenitiesGrid';
import SectionTitle from '../components/molecules/SectionTitle';
import Heading from '../components/atoms/Heading';
import Text from '../components/atoms/Text';
import Badge from '../components/atoms/Badge';
import Image from '../components/atoms/Image';
import Link from '../components/atoms/Link';
import resortData from '../data/resort';

export default function Amenities() {
  const {
    brand,
    navigation,
    amenities,
    reviewShowcase,
    destinations,
    footerLinks,
    contact,
  } = resortData;

  return (
    <MainLayout
      brand={brand}
      navItems={navigation}
      footerLinks={footerLinks}
      contact={contact}
    >
      <Helmet>
        <title>{`Thermal Springs, Amenities & Nearby Attractions | ${brand.name}`}</title>
        <meta
          name="description"
          content={`Discover the natural sulfuric hot pools, lukewarm and cold spring pools, cabanas, and nearby attractions around ${brand.name} in ${brand.location}.`}
        />
        <meta property="og:title" content={`Thermal Springs & Amenities | ${brand.name}`} />
      </Helmet>

      {/* Resort Amenities */}
      <section className="pt-36 pb-20 max-w-7xl mx-auto px-6">
        <SectionTitle
          eyebrow="Amenities & Thermal Pools"
          title="Naturally Heated Waters from Mount Bulusan"
          subtitle="Experience soothing sulfuric hot springs, lukewarm relaxation pools, refreshing cold freshwater pools, and family-friendly facilities."
          className="mb-16"
        />
        <AmenitiesGrid amenities={amenities} />
      </section>

      {/* Experience Breakdown */}
      <section className="py-24 bg-brand-cream border-y border-brand-border">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <SectionTitle
              eyebrow={reviewShowcase.eyebrow}
              title={reviewShowcase.title}
              subtitle={reviewShowcase.description}
              align="left"
            />
            <div className="space-y-5 pt-2">
              {reviewShowcase.pillars.map((pillar) => (
                <div
                  key={pillar.title}
                  className="bg-brand-ivory p-6 border-l-2 border-brand-gold"
                >
                  <Heading level="h4" className="mb-1">
                    {pillar.title}
                  </Heading>
                  <Text size="sm" tone="muted">
                    {pillar.description}
                  </Text>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-6 bg-brand-ivory border border-brand-border p-8 sm:p-10 shadow-luxury">
            <div className="flex items-center justify-between border-b border-brand-border pb-6 mb-6">
              <div>
                <Text size="xs" tone="muted" className="uppercase tracking-widest">
                  {brand.name} Experience Highlights
                </Text>
                <Heading level="h3" className="mt-1">
                  {reviewShowcase.overallScore}
                </Heading>
              </div>
              <Badge variant="gold">{reviewShowcase.rankingBadge}</Badge>
            </div>

            <div className="space-y-4 mb-8">
              {reviewShowcase.metrics.map((metric) => (
                <div key={metric.label}>
                  <div className="flex justify-between text-xs uppercase tracking-widest mb-1.5">
                    <span className="font-semibold text-brand-navy">{metric.label}</span>
                    <span className="text-brand-gold font-bold">{metric.score}</span>
                  </div>
                  <div className="w-full h-2 bg-brand-cream overflow-hidden">
                    <div
                      className="h-full bg-brand-navy"
                      style={{ width: `${metric.score * 10}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-brand-cream p-6 border border-brand-border">
              <Text size="sm" className="font-serif italic text-brand-navy mb-2">
                &ldquo;{reviewShowcase.featuredQuote.quote}&rdquo;
              </Text>
              <Text size="xs" tone="muted">
                {reviewShowcase.featuredQuote.author} · {reviewShowcase.featuredQuote.meta}
              </Text>
            </div>
          </div>
        </div>
      </section>

      {/* Activities & Nearby Attractions */}
      <section className="py-24 max-w-7xl mx-auto px-6">
        <SectionTitle
          eyebrow="Activities & Nearby Attractions"
          title={`Explore Surrounding Attractions Near ${brand.name}`}
          subtitle={`Pair your thermal spring soak at ${brand.name} with iconic natural landmarks and heritage sights across the province.`}
          className="mb-16"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {destinations.map((dest) => (
            <article
              key={dest.country}
              className="bg-brand-ivory border border-brand-border overflow-hidden flex flex-col justify-between shadow-luxury"
            >
              <div>
                <div className="h-52 overflow-hidden">
                  <Image
                    src={dest.image}
                    alt={dest.country}
                    className="w-full h-full"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <Heading level="h3">{dest.country}</Heading>
                    <Badge variant="gold">{dest.count}</Badge>
                  </div>
                  <Text size="xs" tone="muted">
                    {dest.highlights}
                  </Text>
                </div>
              </div>
              <div className="px-6 pb-6">
                <Link
                  to={dest.url}
                  className="text-xs uppercase tracking-widest font-semibold text-brand-navy hover:text-brand-gold"
                >
                  Inquire About Visits &rarr;
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </MainLayout>
  );
}

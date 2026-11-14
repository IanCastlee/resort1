import { Helmet } from 'react-helmet-async';
import { useNavigate } from 'react-router-dom';
import MainLayout from '../components/templates/MainLayout';
import HeroSection from '../components/organisms/HeroSection';
import RoomsGrid from '../components/organisms/RoomsGrid';
import AmenitiesGrid from '../components/organisms/AmenitiesGrid';
import GalleryGrid from '../components/organisms/GalleryGrid';
import TestimonialsSlider from '../components/organisms/TestimonialsSlider';
import SectionTitle from '../components/molecules/SectionTitle';
import Button from '../components/atoms/Button';
import Heading from '../components/atoms/Heading';
import Text from '../components/atoms/Text';
import resortData from '../data/resort';

export default function Home() {
  const navigate = useNavigate();
  const {
    brand,
    navigation,
    hero,
    stats,
    about,
    rooms,
    amenities,
    gallery,
    testimonials,
    footerLinks,
    contact,
  } = resortData;

  return (
    <MainLayout
      brand={brand}
      navItems={navigation}
      footerLinks={footerLinks}
      contact={contact}
      ctaLabel={hero.primaryCta.label}
      ctaPath={hero.primaryCta.path}
    >
      <Helmet>
        <title>{`${brand.name} | ${brand.tagline}`}</title>
        <meta name="description" content={brand.shortDescription} />
        <meta
          property="og:title"
          content={`${brand.name} — ${brand.location}`}
        />
        <meta property="og:description" content={brand.shortDescription} />
        <meta property="og:type" content="website" />
      </Helmet>

      <HeroSection
        badge={hero.badge}
        title={hero.title}
        subtitle={hero.subtitle}
        primaryCta={hero.primaryCta}
        secondaryCta={hero.secondaryCta}
        image={hero.image}
        imageAlt={hero.imageAlt}
        spotlightCards={hero.spotlightCards}
      />

      {/* Resort Highlights Bar */}
      <section className="bg-brand-cream border-b border-brand-border py-12">
        <div className="max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-10 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8 text-center">
          {stats.map((stat) => (
            <div key={stat.label}>
              <Heading level="h2" tone="dark" className="mb-1">
                {stat.value}
              </Heading>
              <Text size="xs" tone="muted" className="uppercase tracking-widest">
                {stat.label}
              </Text>
            </div>
          ))}
        </div>
      </section>

      {/* Short Intro */}
      <section className="py-24 max-w-5xl mx-auto px-4 sm:px-6 lg:px-10 text-center">
        <SectionTitle
          eyebrow={about.eyebrow}
          title={about.title}
          subtitle={about.paragraphs[0]}
        />
      </section>

      {/* Featured Rooms & Cottages */}
      <section className="py-24 bg-brand-cream border-y border-brand-border">
        <div className="max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-10">
          <SectionTitle
            eyebrow="Accommodations & Day-Use Cottages"
            title={`Restful Stays at ${brand.name}`}
            subtitle="From air-conditioned overnight rooms and group dormitories to poolside open cabanas and shaded picnic sheds."
            className="mb-16"
          />
          <RoomsGrid rooms={rooms.slice(0, 3)} />
          <div className="mt-14 text-center">
            <Button variant="outline" size="lg" onClick={() => navigate('/rooms')}>
              View All Rooms, Dormitories &amp; Cottages
            </Button>
          </div>
        </div>
      </section>

      {/* Amenities Highlights */}
      <section className="py-24 max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-10">
        <SectionTitle
          eyebrow="Thermal Springs & Facilities"
          title="Natural Volcanic Healing & Family Comfort"
          subtitle={about.paragraphs[1]}
          className="mb-16"
        />
        <AmenitiesGrid amenities={amenities} />
      </section>

      {/* Gallery Preview */}
      <section className="py-24 bg-brand-cream border-t border-brand-border">
        <div className="max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-10">
          <SectionTitle
            eyebrow="Visual Sanctuary"
            title={`Glimpses of ${brand.name}`}
            subtitle={`Steaming sulfuric thermal waters, lush coconut groves, and tranquil mountain views in ${brand.location}.`}
            className="mb-16"
          />
          <GalleryGrid
            items={gallery.slice(0, 6)}
            onSelect={() => navigate('/gallery')}
          />
          <div className="mt-12 text-center">
            <Button variant="outline" onClick={() => navigate('/gallery')}>
              Open Full Gallery &amp; Lightbox
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-10">
        <SectionTitle
          eyebrow="Guest Impressions"
          title={`Why Travelers Love Soaking in ${brand.name}`}
          subtitle="Authentic experiences from families, trekkers, and returning guests."
          className="mb-16"
        />
        <TestimonialsSlider testimonials={testimonials} />
      </section>

      {/* CTA */}
      <section className="py-24 bg-brand-navy text-brand-ivory text-center">
        <div className="max-w-3xl mx-auto px-6 lg:px-10">
          <SectionTitle
            eyebrow={`Plan Your Escape to ${brand.name}`}
            title="Experience the Healing Waters of Mount Bulusan"
            subtitle={`Whether you are visiting for a relaxing evening soak or booking an overnight family retreat in ${brand.location}, we look forward to welcoming you.`}
            tone="light"
            className="mb-10"
          />
          <div className="flex flex-wrap justify-center gap-4">
            <Button variant="primary" size="lg" onClick={() => navigate('/contact')}>
              {hero.primaryCta.label}
            </Button>
            <Button variant="outlineLight" size="lg" onClick={() => navigate('/rooms')}>
              {hero.secondaryCta.label}
            </Button>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}

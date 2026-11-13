import { Helmet } from 'react-helmet-async';
import { useNavigate } from 'react-router-dom';
import MainLayout from '../components/templates/MainLayout';
import SectionTitle from '../components/molecules/SectionTitle';
import Heading from '../components/atoms/Heading';
import Text from '../components/atoms/Text';
import Badge from '../components/atoms/Badge';
import Button from '../components/atoms/Button';
import Image from '../components/atoms/Image';
import Link from '../components/atoms/Link';
import Icon from '../components/atoms/Icon';
import resortData from '../data/resort';

export default function About() {
  const navigate = useNavigate();
  const {
    brand,
    navigation,
    about,
    stats,
    journal,
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
        <title>{`About ${brand.name} | ${brand.location}`}</title>
        <meta
          name="description"
          content={`Learn the story of ${brand.name} at the foothills of Mount Bulusan in ${brand.location}.`}
        />
        <meta property="og:title" content={`About ${brand.name}`} />
      </Helmet>

      {/* About Story */}
      <section className="pt-36 pb-24 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <SectionTitle
              eyebrow={about.eyebrow}
              title={about.title}
              align="left"
            />
            {about.paragraphs.map((para) => (
              <Text key={para} size="md" tone="muted">
                {para}
              </Text>
            ))}
            <div className="pt-2">
              <Badge variant="gold">{brand.trustBadge}</Badge>
            </div>
          </div>
          <div className="lg:col-span-6">
            <div className="border border-brand-border p-3 bg-brand-cream shadow-luxury">
              <Image
                src={about.image}
                alt={about.imageAlt}
                className="w-full h-96"
              />
            </div>
          </div>
        </div>
      </section>

      {/* How Your Visit Unfolds */}
      <section className="py-24 bg-brand-cream border-y border-brand-border">
        <div className="max-w-7xl mx-auto px-6">
          <SectionTitle
            eyebrow="Your Thermal Journey"
            title="From Mountain Arrival to Restorative Soaking, in Three Steps"
            subtitle={`Everything you need for an effortless day trip or overnight stay at ${brand.name}.`}
            className="mb-16"
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {about.howItWorks.map((item) => (
              <div
                key={item.step}
                className="bg-brand-ivory border border-brand-border p-8 shadow-luxury"
              >
                <Text
                  as="span"
                  size="lg"
                  tone="gold"
                  className="font-serif text-3xl block mb-4"
                >
                  {item.step}
                </Text>
                <Heading level="h3" className="mb-3">
                  {item.title}
                </Heading>
                <Text size="sm" tone="muted">
                  {item.description}
                </Text>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Two Ways to Experience */}
      <section className="py-24 max-w-7xl mx-auto px-6">
        <SectionTitle
          eyebrow="One Sanctuary, Two Ways to Stay"
          title={`For Overnight Guests and Day-Trip Families at ${brand.name}`}
          subtitle="Tailored spaces whether you are soaking under the stars or gathering with family for the day."
          className="mb-16"
        />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {about.audiences.map((aud) => (
            <div
              key={aud.tag}
              className="bg-brand-ivory border border-brand-border p-8 sm:p-10 flex flex-col justify-between shadow-luxury"
            >
              <div>
                <Badge variant="navy" className="mb-4">
                  {aud.tag}
                </Badge>
                <Heading level="h3" className="mb-4">
                  {aud.title}
                </Heading>
                <Text size="sm" tone="muted" className="mb-6">
                  {aud.description}
                </Text>
                <ul className="space-y-3 mb-8">
                  {aud.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-center gap-3 text-sm text-brand-navy">
                      <Icon name="check" size="sm" className="text-brand-gold shrink-0" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <Button
                  variant="primary"
                  onClick={() => navigate(aud.ctaPath)}
                >
                  {aud.ctaLabel}
                </Button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Editorial Visitor Journal */}
      <section className="py-24 bg-brand-cream border-t border-brand-border">
        <div className="max-w-7xl mx-auto px-6">
          <SectionTitle
            eyebrow={`${brand.name} Journal`}
            title="Visitor Tips, Thermal Wellness & Local Guides"
            subtitle={`Helpful notes before your journey to ${brand.location}.`}
            className="mb-16"
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {journal.map((article) => (
              <article
                key={article.title}
                className="bg-brand-ivory border border-brand-border p-8 flex flex-col justify-between shadow-luxury"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <Badge variant="gold">{article.category}</Badge>
                    <Text as="span" size="xs" tone="muted">
                      {article.readTime}
                    </Text>
                  </div>
                  <Heading level="h3" className="mb-3">
                    {article.title}
                  </Heading>
                  <Text size="sm" tone="muted" className="mb-6">
                    {article.excerpt}
                  </Text>
                </div>
                <Link
                  to={article.url}
                  className="text-xs uppercase tracking-widest font-semibold text-brand-navy hover:text-brand-gold"
                >
                  Inquire / Plan Visit &rarr;
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Footer Banner */}
      <section className="py-16 bg-brand-navy text-brand-ivory">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 sm:grid-cols-5 gap-8 text-center">
          {stats.map((stat) => (
            <div key={stat.label}>
              <Heading level="h2" tone="gold" className="mb-1">
                {stat.value}
              </Heading>
              <Text size="xs" tone="light" className="uppercase tracking-widest">
                {stat.label}
              </Text>
            </div>
          ))}
        </div>
      </section>
    </MainLayout>
  );
}

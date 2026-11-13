import { Helmet } from 'react-helmet-async';
import { useSearchParams } from 'react-router-dom';
import MainLayout from '../components/templates/MainLayout';
import BookingForm from '../components/organisms/BookingForm';
import MapSection from '../components/organisms/MapSection';
import SectionTitle from '../components/molecules/SectionTitle';
import ContactItem from '../components/molecules/ContactItem';
import SocialLinks from '../components/molecules/SocialLinks';
import Heading from '../components/atoms/Heading';
import Text from '../components/atoms/Text';
import Divider from '../components/atoms/Divider';
import { formatPhone } from '../utils/formatters';
import resortData from '../data/resort';

export default function Contact() {
  const [searchParams] = useSearchParams();
  const preselectedRoom = searchParams.get('room') || '';
  const { brand, navigation, rooms, footerLinks, contact } = resortData;

  return (
    <MainLayout
      brand={brand}
      navItems={navigation}
      footerLinks={footerLinks}
      contact={contact}
    >
      <Helmet>
        <title>{`Contact & Booking Inquiry | ${brand.name}`}</title>
        <meta
          name="description"
          content={`Book an air-conditioned room, family suite, or poolside cabana at ${brand.name} in ${brand.location}.`}
        />
        <meta property="og:title" content={`Contact & Booking | ${brand.name}`} />
      </Helmet>

      <section className="pt-36 pb-24 max-w-7xl mx-auto px-6">
        <SectionTitle
          eyebrow="Contact & Booking"
          title={`Plan Your Stay at ${brand.name}`}
          subtitle={`Send us an inquiry for overnight rooms, group dormitories, or day-use cottages at ${brand.location}.`}
          className="mb-16"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-7">
            <BookingForm
              rooms={rooms}
              defaultSelectedRoom={preselectedRoom}
              resortName={brand.name}
              resortLocation={brand.location}
            />
          </div>

          <div className="lg:col-span-5 space-y-8">
            <div className="bg-brand-ivory border border-brand-border p-8 sm:p-10 shadow-luxury space-y-6">
              <Heading level="h3">Resort Contact Details</Heading>
              <Text size="sm" tone="muted">
                Official contact channels and location information for {brand.fullName || brand.name}.
              </Text>
              <Divider variant="subtle" />

              <div className="space-y-5">
                <ContactItem
                  icon="mapPin"
                  label="Resort Address"
                  value={contact.address}
                />
                <ContactItem
                  icon="phone"
                  label="Phone Number"
                  value={formatPhone(contact.phone)}
                />
                <ContactItem
                  icon="mail"
                  label="Email Address"
                  value={contact.email}
                />
              </div>

              <Divider variant="subtle" />

              <div>
                <Text
                  as="span"
                  size="xs"
                  tone="muted"
                  className="uppercase tracking-widest block mb-3"
                >
                  Social Media Channels
                </Text>
                <SocialLinks socials={contact.socials} tone="dark" />
              </div>
            </div>

            <MapSection
              embedUrl={contact.mapEmbedUrl}
              googleMapsLink={contact.googleMapsLink}
              caption={`Location: ${contact.address}`}
            />
          </div>
        </div>
      </section>
    </MainLayout>
  );
}

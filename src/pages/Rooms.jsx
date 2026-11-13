import { Helmet } from 'react-helmet-async';
import MainLayout from '../components/templates/MainLayout';
import RoomsGrid from '../components/organisms/RoomsGrid';
import SectionTitle from '../components/molecules/SectionTitle';
import resortData from '../data/resort';

export default function Rooms() {
  const { brand, navigation, rooms, footerLinks, contact } = resortData;

  return (
    <MainLayout
      brand={brand}
      navItems={navigation}
      footerLinks={footerLinks}
      contact={contact}
    >
      <Helmet>
        <title>{`Rooms, Dormitories & Cottages | ${brand.name}`}</title>
        <meta
          name="description"
          content={`Explore air-conditioned overnight rooms, group dormitories, poolside cabanas, and picnic sheds at ${brand.name} in ${brand.location}.`}
        />
        <meta property="og:title" content={`Rooms & Cottages | ${brand.name}`} />
      </Helmet>

      <section className="pt-36 pb-24 max-w-7xl mx-auto px-6">
        <SectionTitle
          eyebrow="Rooms, Villas & Day-Use Cottages"
          title={`Accommodations at ${brand.name}`}
          subtitle={`Choose from air-conditioned overnight rooms, group dormitory quarters, open poolside cabanas, and covered picnic sheds in ${brand.location}. Unconfirmed rates and capacities are marked [TO BE CONFIRMED].`}
          className="mb-16"
        />
        <RoomsGrid rooms={rooms} />
      </section>
    </MainLayout>
  );
}

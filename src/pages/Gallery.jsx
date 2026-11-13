import { Helmet } from 'react-helmet-async';
import MainLayout from '../components/templates/MainLayout';
import GalleryGrid from '../components/organisms/GalleryGrid';
import Lightbox from '../components/organisms/Lightbox';
import SectionTitle from '../components/molecules/SectionTitle';
import useLightbox from '../hooks/useLightbox';
import resortData from '../data/resort';

export default function Gallery() {
  const { brand, navigation, gallery, footerLinks, contact } = resortData;
  const {
    isOpen,
    currentItem,
    openLightbox,
    closeLightbox,
    showNext,
    showPrev,
  } = useLightbox(gallery);

  return (
    <MainLayout
      brand={brand}
      navItems={navigation}
      footerLinks={footerLinks}
      contact={contact}
    >
      <Helmet>
        <title>{`Property & Destination Gallery | ${brand.name}`}</title>
        <meta
          name="description"
          content="Browse editorial photography from GoHotelly featured stays across Andalusia, Mexico, and the United States."
        />
        <meta property="og:title" content={`Visual Gallery | ${brand.name}`} />
      </Helmet>

      <section className="pt-36 pb-24 max-w-7xl mx-auto px-6">
        <SectionTitle
          eyebrow="Visual Portfolio"
          title="Editorial Property & Destination Gallery"
          subtitle="Select any photograph to inspect full-screen with keyboard navigation (Arrow Left/Right and Escape)."
          className="mb-16"
        />
        <GalleryGrid items={gallery} onSelect={openLightbox} />
      </section>

      <Lightbox
        isOpen={isOpen}
        item={currentItem}
        onClose={closeLightbox}
        onNext={showNext}
        onPrev={showPrev}
      />
    </MainLayout>
  );
}

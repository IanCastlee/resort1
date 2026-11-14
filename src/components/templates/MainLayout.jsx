import PropTypes from 'prop-types';
import Navbar from '../organisms/Navbar';
import Footer from '../organisms/Footer';
import FloatingChatButton from '../organisms/FloatingChatButton';
import DemoNoticeModal from '../molecules/DemoNoticeModal';
import CurtainLoader from '../atoms/CurtainLoader';

export default function MainLayout({
  brand,
  navItems,
  footerLinks,
  contact,
  ctaLabel = 'Book / Inquire',
  ctaPath = '/contact',
  children,
}) {
  const chatHref = contact.whatsappNumber
    ? `https://wa.me/${contact.whatsappNumber}`
    : contact.messengerUrl || '/contact';

  return (
    <div className="min-h-screen flex flex-col bg-brand-ivory text-brand-charcoal">
      {/* Luxury Curtain Page Transition Loader */}
      <CurtainLoader brand={brand} />

      {/* Demo Notice Modal on initial load */}
      <DemoNoticeModal />

      <Navbar
        brandName={brand.name}
        brandSubtitle={brand.location}
        navItems={navItems}
        ctaLabel={ctaLabel}
        ctaPath={ctaPath}
      />

      <main className="flex-grow">{children}</main>

      <Footer
        brand={brand}
        navItems={navItems}
        footerLinks={footerLinks}
        contact={contact}
      />

      <FloatingChatButton href={chatHref} label="Direct Inquiry" />
    </div>
  );
}

MainLayout.propTypes = {
  brand: PropTypes.object.isRequired,
  navItems: PropTypes.array.isRequired,
  footerLinks: PropTypes.object.isRequired,
  contact: PropTypes.object.isRequired,
  ctaLabel: PropTypes.string,
  ctaPath: PropTypes.string,
  children: PropTypes.node.isRequired,
};

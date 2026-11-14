import PropTypes from 'prop-types';
import Logo from '../atoms/Logo';
import Heading from '../atoms/Heading';
import Text from '../atoms/Text';
import Link from '../atoms/Link';
import Divider from '../atoms/Divider';
import SocialLinks from '../molecules/SocialLinks';

export default function Footer({
  brand,
  navItems = [],
  footerLinks,
  contact,
}) {
  const renderFooterLink = (item) => {
    const isExternal = item.url.startsWith('http');
    return (
      <Link
        to={!isExternal ? item.url : undefined}
        href={isExternal ? item.url : undefined}
        external={isExternal}
        className="text-xs text-brand-ivory hover:text-brand-goldLight"
      >
        {item.label}
      </Link>
    );
  };

  return (
    <footer className="bg-brand-navy text-brand-ivory pt-20 pb-12 border-t border-brand-gold">
      <div className="max-w-[1536px] mx-auto px-5 sm:px-6 lg:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-10 pb-16">
          <div className="lg:col-span-2 space-y-5">
            <Logo name={brand.name} subtitle={brand.location} tone="light" />
            <Text size="sm" tone="light" className="max-w-sm">
              {brand.shortDescription}
            </Text>
            <SocialLinks socials={contact.socials} tone="light" />
          </div>

          <div>
            <Heading level="h4" tone="gold" className="mb-4 text-sm uppercase tracking-widest">
              Navigation
            </Heading>
            <ul className="space-y-2.5">
              {navItems.map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className="text-xs text-brand-ivory hover:text-brand-goldLight"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <Heading level="h4" tone="gold" className="mb-4 text-sm uppercase tracking-widest">
              Resort
            </Heading>
            <ul className="space-y-2.5">
              {footerLinks.explore.map((item) => (
                <li key={item.label}>{renderFooterLink(item)}</li>
              ))}
            </ul>
          </div>

          <div>
            <Heading level="h4" tone="gold" className="mb-4 text-sm uppercase tracking-widest">
              Experiences
            </Heading>
            <ul className="space-y-2.5">
              {footerLinks.product.map((item) => (
                <li key={item.label}>{renderFooterLink(item)}</li>
              ))}
            </ul>
          </div>

          <div>
            <Heading level="h4" tone="gold" className="mb-4 text-sm uppercase tracking-widest">
              Information
            </Heading>
            <ul className="space-y-2.5">
              {[...footerLinks.company, ...footerLinks.legal].map((item) => (
                <li key={item.label}>{renderFooterLink(item)}</li>
              ))}
            </ul>
          </div>
        </div>

        <Divider variant="subtle" className="opacity-20 mb-8" />

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-brand-ivory">
          <Text as="span" size="xs" tone="light">
            {brand.copyright}
          </Text>
          <div className="flex items-center gap-6">
            <span>{brand.location}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

Footer.propTypes = {
  brand: PropTypes.shape({
    name: PropTypes.string.isRequired,
    location: PropTypes.string,
    shortDescription: PropTypes.string,
    copyright: PropTypes.string,
  }).isRequired,
  navItems: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      path: PropTypes.string.isRequired,
    })
  ),
  footerLinks: PropTypes.shape({
    explore: PropTypes.array.isRequired,
    product: PropTypes.array.isRequired,
    company: PropTypes.array.isRequired,
    legal: PropTypes.array.isRequired,
  }).isRequired,
  contact: PropTypes.shape({
    socials: PropTypes.array.isRequired,
  }).isRequired,
};

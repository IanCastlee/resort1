import { useState } from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import Logo from '../atoms/Logo';
import Button from '../atoms/Button';
import Icon from '../atoms/Icon';
import NavLink from '../molecules/NavLink';
import useScrollPosition from '../../hooks/useScrollPosition';

export default function Navbar({ brandName, brandSubtitle, navItems, ctaLabel, ctaPath }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { isScrolled } = useScrollPosition(30);
  const navigate = useNavigate();

  const handleCta = () => {
    setMobileOpen(false);
    navigate(ctaPath);
  };

  return (
    <div className="fixed top-0 left-0 right-0 z-[110]">
      {/* Top Utility Bar (Always showing clean location and resort name) */}
      <div
        className={`w-full transition-all duration-300 overflow-hidden ${
          isScrolled
            ? 'bg-brand-navy border-b border-brand-gold/30 text-brand-gold py-1 px-2 sm:px-6 lg:px-10'
            : 'bg-brand-navy/90 text-brand-gold py-1.5 px-2 sm:px-6 lg:px-10 border-b border-brand-gold/20'
        }`}
      >
        <div className="max-w-[1536px] mx-auto flex items-center justify-between text-[11px] font-semibold uppercase tracking-widest">
          <span className="flex items-center gap-1.5 truncate">
            <span className="w-2 h-2 rounded-full bg-brand-gold animate-pulse inline-block"></span>
            <span>{brandName} &middot; {brandSubtitle}</span>
          </span>
          <span className="shrink-0 text-brand-ivory/80 text-[10px] hidden sm:inline">
            Natural Thermal Springs &bull; Mount Bulusan
          </span>
        </div>
      </div>

      {/* Main Navbar */}
      <header
        style={{
          backgroundColor: isScrolled
            ? 'rgba(13, 27, 42, 0.98)'
            : 'rgba(13, 27, 42, 0.88)',
        }}
        className={`backdrop-blur-md transition-all duration-300 border-b border-brand-gold ${
          isScrolled ? 'shadow-luxury py-2 sm:py-3' : 'py-2.5 sm:py-5'
        }`}
      >
        <div className="max-w-[1536px] mx-auto px-2 sm:px-6 lg:px-10 flex items-center justify-between gap-6">
          <Logo name={brandName} subtitle={brandSubtitle} tone="light" />

          <nav className="hidden lg:flex items-center gap-7" aria-label="Main navigation">
            {navItems.map((item) => (
              <NavLink key={item.path} to={item.path} label={item.label} tone="light" />
            ))}
          </nav>

          <div className="hidden lg:block shrink-0">
            <Button variant="primary" size="sm" onClick={handleCta}>
              {ctaLabel}
            </Button>
          </div>

          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-expanded={mobileOpen}
            aria-label="Toggle navigation menu"
            className="lg:hidden p-2 text-brand-ivory hover:text-brand-gold focus:outline-none focus:ring-2 focus:ring-brand-gold"
          >
            <Icon name={mobileOpen ? 'close' : 'menu'} size="lg" />
          </button>
        </div>

        {mobileOpen && (
          <div className="lg:hidden bg-brand-navy border-t border-brand-gold px-6 pt-4 pb-6 space-y-4">
            <nav className="flex flex-col space-y-3" aria-label="Mobile navigation">
              {navItems.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  label={item.label}
                  tone="light"
                  onClick={() => setMobileOpen(false)}
                />
              ))}
            </nav>
            <div className="pt-2">
              <Button variant="primary" size="md" fullWidth onClick={handleCta}>
                {ctaLabel}
              </Button>
            </div>
          </div>
        )}
      </header>
    </div>
  );
}

Navbar.propTypes = {
  brandName: PropTypes.string.isRequired,
  brandSubtitle: PropTypes.string,
  navItems: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      path: PropTypes.string.isRequired,
    })
  ).isRequired,
  ctaLabel: PropTypes.string.isRequired,
  ctaPath: PropTypes.string.isRequired,
};

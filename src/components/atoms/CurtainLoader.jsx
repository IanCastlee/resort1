import { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';

/**
 * CurtainLoader (Gohotelly)
 * Style: Horizon Split Shutter (Top & Bottom Reveal).
 * Features:
 * - Top panel glides UP, bottom panel glides DOWN.
 * - Initial site open & refresh entrance reveal.
 * - Route transition shutter reveal.
 * - StrictMode safe (never gets stuck on home or any page).
 * - Safety watchdog timer guarantees dismissal under all circumstances.
 */
export default function CurtainLoader({ brand }) {
  const location = useLocation();
  const [stage, setStage] = useState('closed'); // 'closed' | 'opening' | 'idle'
  const isFirstRoute = useRef(true);
  const currentPath = useRef(location.pathname);

  // 1. Initial site open & refresh entrance reveal
  useEffect(() => {
    const openTimer = setTimeout(() => {
      setStage('opening');
    }, 750);

    const idleTimer = setTimeout(() => {
      setStage('idle');
    }, 1500);

    return () => {
      clearTimeout(openTimer);
      clearTimeout(idleTimer);
    };
  }, []);

  // 2. Route change horizon shutter transitions
  useEffect(() => {
    if (isFirstRoute.current) {
      isFirstRoute.current = false;
      currentPath.current = location.pathname;
      return;
    }

    if (location.pathname === currentPath.current) {
      return;
    }
    currentPath.current = location.pathname;

    setStage('closed');

    const scrollTimer = setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'instant' });
    }, 280);

    const openTimer = setTimeout(() => {
      setStage('opening');
    }, 600);

    const idleTimer = setTimeout(() => {
      setStage('idle');
    }, 1300);

    return () => {
      clearTimeout(scrollTimer);
      clearTimeout(openTimer);
      clearTimeout(idleTimer);
    };
  }, [location.pathname]);

  // 3. Absolute safety watchdog: Guarantee the loader CANNOT stay stuck
  useEffect(() => {
    if (stage !== 'idle') {
      const watchdog = setTimeout(() => {
        setStage('idle');
      }, 2400);
      return () => clearTimeout(watchdog);
    }
  }, [stage]);

  if (stage === 'idle') return null;

  const isFullyClosed = stage === 'closed';

  return (
    <div
      aria-hidden="true"
      className={`fixed inset-0 z-[250] overflow-hidden ${
        isFullyClosed ? 'pointer-events-auto' : 'pointer-events-none'
      }`}
    >
      {/* Top Horizon Panel (Slides UP) */}
      <div
        className={`absolute top-0 left-0 right-0 h-1/2 bg-[#0d1b2a] border-b border-brand-gold/30 shadow-[0_20px_50px_rgba(0,0,0,0.85)] transition-transform duration-700 ease-[cubic-bezier(0.77,0,0.175,1)] ${
          isFullyClosed ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/85 via-brand-navy/40 to-transparent" />
      </div>

      {/* Bottom Horizon Panel (Slides DOWN) */}
      <div
        className={`absolute bottom-0 left-0 right-0 h-1/2 bg-[#0d1b2a] border-t border-brand-gold/30 shadow-[0_-20px_50px_rgba(0,0,0,0.85)] transition-transform duration-700 ease-[cubic-bezier(0.77,0,0.175,1)] ${
          isFullyClosed ? 'translate-y-0' : 'translate-y-full'
        }`}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-brand-navy/40 to-transparent" />
      </div>

      {/* Center Grand Monogram & Brand Crest */}
      <div
        className={`absolute inset-0 flex flex-col items-center justify-center z-10 transition-all duration-400 ease-out ${
          isFullyClosed ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'
        }`}
      >
        <div className="relative flex flex-col items-center text-center px-6">
          <div className="relative mb-3 sm:mb-4">
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full border border-brand-gold flex items-center justify-center font-serif text-2xl sm:text-3xl text-brand-gold shadow-[0_0_35px_rgba(201,162,77,0.35)] bg-[#102030]">
              {brand?.name ? brand.name.charAt(0) : 'G'}
            </div>
            <div className="absolute -inset-1.5 rounded-full border border-brand-gold/30 animate-pulse pointer-events-none" />
          </div>

          <h2 className="font-sans text-xl sm:text-3xl font-bold tracking-[0.28em] text-white uppercase mb-1 drop-shadow-lg">
            {brand?.name || 'GOHOTELLY'}
          </h2>

          <div className="flex items-center gap-3 my-2 sm:my-2.5">
            <span className="w-10 sm:w-16 h-px bg-brand-gold/70" />
            <span className="w-1.5 h-1.5 rotate-45 bg-brand-gold" />
            <span className="w-10 sm:w-16 h-px bg-brand-gold/70" />
          </div>

          <span className="text-[9px] sm:text-[11px] uppercase tracking-[0.34em] text-brand-goldLight font-sans font-medium mb-4">
            Hot Springs Resort &amp; Hotel
          </span>

          <div className="w-32 sm:w-44 h-0.5 bg-white/10 rounded-full overflow-hidden relative">
            <div className="absolute inset-y-0 left-0 bg-gradient-to-r from-transparent via-brand-gold to-transparent w-full animate-pulse" />
          </div>
        </div>
      </div>
    </div>
  );
}

CurtainLoader.propTypes = {
  brand: PropTypes.shape({
    name: PropTypes.string,
  }),
};

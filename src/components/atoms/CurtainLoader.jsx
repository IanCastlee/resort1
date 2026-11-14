import { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';

export default function CurtainLoader({ brand }) {
  const location = useLocation();
  const [stage, setStage] = useState('idle'); // 'idle' | 'closed' | 'opening'
  const isFirstMount = useRef(true);
  const prevPathname = useRef(location.pathname);

  useEffect(() => {
    if (isFirstMount.current) {
      isFirstMount.current = false;
      return;
    }

    if (location.pathname === prevPathname.current) {
      return;
    }
    prevPathname.current = location.pathname;

    setStage('closed');

    const scrollTimer = setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'instant' });
    }, 280);

    const openTimer = setTimeout(() => {
      setStage('opening');
    }, 550);

    const idleTimer = setTimeout(() => {
      setStage('idle');
    }, 1050);

    return () => {
      clearTimeout(scrollTimer);
      clearTimeout(openTimer);
      clearTimeout(idleTimer);
    };
  }, [location.pathname]);

  if (stage === 'idle') return null;

  const isFullyClosed = stage === 'closed';

  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 z-[200] pointer-events-none overflow-hidden"
    >
      {/* Left Curtain */}
      <div
        className={`absolute top-0 bottom-0 left-0 w-1/2 bg-[#0d1b2a] border-r border-brand-gold/30 shadow-[20px_0_40px_rgba(0,0,0,0.85)] transition-transform duration-500 ease-[cubic-bezier(0.77,0,0.175,1)] ${
          isFullyClosed ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-transparent to-brand-navyLight/20" />
      </div>

      {/* Right Curtain */}
      <div
        className={`absolute top-0 bottom-0 right-0 w-1/2 bg-[#0d1b2a] border-l border-brand-gold/30 shadow-[-20px_0_40px_rgba(0,0,0,0.85)] transition-transform duration-500 ease-[cubic-bezier(0.77,0,0.175,1)] ${
          isFullyClosed ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="absolute inset-0 bg-gradient-to-l from-black/70 via-transparent to-brand-navyLight/20" />
      </div>

      {/* Center Monogram */}
      <div
        className={`absolute inset-0 flex flex-col items-center justify-center z-10 transition-all duration-300 ${
          isFullyClosed ? 'opacity-100 scale-100 delay-150' : 'opacity-0 scale-95'
        }`}
      >
        <div className="relative flex flex-col items-center text-center px-6">
          <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full border border-brand-gold flex items-center justify-center font-serif text-xl text-brand-gold mb-3 sm:mb-4 shadow-[0_0_30px_rgba(197,160,89,0.35)] bg-brand-navy">
            {brand?.name ? brand.name.charAt(0) : 'G'}
          </div>

          <h2 className="font-serif text-lg sm:text-2xl font-normal tracking-[0.22em] text-brand-ivory uppercase mb-1">
            {brand?.name || 'GOHOTELLY'}
          </h2>

          <div className="flex items-center gap-3 my-1.5 sm:my-2">
            <span className="w-8 sm:w-12 h-px bg-brand-gold/70" />
            <span className="w-1.5 h-1.5 rotate-45 bg-brand-gold" />
            <span className="w-8 sm:w-12 h-px bg-brand-gold/70" />
          </div>

          <span className="text-[9px] sm:text-[10px] uppercase tracking-[0.32em] text-brand-gold font-sans font-medium">
            {brand?.location || 'Hot Spring Sanctuary'}
          </span>
        </div>
      </div>
    </div>
  );
}

CurtainLoader.propTypes = {
  brand: PropTypes.object,
};

import { useState, useEffect } from 'react';
import Button from '../atoms/Button';
import Heading from '../atoms/Heading';
import Text from '../atoms/Text';
import Badge from '../atoms/Badge';
import Icon from '../atoms/Icon';

export default function DemoNoticeModal() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const hasSeenNotice = sessionStorage.getItem('demo_notice_dismissed');
    if (!hasSeenNotice) {
      setIsOpen(true);
    }
  }, []);

  const handleDismiss = () => {
    sessionStorage.setItem('demo_notice_dismissed', 'true');
    setIsOpen(false);
  };

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="demo-notice-title"
      style={{ backgroundColor: 'rgba(13, 27, 42, 0.82)' }}
      className="fixed inset-0 z-50 backdrop-blur-sm flex items-center justify-center p-3 pt-20 sm:p-6 overflow-y-auto"
    >
      <div className="bg-brand-ivory border-2 border-brand-gold w-full max-w-[calc(100vw-24px)] sm:max-w-lg mx-auto p-4 sm:p-8 shadow-2xl relative text-left box-border my-auto">
        <div className="flex items-center justify-between gap-3 mb-4">
          <Badge variant="gold">Demonstration Prototype</Badge>
          <button
            type="button"
            onClick={handleDismiss}
            aria-label="Close notification"
            className="p-1 text-brand-slate hover:text-brand-navy focus:outline-none"
          >
            <Icon name="close" size="md" />
          </button>
        </div>

        <Heading
          level="h3"
          id="demo-notice-title"
          className="mb-3 text-brand-navy text-xl sm:text-2xl"
        >
          Website Demonstration Notice
        </Heading>

        <Text size="sm" tone="muted" className="leading-relaxed mb-4">
          This website is an interactive prototype created for design demonstration and portfolio review purposes. All brand names, locations, rates, and imagery are sample placeholders (dummy data).
        </Text>

        <div className="bg-brand-cream border-l-4 border-brand-gold p-3.5 mb-6 text-xs text-brand-navy font-medium">
          No real bookings, reservations, or financial transactions will be processed.
        </div>

        <div className="flex justify-end w-full">
          <Button variant="primary" size="md" fullWidth className="sm:w-auto" onClick={handleDismiss}>
            I Understand, Open Demo Website
          </Button>
        </div>
      </div>
    </div>
  );
}

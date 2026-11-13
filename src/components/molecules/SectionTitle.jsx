import PropTypes from 'prop-types';
import Heading from '../atoms/Heading';
import Text from '../atoms/Text';
import Divider from '../atoms/Divider';

export default function SectionTitle({
  eyebrow,
  title,
  subtitle,
  align = 'center',
  tone = 'dark',
  className = '',
}) {
  const isCentered = align === 'center';

  return (
    <div
      className={`max-w-3xl ${isCentered ? 'mx-auto text-center' : 'text-left'} ${className}`}
    >
      {eyebrow && (
        <Text
          as="span"
          size="xs"
          tone="gold"
          className="uppercase tracking-[0.25em] font-semibold block mb-3"
        >
          {eyebrow}
        </Text>
      )}
      <Heading level="h2" tone={tone} className="mb-4">
        {title}
      </Heading>
      <Divider variant="gold" centered={isCentered} className="mb-5" />
      {subtitle && (
        <Text size="md" tone={tone === 'light' ? 'light' : 'muted'}>
          {subtitle}
        </Text>
      )}
    </div>
  );
}

SectionTitle.propTypes = {
  eyebrow: PropTypes.string,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  align: PropTypes.oneOf(['left', 'center']),
  tone: PropTypes.oneOf(['dark', 'light']),
  className: PropTypes.string,
};

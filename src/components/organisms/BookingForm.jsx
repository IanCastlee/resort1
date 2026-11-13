import { useEffect } from 'react';
import PropTypes from 'prop-types';
import FormField from '../molecules/FormField';
import Button from '../atoms/Button';
import Heading from '../atoms/Heading';
import Text from '../atoms/Text';
import useBookingForm from '../../hooks/useBookingForm';

export default function BookingForm({
  rooms = [],
  defaultSelectedRoom = '',
  resortName = 'E-YHAN',
  resortLocation = 'Guyabano, Sorsogon',
  formTitle = 'Reserve a Suite, Villa, or Day-Use Cabana',
  formSubtitle,
}) {
  const {
    values,
    errors,
    status,
    handleChange,
    handleSubmit,
    resetForm,
    setValues,
  } = useBookingForm(defaultSelectedRoom);

  useEffect(() => {
    if (defaultSelectedRoom) {
      setValues((prev) => ({ ...prev, roomType: defaultSelectedRoom }));
    }
  }, [defaultSelectedRoom, setValues]);

  const roomOptions = rooms.map((r) => ({
    value: r.name,
    label: `${r.name} (${r.capacity})`,
  }));

  const dynamicSubtitle =
    formSubtitle ||
    `Send your preferred dates, number of guests, and accommodation choice at ${resortName} in ${resortLocation}.`;

  if (status === 'success') {
    return (
      <div className="bg-brand-ivory border border-brand-gold p-10 text-center shadow-luxury">
        <Heading level="h3" className="mb-3">
          Booking Inquiry Received
        </Heading>
        <Text size="md" tone="muted" className="mb-6">
          Maraming salamat, {values.name}! Your inquiry for{' '}
          <strong className="text-brand-navy">{values.roomType}</strong> at {resortName} ({resortLocation}) has been recorded. We will reach out to{' '}
          {values.email} shortly.
        </Text>
        <Button variant="primary" onClick={resetForm}>
          Send Another Inquiry
        </Button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="bg-brand-ivory border border-brand-border p-8 sm:p-10 shadow-luxury space-y-6"
    >
      <div>
        <Heading level="h3" className="mb-2">
          {formTitle}
        </Heading>
        <Text size="sm" tone="muted">
          {dynamicSubtitle}
        </Text>
      </div>

      {status === 'error' && Object.keys(errors).length > 0 && (
        <div
          role="alert"
          className="p-4 bg-red-50 border border-red-200 text-red-700 text-xs"
        >
          Please review the highlighted fields before submitting your inquiry.
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <FormField
          id="name"
          name="name"
          label="Full Name"
          value={values.name}
          onChange={handleChange}
          placeholder="Juan Dela Cruz"
          error={errors.name}
          required
        />
        <FormField
          id="email"
          name="email"
          type="email"
          label="Email Address"
          value={values.email}
          onChange={handleChange}
          placeholder="juan@example.com"
          error={errors.email}
          required
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <FormField
          id="phone"
          name="phone"
          type="tel"
          label="Phone / Mobile Number"
          value={values.phone}
          onChange={handleChange}
          placeholder="+63 917 123 4567"
          error={errors.phone}
          required
        />
        <FormField
          id="guests"
          name="guests"
          type="number"
          min="1"
          label="Number of Guests"
          value={values.guests}
          onChange={handleChange}
          error={errors.guests}
          required
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <FormField
          id="checkIn"
          name="checkIn"
          type="date"
          label="Check-In / Visit Date"
          value={values.checkIn}
          onChange={handleChange}
          error={errors.checkIn}
          required
        />
        <FormField
          id="checkOut"
          name="checkOut"
          type="date"
          label="Check-Out Date"
          value={values.checkOut}
          onChange={handleChange}
          error={errors.checkOut}
          required
        />
      </div>

      <FormField
        id="roomType"
        name="roomType"
        type="select"
        label="Suite, Villa, or Cabana Type"
        placeholder="Select an accommodation or cottage..."
        value={values.roomType}
        onChange={handleChange}
        options={roomOptions}
        error={errors.roomType}
        required
      />

      <FormField
        id="message"
        name="message"
        type="textarea"
        label="Special Requests / Inquiry Details"
        value={values.message}
        onChange={handleChange}
        placeholder={`Let us know if you are planning an overnight stay, evening thermal soak, or family day gathering at ${resortName}...`}
        error={errors.message}
      />

      <Button
        type="submit"
        variant="primary"
        size="lg"
        fullWidth
        disabled={status === 'submitting'}
      >
        {status === 'submitting' ? 'Sending Inquiry...' : 'Submit Booking Inquiry'}
      </Button>
    </form>
  );
}

BookingForm.propTypes = {
  rooms: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string.isRequired,
      capacity: PropTypes.string,
    })
  ),
  defaultSelectedRoom: PropTypes.string,
  resortName: PropTypes.string,
  resortLocation: PropTypes.string,
  formTitle: PropTypes.string,
  formSubtitle: PropTypes.string,
};

export const validateBookingForm = (values) => {
  const errors = {};

  if (!values.name || values.name.trim().length < 2) {
    errors.name = 'Please enter your full name (at least 2 characters).';
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!values.email || !emailRegex.test(values.email.trim())) {
    errors.email = 'Please enter a valid email address.';
  }

  const phoneRegex = /^[+\d\s()-]{7,20}$/;
  if (!values.phone || !phoneRegex.test(values.phone.trim())) {
    errors.phone = 'Please enter a valid phone number.';
  }

  if (!values.checkIn) {
    errors.checkIn = 'Please select a preferred check-in or launch date.';
  }

  if (!values.checkOut) {
    errors.checkOut = 'Please select a preferred check-out or target date.';
  } else if (values.checkIn && new Date(values.checkOut) < new Date(values.checkIn)) {
    errors.checkOut = 'End date must be on or after the start date.';
  }

  if (!values.guests || Number(values.guests) < 1) {
    errors.guests = 'Please specify at least 1 guest or property room count.';
  }

  if (!values.roomType) {
    errors.roomType = 'Please select a featured property or inquiry type.';
  }

  return errors;
};

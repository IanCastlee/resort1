import { useState } from 'react';
import { validateBookingForm } from '../utils/validators';

const initialValues = {
  name: '',
  email: '',
  phone: '',
  checkIn: '',
  checkOut: '',
  guests: '2',
  roomType: '',
  message: '',
};

export default function useBookingForm(defaultRoom = '') {
  const [values, setValues] = useState({
    ...initialValues,
    roomType: defaultRoom,
  });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle'); // 'idle' | 'submitting' | 'success' | 'error'

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateBookingForm(values);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setStatus('error');
      return;
    }

    setErrors({});
    setStatus('submitting');
    setTimeout(() => {
      setStatus('success');
    }, 500);
  };

  const resetForm = () => {
    setValues({ ...initialValues, roomType: defaultRoom });
    setErrors({});
    setStatus('idle');
  };

  return {
    values,
    errors,
    status,
    handleChange,
    handleSubmit,
    resetForm,
    setValues,
  };
}

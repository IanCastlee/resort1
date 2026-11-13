export const formatPrice = (priceValue) => {
  if (!priceValue) return '[TO BE CONFIRMED]';
  if (typeof priceValue === 'string') return priceValue;
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0,
  }).format(priceValue);
};

export const formatPhone = (phoneValue) => {
  if (!phoneValue || phoneValue.includes('[TO BE CONFIRMED]')) {
    return '[TO BE CONFIRMED]';
  }
  return phoneValue.trim();
};

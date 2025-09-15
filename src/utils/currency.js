// Currency formatting utility for Nepalese Rupees
// Prices are already in NPR, just formatting them

export const formatNPR = (amount) => {
  return `रु ${amount.toLocaleString('en-NP')}`;
};

export const formatNPRWithDecimals = (amount) => {
  return `रु ${amount.toLocaleString('en-NP', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
};

// Free shipping threshold in NPR
export const FREE_SHIPPING_THRESHOLD = 20000;

// Tax rate for Nepal (13% VAT)
export const TAX_RATE = 0.13;

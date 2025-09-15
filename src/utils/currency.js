// Currency conversion utility for Nepalese Rupees
// 1 USD = 133.50 NPR (approximate rate, can be updated with real-time rates)

const USD_TO_NPR_RATE = 133.50;

export const convertToNPR = (usdAmount) => {
  return Math.round(usdAmount * USD_TO_NPR_RATE);
};

export const formatNPR = (amount) => {
  return `रु ${amount.toLocaleString('en-NP')}`;
};

export const formatNPRWithDecimals = (amount) => {
  return `रु ${amount.toLocaleString('en-NP', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
};

// Convert all product prices from USD to NPR
export const convertProductPrices = (products) => {
  return products.map(product => ({
    ...product,
    price: convertToNPR(product.price)
  }));
};

// Free shipping threshold in NPR (equivalent to $200 USD)
export const FREE_SHIPPING_THRESHOLD = convertToNPR(200);

// Tax rate for Nepal (13% VAT)
export const TAX_RATE = 0.13;

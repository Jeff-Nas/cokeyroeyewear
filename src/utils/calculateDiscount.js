export const calculateDiscount = (currentPrice, originalPrice) => {
  const priceCurrent = Number(currentPrice);
  const priceOriginal = Number(originalPrice);
  const hasDiscount = priceCurrent && priceCurrent < priceOriginal;

  const discountAmount = hasDiscount ? priceOriginal - priceCurrent : 0;
  const percenntage = hasDiscount
    ? Math.floor((discountAmount * 100) / priceOriginal)
    : 0;
  return {
    hasDiscount,
    discountAmount,
    percenntage,
    priceCurrent,
    priceOriginal,
  };
};

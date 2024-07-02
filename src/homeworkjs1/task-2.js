export const task2 = function getShippingMessage(country, price, deliveryFee) {
  const totalPrice = price + deliveryFee;
  return `Shipping to ${country} will const ${totalPrice} credits`;
};

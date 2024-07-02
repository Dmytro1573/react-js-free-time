export const task3 = function getElementWith(content, padding, border) {
  const contented = parseFloat(content);
  const paddingen = parseFloat(padding);
  const bordered = parseFloat(border);
  const totalPrice = contented + paddingen * 2 + bordered * 2;

  return totalPrice;
};

export const getRandomAttribute = (productAttributes: string[]): string => {
  const random = Math.random();
  const index = Math.floor(random * productAttributes.length);
  return productAttributes[index];
};

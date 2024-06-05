// data.js
export const data = Array.from({ length: 100 }, (_, index) => ({
  label: `Label ${index + 1}`,
  value: Math.floor(Math.random() * 100),
}));


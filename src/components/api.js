export const fetchData = async (page, limit) => {
  const response = await fetch(`http://localhost:3001/api/items?page=${page}&limit=${limit}`);
  const data = await response.json();
  return data;
};









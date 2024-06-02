export const fetchData = async (page, limit = 10) => {
	 const response = await fetch(`http://10.10.30.2:3001/data?page=1&limit=10`);
  const result = await response.json();
  return result.data;
};


export const fetchData = async (page, limit) => {
	 const response = await fetch(`http://localhost:3001/data?page=1&limit=5`);
   console.log("response:",response.json)
  const result = await response.json();
  console.log("result :",result)
  console.log("result data:",result.data)
  return result.data;
  
};


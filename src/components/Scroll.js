import React, { useState, useEffect, useRef } from 'react';
import { Line } from 'react-chartjs-2';
import { fetchData } from './api'; // Import the API function

const Scroll = () => {
  const [items, setItems] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [loading, setLoading] = useState(false);
  const observer = useRef();

  const ITEMS_PER_PAGE = 10; // Number of items to load per page

  const loadItems = async (page) => {
    setLoading(true);
    const newItems = await fetchData(page, ITEMS_PER_PAGE);
    setItems((prevItems) => [...prevItems, ...newItems]);
    if (newItems.length < ITEMS_PER_PAGE) setHasMore(false);
    setLoading(false);
  };

  useEffect(() => {
    loadItems(1); // Load initial items
  }, []);

  const lastItemRef = useRef();

  const handleObserver = (entities) => {
    const target = entities[0];
    if (target.isIntersecting && hasMore && !loading) {
      setPage((prevPage) => prevPage + 1);
    }
  };
  console.log("HEre::",lastItemRef.current)
  useEffect(() => {
    if (observer.current) observer.current.disconnect();
    observer.current = new IntersectionObserver(handleObserver);
    if (lastItemRef.current) observer.current.observe(lastItemRef.current);
  }, []);

  useEffect(() => {
    if (page > 1) loadItems(page);
  }, [page]);

  const chartData = {
    labels: items.map((item) => item.label),
    datasets: [
      {
        label: 'My Data',
        data: items.map((item) => item.value),
        fill: false,
        backgroundColor: 'rgba(75,192,192,0.2)',
        borderColor: 'rgba(75,192,192,1)',
      },
    ],
  };

  return (
    <div>
      <h1>Lazy Loading Graph Data</h1>
      <div style={{ width: '600px', height: '300px' }}>
        <Line data={chartData} />
      </div>
      {loading && <p>Loading...</p>}
      {!loading && !hasMore && <p>No more data to load</p>}
      <div ref={lastItemRef} style={{ height: '20px' }} />
    </div>
  );
};

export default Scroll;


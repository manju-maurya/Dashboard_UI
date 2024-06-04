import React, { useState, useEffect, useRef } from 'react';
import { Bar, Line, Pie, Doughnut } from 'react-chartjs-2';
import { fetchData } from './api'; // Import the API function
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
);

const ChartComponent = ({ widgetId }) => {
  const [chartType, setChartType] = useState(
    localStorage.getItem(`selectedChartType-${widgetId}`) || 'bar'
  );
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const chartTypes = ['bar', 'line', 'pie', 'doughnut'];

  // For Lazy loading
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

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Monthly Sales Data',
      },
    },
  };

  const handleChartTypeChange = (type) => {
    setChartType(type);
    localStorage.setItem(`selectedChartType-${widgetId}`, type); // Store selected chart type for this widget
    setDropdownVisible(false);
  };

  const toggleDropdown = () => {
    setDropdownVisible((prevVisible) => !prevVisible);
  };

  return (
    <div style={{ position: 'relative', display: 'inline-block' }}>
      <button onClick={toggleDropdown} style={{ padding: '5px' }}>
        Select Chart Type
      </button>
      {dropdownVisible && (
        <ul
          style={{
            listStyleType: 'none',
            padding: 0,
            position: 'absolute',
            top: '7%',
            left: 0,
            backgroundColor: '#f0f0f0',
            margin: 0,
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
            zIndex: 1,
          }}
        >
          {chartTypes.map((type) => (
            <li
              key={type}
              onClick={() => handleChartTypeChange(type)}
              style={{ cursor: 'pointer', padding: '10px 20px' }}
            >
              {type.charAt(0).toUpperCase() + type.slice(1)} Chart
            </li>
          ))}
        </ul>
      )}
      <div style={{ width: '600px', height: '400px', marginTop: '20px' }}>
        {chartType === 'bar' && <Bar data={chartData} options={options} />}
        {chartType === 'line' && <Line data={chartData} options={options} />}
        {chartType === 'pie' && <Pie data={chartData} options={options} />}
        {chartType === 'doughnut' && (
          <Doughnut data={chartData} options={options} />
        )}
      </div>
    </div>
  );
};

export default ChartComponent;

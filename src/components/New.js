import React, { useState, useEffect, useRef } from 'react';
import { Bar, Line, Pie, Doughnut,Radar,PolarArea,Bubble,Scatter,Chart } from 'react-chartjs-2';
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

  const chartTypes = ['bar', 'line', 'pie', 'doughnut',];

  // For Lazy loading
  const [items, setItems] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [loading, setLoading] = useState(false);
  const observer = useRef();

  const ITEMS_PER_PAGE = 5; // Number of items to load per page

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
        // backgroundColor: 'rgba(75,192,192,0.2)',
        // borderColor: 'rgba(75,192,192,1)',
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          
        ],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'bottom',
      },
      // title: {
      //   display: true,
      //   // text: 'Monthly Sales Data',
      // },
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
    <div style={{ position: 'relative', display: 'inline-block', border:'1px solid #d7d7d7', padding:2, borderRadius:2, backgroundColor:'#f1efef'}}>

     <div style={{display:'flex'}}>
      <button onClick={toggleDropdown} style={{ padding: '5px', margin:3, border:'none' }}> ⋮ </button>
      <h4 style={{margin:'auto', color:'#595656'}}>Monthly Sales Data</h4>
      </div>

      {dropdownVisible && (
        <ul
          style={{
            listStyleType: 'none',
            padding: 5,
            position: 'absolute',
            top: '10%',
            left: 0,
            backgroundColor: 'rgb(250 246 246)',
            margin: 0,
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
            zIndex: 1,
          }}
        >
          {chartTypes.map((type) => (
            <li
              key={type}
              onClick={() => handleChartTypeChange(type)}
              style={{ cursor: 'pointer', padding: '4px 4px', textDecoration:'2', hover:{backgroundColor:'red'} }}
            >
              {type.charAt(0).toUpperCase() + type.slice(1)} Chart
            </li>
          ))}
        </ul>
      )}
      <div style={{ width: '400px', height: '300px', margin:'auto', display:'flex', justifyContent:'center', flexWrap:'inherit', marginTop:10}}>
        {chartType === 'bar' && <Bar data={chartData} options={options} style={{marginTop:30}}/>}
        {chartType === 'line' && <Line data={chartData} options={options} style={{marginTop:30}}/>}
        {chartType === 'pie' && <Pie data={chartData} options={options} />}
        {chartType === 'doughnut' && (<Doughnut data={chartData} options={options} /> )}
       
      </div>
    </div>
  );
};

export default ChartComponent;

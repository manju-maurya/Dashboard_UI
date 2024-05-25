// src/components/Dashboard.js
import React, { useState, useEffect } from 'react';
import Chart from './Chart';

const sampleData = [
  { name: 'Jan', value: 400 },
  { name: 'Feb', value: 300 },
  { name: 'Mar', value: 200 },
  { name: 'Apr', value: 278 },
  { name: 'May', value: 189 },
];

const sampleData2 = [
  { name: 'Jan', value: 10 },
  { name: 'Feb', value: 200 },
  { name: 'Mar', value: 200 },
  { name: 'Apr', value: 78 },
  { name: 'May', value: 189 },
];


const Dash1 = () => {
  const [data, setData] = useState([]);
const [data2, setData2] = useState([]);

  useEffect(() => {
    setData(sampleData);
    setData2(sampleData2);
  }, []);

  return (
    <div>
      <h1>Dashboard</h1>
      <Chart data={data} />
	  <Chart data={data} />
	  <Chart data={data2} />
	  <Chart data={data} />
	  <Chart data={data} />
    </div>
  );
};

export default Dash1;


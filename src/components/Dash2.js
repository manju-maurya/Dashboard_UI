import React, { useState, useEffect } from 'react';
import GridLayout from 'react-grid-layout';
import CustomWidget from './CustomWidget';
import ChartWidget from './ChartWidget';
import useIntersection from './useIntersection';
import 'react-grid-layout/css/styles.css';
import 'react-resizable/css/styles.css';

const Dashboard = () => {
  const [layout, setLayout] = useState([
    { i: '1', x: 0, y: 0, w: 4, h: 2 },
    { i: '2', x: 4, y: 0, w: 4, h: 2 },
    { i: '3', x: 8, y: 0, w: 4, h: 2 },
    { i: '4', x: 0, y: 2, w: 12, h: 2 }
  ]);

  const [data, setData] = useState({});

  const fetchData = async (widgetId) => {
    try {
      const response = await fetch(`http://localhost:3001/api/widgets/${widgetId}`);
      const result = await response.json();
      setData(prevData => ({ ...prevData, [widgetId]: result }));
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleLayoutChange = (newLayout) => {
    setLayout(newLayout);
  };

  return (
    <GridLayout
      className="layout"
      layout={layout}
      cols={12}
      rowHeight={100}
      width={1200}
      onLayoutChange={handleLayoutChange}
      draggableHandle=".draggableHandle"
    >
      {layout.map(item => (
        <WidgetContainer key={item.i} widgetId={item.i} fetchData={fetchData} data={data[item.i]} />
      ))}
    </GridLayout>
  );
};

const WidgetContainer = ({ widgetId, fetchData, data }) => {
  const [ref, isIntersecting] = useIntersection({
    root: null,
    rootMargin: '0px',
    threshold: 0.1
  });

  useEffect(() => {
    if (isIntersecting && !data) {
      fetchData(widgetId);
    }
  }, [isIntersecting, widgetId, data, fetchData]);

  return (
    <div ref={ref}>
      {widgetId === '4' ? (
        <ChartWidget data={data} />
      ) : (
        <CustomWidget title={`Widget ${widgetId}`} content={data ? data.content : 'Loading...'} />
      )}
    </div>
  );
};

export default Dashboard;


const ChartWidget = ({ data }) => {
  // Render chart using the data
  return (
    <div className="chart-widget">
      <h2>Chart Widget</h2>
      {/* Render your chart using the data */}
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};

export default ChartWidget;


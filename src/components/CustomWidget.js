const CustomWidget = ({ title, content }) => {
  return (
    <div className="custom-widget">
      <h2>{title}</h2>
      <p>{content}</p>
    </div>
  );
};

export default CustomWidget;


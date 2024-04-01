import "../styles/UI/filterChartButton.scss";

const FilterChartButton = ({ title, onClick }) => (
  <button className="filterChartButton" type="button" onClick={onClick}>
    {title}
  </button>
);

export default FilterChartButton;

// hooks
import useChartFilters from "../../hooks/chart/useChartFilters";

// constants
import { INTERVALS } from "../../constants/chart";

// UI
import FilterChartButton from "../UI/FilterChartButton";

// styles
import "../styles/trade/chartFilter.scss";

const ChartFilter = ({ setSelectedFilter }) => {
  const {
    handlerOnClicksLast24HoursBtn,
    handlerOnClicksLastWeekBtn,
    handlerOnClicksLastMonthBtn,
    handlerOnClickIntervalBtn,
  } = useChartFilters({ setSelectedFilter });

  return (
    <div className="chartFilter">
      <div className="filter-block">
        <h3>Period: </h3>
        <div className="buttons">
          <FilterChartButton
            title="Last 24 hours"
            onClick={handlerOnClicksLast24HoursBtn}
          />
          <FilterChartButton
            title="Last week"
            onClick={handlerOnClicksLastWeekBtn}
          />

          <FilterChartButton
            title="Last mount"
            onClick={handlerOnClicksLastMonthBtn}
          />
        </div>
      </div>
      <div className="filter-block">
        <h3>Interval: </h3>
        <div className="buttons">
          {INTERVALS.map((interval) => (
            <FilterChartButton
              key={interval}
              title={interval}
              onClick={() => handlerOnClickIntervalBtn(interval)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ChartFilter;

import {
  getLast24HoursRange,
  getLastMonthRange,
  getLastWeekRange,
} from "../../utils/dataRange";

const useChartFilters = ({ setSelectedFilter }) => {
  const updateSelectedFilter = (param) => {
    setSelectedFilter((prev) => ({ ...prev, ...param }));
  };

  const handlerOnClicksLast24HoursBtn = () => {
    const range = getLast24HoursRange();
    updateSelectedFilter(range);
  };

  const handlerOnClicksLastWeekBtn = () => {
    const range = getLastWeekRange();
    updateSelectedFilter(range);
  };

  const handlerOnClicksLastMonthBtn = () => {
    const range = getLastMonthRange();
    updateSelectedFilter(range);
  };

  const handlerOnClickIntervalBtn = (interval) => {
    updateSelectedFilter({ interval });
  };

  return {
    handlerOnClicksLast24HoursBtn,
    handlerOnClicksLastWeekBtn,
    handlerOnClicksLastMonthBtn,
    handlerOnClickIntervalBtn,
  };
};

export default useChartFilters;

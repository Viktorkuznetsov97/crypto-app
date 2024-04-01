const ONE_DAY_IN_MILLISECONDS = 1000 * 60 * 60 * 24;

export const getLast24HoursRange = () => {
  const startTime = Date.now() - ONE_DAY_IN_MILLISECONDS;
  const endTime = Date.now();
  return { startTime, endTime };
};

export const getLastWeekRange = () => {
  const startTime = Date.now() - ONE_DAY_IN_MILLISECONDS * 7;
  const endTime = Date.now();
  return { startTime, endTime };
};

export const getLastMonthRange = () => {
  const startTime = Date.now() - ONE_DAY_IN_MILLISECONDS * 30;
  const endTime = Date.now();
  return { startTime, endTime };
};

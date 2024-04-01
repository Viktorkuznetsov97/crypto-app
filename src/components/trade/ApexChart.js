import React, { useMemo } from "react";
import ReactApexChart from "react-apexcharts";

const ApexChart = ({ data, title }) => {
  const chartConfig = useMemo(
    () => ({
      type: "candlestick",
      height: 350,
      options: {
        chart: {
          type: "candlestick",
          height: 350,

          toolbar: {
            show: false,
          },
        },

        xaxis: {
          type: "datetime",
          show: true,
        },
        yaxis: {
          opposite: true,
        },
      },

      series: [
        {
          data,
        },
      ],
    }),
    [data, title]
  );

  return <ReactApexChart {...chartConfig} />;
};

export default ApexChart;

import React from "react";

import "./Chart.css";
import ChartBar from "./ChartBar";

const Chart = ({ dataPoints }) => {
  const values = dataPoints.map(el => el.value);
  const max = Math.max(...values);

  return (
    <div className="chart">
      {dataPoints.map((point) => (
        <ChartBar
          key={point.label}
          label={point.label}
          value={point.value}
          max={max}
        />
      ))}
    </div>
  );
};

export default Chart;

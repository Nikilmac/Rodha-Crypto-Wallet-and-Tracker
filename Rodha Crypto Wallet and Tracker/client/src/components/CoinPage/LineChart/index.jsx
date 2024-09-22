import React from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto"; // Keep this import

const LineChart = ({ chartData, multiAxis }) => {
  // Define chart options
  const options = {
    plugins: {
      legend: {
        display: multiAxis, // Display legend based on multiAxis
      },
    },
    responsive: true,
    interaction: {
      mode: "index",
      intersect: false,
    },
    scales: {
      crypto1: {
        position: "left",
      },
      crypto2: multiAxis ? {
        position: "right",
      } : undefined, // Only add scale if multiAxis is true
    },
  };

  return (
    <div style={{ margin: "40px" , paddingLeft: "60px" }}> {/* Adjust the margin as needed */}
      <Line data={chartData} options={options} />
    </div>
  );
};

export default LineChart;

import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  LinearScale,
  Title,
  CategoryScale,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  LineElement,
  PointElement,
  LinearScale,
  Title,
  CategoryScale,
  Tooltip,
  Legend
);

const ComparisonGraph = ({ stats }) => {
  const data = {
    labels: ["0", "25", "50", "75", "100"],
    datasets: [
      {
        label: "Number of Students",
        data: [0, 60, 70, 50, 10],
        fill: false,
        borderColor: "#0096FF",
        tension: 0.4,
        pointBackgroundColor: "#ffffff",
        pointBorderColor: "#4caf50",
        pointBorderWidth: 2,
        pointRadius: 5,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
        legend: {
          display: false,
        },
        tooltip: {
          enabled: false,
        },
      },
    scales: {
      x: {
        title: {
          display: true,
          text: "Percentile",
        },
      },
      y: {
        title: {
          display: true,
          text: "Number of Students",
        },
      },
    },
  };

  return (
    <div className="p-4  bg-white shadow rounded">
      <h2 className="text-xl font-bold mb-2">Comparison Graph</h2>
      <p className="w-full md:w-[70%] my-4">
        <span className="font-bold">
          You scored {stats.percentile}% percentile{" "}
        </span>
        which is lower than the average percentile 72% of all the engineers who
        took this assessment.
      </p>
      <Line options={options} data={data} />
    </div>
  );
};

export default ComparisonGraph;

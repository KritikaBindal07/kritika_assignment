import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { TbTargetArrow } from "react-icons/tb";
ChartJS.register(ArcElement, Tooltip, Legend);

const QuestionAnalysis = ({ stats }) => {
    const correctAnswers = stats.currentScore;
    const incorrectAnswers = 15 - stats.currentScore;
  const data = {
    labels: ["Correct", "Incorrect"],
    datasets: [
      {
        label: "Questions",
        data: [correctAnswers, incorrectAnswers], 
        backgroundColor: ["#0000FF", "#F0FFFF"],
        borderColor: ["#ffffff", "#ffffff"],
        borderWidth: 2,
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
    maintainAspectRatio: false,
    aspectRatio: 1,
    cutout: "70%",
  };

  return (
    <div className="p-4 bg-white shadow rounded">
      <div className="flex justify-between items-center">
        <span className="text-xl font-bold">Question Analysis</span>
        <span className="text-blue-700 text-lg font-bold">
          {stats.currentScore}/15
        </span>
      </div>

      <p className=" mt-4">
        <span className="font-bold">
          You scored {stats.currentScore} questions correct out of 15.
        </span>{" "}
        However, it still needs some improvements.
      </p>

      <div className="flex items-center justify-center relative">
        {" "}
        <div className="w-40 h-40 mx-auto mt-12 relative">
          {" "}
          <Doughnut data={data} options={options} />
          <div className="absolute inset-0 flex items-center justify-center">
            <TbTargetArrow className="text-primary text-3xl" />{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuestionAnalysis;

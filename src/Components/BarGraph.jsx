import { Bar } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";

const BarGraph = ({ labels, marks }) => {
  const options = {
    scales: {
      y: {
        beginAtZero: true,
        max: 100,
        step: 20,
        grid: {
          display: true,
        },
        ticks: {
          stepSize: 20,
        },
      },
      x: {
        grid: {
          display: false,
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
    },
  };
  //ignore this just use it as it is
  const colors = ["#FFCCCB", "#90EE90", "#CBC3E3", "#FFFF99", "#FFD580"];

  //chartData is JS object with two fields lables and datasets
  const chartData = {
    labels,
    datasets: [
      {
        label: "Marks",
        data: marks,
        backgroundColor: colors,
        borderWidth: 2,
        barThickness: 30,
        base: 0,
        hoverBorderColor: "black",
        hoverBackgroundColor: ["red", "green", "purple", "yellow", "orange"],
        barPercentage: 0.6,
      },
    ],
  };

  return (
    <div
      style={{
        width: 800,
        height: 300,
        marginLeft: "30rem",
        marginTop: "10rem",
      }}
    >
      <Bar data={chartData} options={options} />
    </div>
  );
};

export default BarGraph;

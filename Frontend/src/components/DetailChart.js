import React, { Component } from "react";
import Chart from "chart.js/auto";

export default class DetailChart extends Component {
  chartRef = React.createRef();

  componentDidMount() {
    const labels = [];
    const population = [];
    const backgroundColor = [];
    const randomNum = () => Math.floor(Math.random() * (235 - 52 + 1) + 52);

    this.props.county.forEach((res) => {
      labels.push(res.name);
      population.push(res.population);
      backgroundColor.push(
        `rgb(${randomNum()}, ${randomNum()}, ${randomNum()})`
      );
    });

    const ctx = this.chartRef.current.getContext("2d");

    new Chart(ctx, {
      type: "pie",
      data: {
        labels: labels,
        datasets: [
          {
            label: "My First Dataset",
            data: population,
            backgroundColor: backgroundColor,
            hoverOffset: 1,
          },
        ],
      },
      options: {
        plugins: {
          legend: {
            labels: {
              color: "white",
              font: {
                size: 20,
              },
            },
          },
        },
      },
    });
  }
  render() {
    return (
      <div
        style={{
          width: "40%",
          margin: "auto",
          marginBlock: "4%",
        }}
      >
        <h1>Population density at Margarita</h1>
        <canvas
          id="myChart"
          ref={this.chartRef}
          style={{ borderStyle: "solid", borderColor: "white", padding: "2%" }}
        />
      </div>
    );
  }
}

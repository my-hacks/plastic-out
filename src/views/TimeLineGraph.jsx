import React, { Component } from "react";
import { HorizontalBar } from "react-chartjs-2";

const data = {
  labels: [
    "Estados Unidos",
    "China",
    "India",
    "Brasil",
    "Indonesia",
    "Russia",
    "Alemanha"
  ],
  datasets: [
    {
      label: "PRODUÇÃO DE PLÁSTICO NO MUNDO EM TONELADAS",
      borderColor: "#3fbf90",
      borderWidth: 1,
      hoverBorderColor: "#3fbf90",
      data: [82, 80, 65, 59, 56, 55, 40, 37],
      backgroundColor: "#2682A6"
    }
  ]
};

class BarGraph extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayName: "BarExample"
    };
  }

  render() {
    return (
      <div className="container-graph">
        <HorizontalBar data={data} />
      </div>
    );
  }
}

export default BarGraph;

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
      label: "PRODUÇÃO DE PLÁSTICO RECICLADO EM TONELADAS",
      borderColor: "#D8EBF2",
      borderWidth: 1,
      hoverBorderColor: "#D8EBF2",
      data: [24, 12, 1, 0, 0, 0, 3, 3],
      backgroundColor: "#3fbf90"
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

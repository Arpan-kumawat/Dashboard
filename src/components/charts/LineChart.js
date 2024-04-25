
import React from "react";
import ReactApexChart from "react-apexcharts";

class SplineAreaChart extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      series: [],
      options: {},
    };
  }

  componentDidMount() {
    this.setState({
      series: this.props.chartData, // Assuming chartData is an array of series objects
      options: this.props.chartOptions,
    });
  }

  render() {
    return (
      <ReactApexChart
        options={this.state.options}
        series={this.state.series}
        type="area"
        height={350}
      />
    );
  }
}

export default SplineAreaChart;

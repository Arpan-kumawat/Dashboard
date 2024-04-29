import React from "react";
import ReactApexChart from "react-apexcharts";

import ApexCharts from "apexcharts";

import "./style.css";

var colors = [
  "#008FFB",
  "#00E396",
  "#FEB019",
  "#FF4560",
  "#775DD0",
  "#00D9E9",
  "#FF66C3",
];

function updateQuarterChart(sourceChart, destChartIDToUpdate) {
  var series = [];
  var seriesIndex = 0;
  var colors = [];

  if (sourceChart.w.globals.selectedDataPoints[0]) {
    var selectedPoints = sourceChart.w.globals.selectedDataPoints;
    for (var i = 0; i < selectedPoints[seriesIndex].length; i++) {
      var selectedIndex = selectedPoints[seriesIndex][i];
      var yearSeries = sourceChart.w.config.series[seriesIndex];
      series.push({
        name: yearSeries.data[selectedIndex].x,
        data: yearSeries.data[selectedIndex].quarters,
      });
      colors.push(yearSeries.data[selectedIndex].color);
    }

    if (series.length === 0)
      series = [
        {
          data: [],
        },
      ];

    return ApexCharts.exec(destChartIDToUpdate, "updateOptions", {
      series: series,
      colors: colors,
      fill: {
        colors: colors,
      },
    });
  }
}

export default class ReactChart extends React.Component {
  constructor(props) {
    super(props);
    let Dataarr = props.Sales;
    console.log(Dataarr);

    function makeData() {
      var arrayData = Dataarr.map((item) => {
        return {
          quarters: [
            {
              x: "Total Net Sales",
              y: item.total_net_sale.toFixed(2),
            },
            {
              x: "Total Item Tax",
              y: item.total_item_tax.toFixed(2),
            },
            {
              x: "Total Discount",
              y: item.total_discount.toFixed(2),
            },
            {
              x: "Total Gross Sale",
              y: item.total_gross_sale.toFixed(2),
            },
          ],
        };
      });

      console.log(arrayData);

      var dataYearSeries = Dataarr.map((item, index) => {
        return {
          x: item.storeId.toString(),
          y: item.total_net_sale.toFixed(2),
          color: colors[index],
          quarters: arrayData[index].quarters,
        };
      });

      return dataYearSeries;
    }

    this.state = {
      series: [
        {
          data: makeData(),
        },
      ],
      options: {
        chart: {
          id: "barYear",
          height: 400,
          width: "100%",
          type: "bar",
          events: {
            dataPointSelection: function (e, chart, opts) {
              var quarterChartEl = document.querySelector("#chart-quarter");
              var yearChartEl = document.querySelector("#chart-year");

              if (opts.selectedDataPoints[0].length === 1) {
                if (quarterChartEl.classList.contains("active")) {
                  updateQuarterChart(chart, "barQuarter");
                } else {
                  yearChartEl.classList.add("chart-quarter-activated");
                  quarterChartEl.classList.add("active");
                  updateQuarterChart(chart, "barQuarter");
                }
              } else {
                updateQuarterChart(chart, "barQuarter");
              }

              if (opts.selectedDataPoints[0].length === 0) {
                yearChartEl.classList.remove("chart-quarter-activated");
                quarterChartEl.classList.remove("active");
              }
            },
            updated: function (chart) {
              updateQuarterChart(chart, "barQuarter");
            },
          },
        },
        plotOptions: {
          bar: {
            distributed: true,
            horizontal: true,
            barHeight: "75%",
            dataLabels: {
              position: "bottom",
            },
          },
        },
        dataLabels: {
          enabled: true,
          textAnchor: "start",
          style: {
            colors: ["#fff"],
          },
          formatter: function (val, opt) {
            return "Store " + opt.w.globals.labels[opt.dataPointIndex];
          },
          offsetX: 0,
          dropShadow: {
            enabled: true,
          },
        },

        colors: colors,

        states: {
          normal: {
            filter: {
              type: "desaturate",
            },
          },
          active: {
            allowMultipleDataPointsSelection: true,
            filter: {
              type: "darken",
              value: 1,
            },
          },
        },
        tooltip: {
          x: {
            show: false,
          },
          y: {
            title: {
              formatter: function (val, opts) {
                return opts.w.globals.labels[opts.dataPointIndex];
              },
            },
          },
        },
        title: {
          text: "  Top 5 Performing Stores ",
          offsetX: 15,
        },
        subtitle: {
          text: "(Click on bar to see details)",
          offsetX: 15,
        },
        yaxis: {
          labels: {
            show: false,
          },
        },
      },

      seriesQuarter: [
        {
          data: [],
        },
      ],
      optionsQuarter: {
        chart: {
          id: "barQuarter",
          height: 400,
          width: "100%",
          type: "bar",
          stacked: true,
        },
        plotOptions: {
          bar: {
            columnWidth: "90%",
            horizontal: false,
          },
        },
        legend: {
          show: false,
        },
        grid: {
          yaxis: {
            lines: {
              show: false,
            },
          },
          xaxis: {
            lines: {
              show: true,
            },
          },
        },
        yaxis: {
          labels: {
            show: false,
          },
        },
        title: {
          text: "Store Wise  Sales",
          offsetX: 10,
        },
        tooltip: {
          x: {
            formatter: function (val, opts) {
              return opts.w.globals.seriesNames[opts.seriesIndex];
            },
          },
          y: {
            title: {
              formatter: function (val, opts) {
                return opts.w.globals.labels[opts.dataPointIndex];
              },
            },
          },
        },
      },
    };
  }
  render() {
    return (
      <div>
        <div id="wrap">
          <div id="chart-year">
            <ReactApexChart
              options={this.state.options}
              series={this.state.series}
              type="bar"
              height={400}
            />
          </div>
          <div id="chart-quarter">
            <ReactApexChart
              options={this.state.optionsQuarter}
              series={this.state.seriesQuarter}
              type="bar"
              height={400}
            />
          </div>
        </div>
        <div id="html-dist"></div>
      </div>
    );
  }
}

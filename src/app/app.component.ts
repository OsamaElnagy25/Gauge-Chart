declare var require: any;
import { Component } from "@angular/core";
import Highcharts, {Options} from './highcharts';
const HighchartsMore = require("./highcharts-more.src");
HighchartsMore(Highcharts);
const HC_solid_gauge = require("./solid-gauge.src");
HC_solid_gauge(Highcharts);
@Component({
  selector: "my-app",
    templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  clickMessage = "";
  name = "Angular";
  onClickMe(referenceKeyName) {
  }
  ngOnInit() {
    //guagedata : an object which is used to pass the chart with it's maximum and 
    //minimum values and desired value 
    var guagedata = {id:"chart2", value:0.4 ,text:"improve overall sales",min:0,max:5}; 
    this.chartFunc(guagedata);

    guagedata = {id:"chart3", value:44 ,text:"Cost per lead",min:42, max:45}; 
    this.chartFunc(guagedata);

    guagedata = {id:"chart4", value:3.4 ,text:"Sales conversion rate",min:3 , max:3.5}; 
    this.chartFunc(guagedata);

    guagedata = {id:"chart5", value:54 ,text:"product sales",min:50.5,max:54.6}; 
    this.chartFunc(guagedata);

  }
  chartFunc(guagedata) {
    Highcharts.chart(guagedata["id"], {
      chart: {
        type: "solidgauge",
        name: "Whatever"
      },
      name: "Whatever",
      title: {
        text: guagedata["text"],
        align: "center",
        y: 350 //  this to move y-coordinate of title to desired location
      },
      credits: {
        enabled: false
      },
      /*the following describes The design of the Gauge Chart
       that will be shown after compiling*/
      pane: {
        size: "80%",
        startAngle: -90,
        endAngle: 90,
        background: {
          backgroundColor:
            (Highcharts.theme && Highcharts.theme.background2) || "#EEE",
          innerRadius: "60%",
          outerRadius: "100%",
          shape: "arc"
        }
      },
      exporting: {
        enabled: false
      },
      tooltip: {
        enabled: false
      },

      // the value axis
      yAxis: {
        min: guagedata["min"],  // taking the minimum value of the Gauge
        max: guagedata["max"],  //taking the maximum value of the Gauge
        stops: [
          [0.1, "#DF5353"], // green
          [0.5, "#DDDF0D"], // yellow
          [0.9, "#55BF3B"] // red
        ],
        tickWidth: 0,
        minorTickInterval: null,
        startOnTick:false,
        title: {
          y: -70
        },
        labels: {
          y: 60
        }
      },
      plotOptions: {
        solidgauge: {
          align: 'right',
          dataLabels: {
            align: 'right',
            borderWidth: 0,
          }
        }
      },
      series: [
        {
          name: "Speed",
          data: [guagedata["value"]]
        },
        {
          name: "Whatever",
          type: "gauge",
          data: [guagedata["value"]]
        }
      ]
    });
  }
}

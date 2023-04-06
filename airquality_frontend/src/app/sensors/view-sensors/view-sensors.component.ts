import {Component} from "@angular/core";
// import sensorData from "../../../../sensor_data.json";
import SensorData from "./data.json";

@Component({
  selector: "app-view-sensors",
  templateUrl: "./view-sensors.component.html",
  styleUrls: ["./view-sensors.component.scss"],
})
export class ViewSensorsComponent {
  sensorData: Sensor[] = SensorData;
  // sensors = [
  //   {
  //     name: "mhz19",
  //     subject: "CO2",
  //     unit: "ppm",
  //     value: 400,
  //   },
  //   {
  //     name: "htu21d",
  //     subject: "humidity",
  //     unit: "%",
  //     value: 40,
  //   },
  // ];
}

interface Sensor {
  name: String;
  subject: String;
  unit: String;
  value: Number;
}

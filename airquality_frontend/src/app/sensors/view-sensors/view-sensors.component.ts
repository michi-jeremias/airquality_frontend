import { Component } from "@angular/core";
// import sensorData from "../../../../sensor_data.json";
// import SensorData from "./data.json";
import { SocketService, SensorData } from "src/app/socket.service";

@Component({
  selector: "app-view-sensors",
  templateUrl: "./view-sensors.component.html",
  styleUrls: ["./view-sensors.component.scss"],
})
export class ViewSensorsComponent {
  // sensorData: SensorData[] = [];
  // sensorData: {} = {};
  sensorData: string = "hu";

  public getSensorData() {
    this.socketService.sendDataRequest();
    this.sensorData = "";
  }

  constructor(private socketService: SocketService) {}

  ngOnInit() {
    // this.socketService.getSensorData().subscribe((sensordata: SensorData[]) => {
    //   this.sensorData = sensordata;
    // });

    this.socketService.getSensorData().subscribe((sensordata: string) => {
      this.sensorData = sensordata;
    });
  }
  ngOnChange() {
    // this.socketService.getSensorData().subscribe((sensordata: SensorData[]) => {
    //   this.sensorData = sensordata;
    // });

    this.socketService.getSensorData().subscribe((sensordata: string) => {
      this.sensorData = sensordata;
    });
  }
}

// interface SensorData {
//   name: String;
//   subject: String;
//   unit: String;
//   value: Number;
// }

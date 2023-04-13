import { Component } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
// import sensorData from "../../../../sensor_data.json";
// import SensorData from "./data.json";
import { SocketService, SensorData } from "src/app/socket.service";

@Component({
  selector: "app-view-sensors",
  templateUrl: "./view-sensors.component.html",
  styleUrls: ["./view-sensors.component.scss"],
})
export class ViewSensorsComponent {
  constructor(private socketService: SocketService) {}

  data$: Observable<{}> = new Observable();
  message$: Observable<any> = new Observable();

  public getMessage() {}

  public sendMessage() {
    this.socketService.sendMessage("komm brudi tanz");
  }

  ngOnInit() {
    this.message$ = this.socketService.onMessage();
    // this.data$ = this.socketService.onData();
  }
}

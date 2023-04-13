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

  localData: SensorData[] = [{ name: "a", subject: "b", unit: "c", value: 1.0 }];
  // data$: Observable<{}> = new Observable();
  data$: Observable<SensorData[]> = new Observable();
  // data$: Observable<string> = new Observable();
  message$: Observable<any> = new Observable();
  message2: string = "";

  public getJson(str: Observable<string>) {}

  public getMessage() {}

  public sendMessage() {
    this.socketService.sendMessage("komm brudi tanz");
  }

  ngOnInit() {
    this.message$ = this.socketService.onMessage();

    this.socketService.onMessage2().subscribe((message: string) => {
      this.message2 = message;
    });
    // this.message2$ = this.socketService.message2$;

    this.socketService.onData().subscribe((data) => (this.localData = data));
    // this.data$ = this.socketService.onData();

    // this.socketService.onData().subscribe((data) => {
    //   for (let datapoint of data) {
    //     this.localData.push(datapoint);
    //   }
    // });
  }

  ngOnChange() {
    this.socketService.onData().subscribe((data) => (this.localData = data));
    // this.data$.subscribe((data) => {
    //   this.localData = data;
    // });
  }
}

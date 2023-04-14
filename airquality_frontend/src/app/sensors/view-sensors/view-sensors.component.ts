import { Component } from "@angular/core";
import { Observable } from "rxjs";
import { SocketService, SensorData } from "src/app/socket.service";

@Component({
  selector: "app-view-sensors",
  templateUrl: "./view-sensors.component.html",
  styleUrls: ["./view-sensors.component.scss"],
})
export class ViewSensorsComponent {
  constructor(private socketService: SocketService) {}

  data$: SensorData[] = [];
  message$: Observable<any> = this.socketService.onMessage();
  socketConnected: boolean = false;
  // message$: string = "";  // Initialize when subscribing

  public sendMessage() {
    this.socketService.sendMessage("komm brudi tanz");
  }

  ngOnInit() {
    // We can subscribe here and turn message$ into a string.
    // Or we can just display the Observable directly in the
    // html with the async pipe: {{ message$ | async }}
    // this.socketService.onMessage().subscribe((message) => (this.message$ = message));

    this.socketConnected = this.socketService.isConnected();
    console.log(this.socketConnected);

    this.socketService.onData().subscribe(
      (datastream) => {
        this.data$ = [];
        // console.log(typeof datastream);
        for (let entry of datastream) {
          this.data$.push({ name: entry.name, subject: entry.subject, unit: entry.unit, value: entry.value });
        }
      },
      (err) => {
        console.log("could not reach socket server");
      }
    );
  }
}

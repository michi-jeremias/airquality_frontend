import { Injectable } from "@angular/core";
import io from "socket.io-client";
import { BehaviorSubject, Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class SocketService {
  // public sensorData$: BehaviorSubject<SensorData[]> = new BehaviorSubject<SensorData[]>([]);
  // public sensorDataJson$: BehaviorSubject<{}> = new BehaviorSubject<{}>({});
  public sensorDataJson$: BehaviorSubject<string> = new BehaviorSubject<string>("ii");
  constructor() {}

  socket = io("http://localhost:5000");

  public sendDataRequest() {
    this.socket.emit("datarequest_from_frontend");
  }

  public getSensorData = () => {
    this.socket.on("sensoradata", (sensordata) => {
      this.sensorDataJson$.next(sensordata);
    });
    return this.sensorDataJson$.asObservable();
  };
}

export interface SensorData {
  name: String;
  subject: String;
  unit: String;
  value: Number;
}

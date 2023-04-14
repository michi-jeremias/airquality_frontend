import { Injectable } from "@angular/core";
// import io from "socket.io-client";
import * as socketIO from "socket.io-client";
import { BehaviorSubject, Observable, fromEvent, map } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class SocketService {
  constructor() {
    this.socket = socketIO.io("ws://localhost:5000");
  }

  private socket;

  sendMessage(message: string) {
    this.socket.emit("message", message);
  }

  public message2$: BehaviorSubject<string> = new BehaviorSubject("");

  onMessage2 = () => {
    this.socket.on("message2", (message2) => {
      this.message2$.next(message2);
    });
    return this.message2$.asObservable();
  };

  onMessage() {
    return fromEvent(this.socket, "message");
  }

  onData(): Observable<SensorData[]> {
    return fromEvent(this.socket, "on_data").pipe(map((value: string) => JSON.parse(value)));
  }
}

export interface SensorData {
  name: String;
  subject: String;
  unit: String;
  value: Number;
}

import { Injectable } from "@angular/core";
// import io from "socket.io-client";
import * as socketIO from "socket.io-client";
import { fromEvent } from "rxjs";

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

  onMessage() {
    return fromEvent(this.socket, "message");
  }
}

export interface SensorData {
  name: String;
  subject: String;
  unit: String;
  value: Number;
}

import { Injectable } from "@angular/core";
import * as socketIO from "socket.io-client";
import { Observable, fromEvent, map } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class SocketService {
  private socket;

  constructor() {
    this.socket = socketIO.io("ws://localhost:5000");
  }

  sendMessage(message: string) {
    this.socket.emit("message", message);
  }

  onMessage() {
    return fromEvent(this.socket, "message");
  }

  onData(): Observable<SensorData[]> {
    return fromEvent(this.socket, "on_data").pipe(map((value: string) => JSON.parse(value)));
  }

  isConnected(): boolean {
    console.log(this.socket);
    return this.socket.connected;
  }
}

export interface SensorData {
  name: string;
  subject: string;
  unit: string;
  value: number;
}

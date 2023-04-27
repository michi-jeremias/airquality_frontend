import { Injectable } from "@angular/core";
import * as socketIO from "socket.io-client";
import { switchAll } from "rxjs/operators";
import { of, BehaviorSubject, Observable, Subject, fromEvent, map, catchError } from "rxjs";
import { webSocket, WebSocketSubject } from "rxjs/webSocket";

@Injectable({
    providedIn: "root",
})
export class SocketService {
    private socket;
    private socket$ = of(socketIO.io("ws://raspberrypi:5000"));

    constructor() {
        this.socket = socketIO.io("http://raspberrypi:5000");
        this.socket$ = of(this.socket);
    }

    isConnected(): boolean {
        console.log(this.socket);
        return this.socket.connected;
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
}

export interface SensorData {
    name: string;
    subject: string;
    unit: string;
    value: number;
}

import { Injectable } from "@angular/core";
import * as socketIO from "socket.io-client";
import { Observable, fromEvent } from "rxjs";

@Injectable({
    providedIn: "root",
})
export class SocketService {
    private socket;

    constructor() {
        this.socket = socketIO.io("http://192.168.100.12:5000");
    }

    getData(): Observable<any> {
        return fromEvent(this.socket, "on_data");
    }
}

export interface SensorData {
    name: string;
    subject: string;
    unit: string;
    value: number;
}

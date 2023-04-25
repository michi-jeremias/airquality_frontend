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
        // this.socket = socketIO.io("ws://localhost:5000");
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

    // onData(): Observable<SensorData[]> {
    //     let observable: Observable<any> = new Observable((observer) => {
    //         this.socket.on("on_data", (data) => {
    //             observer.next(data);
    //             observer.complete();
    //             // console.log("socket.service: " + typeof data);
    //         });
    //         return () => {
    //             this.socket.disconnect();
    //         };
    //     });
    //     return observable.pipe(map((value: string) => JSON.parse(value)));
    // }

    // observable: Observable<number> = new Observable((subscriber) => {
    //     subscriber.next(1);
    //     subscriber.next(2);
    //     subscriber.next(3);
    //     setTimeout(() => {
    //         subscriber.next(4);
    //         subscriber.complete();
    //     }, 1000);
    // });

    // onData2(): Observable<SensorData[]> {
    //     let observableSensorData: Observable<SensorData[]> = new Observable((subscriber) => {
    //         let sensorData: SensorData[] = [];
    //         sensorData.push({ name: "sensorname", subject: "temp", unit: "C", value: 24.0 });
    //         sensorData.push({ name: "sensorname2", subject: "temp2", unit: "2C", value: 224.0 });
    //         subscriber.next(sensorData);
    //     });
    //     return observableSensorData;
    // }

    // ngOnInit() {
    //     let socket$ = of(this.socket);
    // }
}

export interface SensorData {
    name: string;
    subject: string;
    unit: string;
    value: number;
}

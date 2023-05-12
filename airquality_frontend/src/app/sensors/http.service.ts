import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
    providedIn: "root",
})
export class HttpService {
    constructor(private httpClient: HttpClient) {}

    getData(): Observable<any> {
        // return this.httpClient.get("http://192.168.100.173:5000/getSensorData", { responseType: "text" });
        return this.httpClient.get("http://localhost:5000/getSensorData", { responseType: "text" });
    }
}

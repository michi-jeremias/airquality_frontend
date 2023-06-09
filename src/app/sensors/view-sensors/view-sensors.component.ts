import { Component } from "@angular/core";
// import { FetchfileService } from "src/app/sensors/fetchfile.service";
import { HttpService } from "../http.service";
// import { SocketService } from "../socket.service";

@Component({
    selector: "app-view-sensors",
    templateUrl: "./view-sensors.component.html",
    styleUrls: ["./view-sensors.component.scss"],
})
export class ViewSensorsComponent {
    constructor(
        // private fetchfileService: FetchfileService,
        private httpService: HttpService // private socketService: SocketService
    ) {}

    data$: any;
    connectedToBackend$: boolean = false;

    loadData() {
        // this.httpService.getData().subscribe(
        // this.fetchfileService.getData().subscribe(
        this.httpService.getData().subscribe(
            (data) => {
                console.log(`data: ${data}`);
                this.data$ = JSON.parse(data);
                this.connectedToBackend$ = true;
                setTimeout(() => {
                    this.loadData();
                }, 5000);
            },
            (err) => {
                console.log(err);
                this.data$ = [];
                this.connectedToBackend$ = false;
            }
        );
    }

    getQualityClass(subject: string, value: number): string {
        // return "high-quality";
        switch (true) {
            case subject.toLowerCase() == "co2" && value <= 800:
                return "high-quality";
            case subject.toLowerCase() == "co2" && value <= 1000:
                return "average-quality";
            case subject.toLowerCase() == "co2" && value <= 1400:
                return "moderate-quality";
            case subject.toLowerCase() == "co2" && value > 1400:
                return "low-quality";
            case subject.toLowerCase() == "temperature" && value <= 800:
                return "high-quality";
            case subject.toLowerCase() == "temperature" && value <= 1000:
                return "average-quality";
            case subject.toLowerCase() == "temperature" && value <= 1400:
                return "moderate-quality";
            case subject.toLowerCase() == "temperature" && value > 1400:
                return "low-quality";
            case subject.toLowerCase() == "humidity" && value <= 800:
                return "high-quality";
            case subject.toLowerCase() == "humidity" && value <= 1000:
                return "average-quality";
            case subject.toLowerCase() == "humidity" && value <= 1400:
                return "moderate-quality";
            case subject.toLowerCase() == "humidity" && value > 1400:
                return "low-quality";
            default:
                return "low-quality";
        }
    }

    ngOnInit() {
        // We can subscribe here and turn message$ into a string.
        // Or we can just display the Observable directly in the
        // html with the async pipe: {{ message$ | async }}
        // this.socketService.onMessage().subscribe((message) => (this.message$ = message));
        this.loadData();
    }
}

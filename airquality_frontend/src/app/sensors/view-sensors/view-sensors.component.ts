import { Component } from "@angular/core";
import { FetchfileService } from "src/app/sensors/fetchfile.service";

@Component({
    selector: "app-view-sensors",
    templateUrl: "./view-sensors.component.html",
    styleUrls: ["./view-sensors.component.scss"],
})
export class ViewSensorsComponent {
    constructor(private fetchfileService: FetchfileService) {}

    data$: any;

    loadData() {
        this.fetchfileService.getDataFromFile().subscribe(
            (data) => {
                console.log(`data: ${data}`);
                this.data$ = JSON.parse(data);
                setTimeout(() => {
                    this.loadData();
                }, 5000);
            },
            (err) => {
                console.log(err);
            }
        );
    }

    getQualityClass(subject: string, value: number): string {
        // return "high-quality";
        switch (true) {
            case subject.toLowerCase() == "co2" && value <= 800:
                return "high-quality";
            case subject.toLowerCase() == "co2" && value <= 1000:
                return "averate-quality";
            case subject.toLowerCase() == "co2" && value <= 1400:
                return "moderate-quality";
            case subject.toLowerCase() == "co2" && value > 1400:
                return "low-quality";
            case subject.toLowerCase() == "temperature" && value <= 800:
                return "high-quality";
            case subject.toLowerCase() == "temperature" && value <= 1000:
                return "averate-quality";
            case subject.toLowerCase() == "temperature" && value <= 1400:
                return "moderate-quality";
            case subject.toLowerCase() == "temperature" && value > 1400:
                return "low-quality";
            case subject.toLowerCase() == "humidity" && value <= 800:
                return "high-quality";
            case subject.toLowerCase() == "humidity" && value <= 1000:
                return "averate-quality";
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

import { Component } from "@angular/core";
import { FetchfileService } from "src/app/fetchfile.service";

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

    ngOnInit() {
        // We can subscribe here and turn message$ into a string.
        // Or we can just display the Observable directly in the
        // html with the async pipe: {{ message$ | async }}
        // this.socketService.onMessage().subscribe((message) => (this.message$ = message));
        this.loadData();
    }
}

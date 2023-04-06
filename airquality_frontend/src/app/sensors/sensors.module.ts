import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {ViewSensorsComponent} from "./view-sensors/view-sensors.component";

@NgModule({
  declarations: [ViewSensorsComponent],
  imports: [CommonModule],
  exports: [ViewSensorsComponent],
})
export class SensorsModule {}

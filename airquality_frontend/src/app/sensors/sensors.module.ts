import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ViewSensorsComponent } from "./view-sensors/view-sensors.component";
import { LayoutModule } from "../layout/layout.module";

@NgModule({
  declarations: [ViewSensorsComponent],
  imports: [CommonModule, LayoutModule],
  exports: [ViewSensorsComponent],
})
export class SensorsModule {}

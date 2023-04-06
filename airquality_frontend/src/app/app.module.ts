import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";

import {AppRoutingModule} from "./app-routing.module";
import {AppComponent} from "./app.component";
import {SensorsModule} from "./sensors/sensors.module";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, SensorsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

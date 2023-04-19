import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CardComponent } from "./card/card.component";

import { MatCardModule } from "@angular/material/card";
import { MatGridListModule } from "@angular/material/grid-list";

@NgModule({
    declarations: [CardComponent],
    imports: [CommonModule, MatCardModule, MatGridListModule],
    exports: [CardComponent, MatCardModule, MatGridListModule],
})
export class LayoutModule {}

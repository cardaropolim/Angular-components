import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SelectComponent } from "./select.component";
import { FormControl } from "@angular/forms";

@NgModule({
    imports: [CommonModule, SelectComponent, FormControl,]
})

export class SelectModule {}
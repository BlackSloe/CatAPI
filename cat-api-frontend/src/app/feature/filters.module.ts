import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';

import { FiltersComponent } from './filters/filters.component';

const material = [
    MatInputModule
];

@NgModule({
    declarations: [FiltersComponent],
    imports: [FormsModule, material],
    exports: [FiltersComponent]
})
export class FiltersModule { }
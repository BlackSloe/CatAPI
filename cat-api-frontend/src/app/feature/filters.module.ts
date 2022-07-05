import { NgModule } from '@angular/core';
import { MatInputModule } from '@angular/material/input';

import { FiltersComponent } from './filters/filters.component';

const material = [
    MatInputModule
];

@NgModule({
    declarations: [FiltersComponent],
    imports: [material],
    exports: [FiltersComponent]
})
export class FiltersModule { }
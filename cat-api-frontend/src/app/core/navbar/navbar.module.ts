import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';

import { NavbarComponent } from './navbar.component';

const material = [
    MatToolbarModule
];

@NgModule({
    declarations: [NavbarComponent],
    imports: [material],
    exports: [NavbarComponent]
})
export class NavbarModule {}
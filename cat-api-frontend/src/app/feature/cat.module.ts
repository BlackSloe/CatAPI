import { NgModule } from '@angular/core';

import { CatComponent } from './cat/cat.component';

@NgModule({
    declarations: [CatComponent],
    exports: [CatComponent]
})
export class CatModule {}
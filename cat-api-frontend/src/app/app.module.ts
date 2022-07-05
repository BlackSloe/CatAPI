import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { NavbarModule } from './core/navbar/navbar.module';
import { CatModule } from './feature/cat.module';
import { FiltersModule } from './feature/filters.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NavbarModule,
    CatModule,
    FiltersModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

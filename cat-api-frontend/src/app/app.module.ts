import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { NavbarModule } from './core/navbar/navbar.module';
import { CatModule } from './feature/cat.module';
import { FiltersModule } from './feature/filters.module';
import { CatApiKeyInterceptor } from './helpers/cat-api-key.interceptor';


const interceptors = [
  {
    provide: HTTP_INTERCEPTORS,
    useClass: CatApiKeyInterceptor,
    multi: true
  }
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    
    NavbarModule,
    CatModule,
    FiltersModule
  ],
  providers: [interceptors],
  bootstrap: [AppComponent]
})
export class AppModule { }

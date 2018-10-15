import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AngularMaterialModule } from './modules/angular-material/angular-material.module';
import { LayoutsModules } from './modules/layouts/layouts.module';

import { environment } from 'src/environments/environment';
import { AppComponent } from './app.component';
import { ForecastComponent } from './components/forecast/forecast.component';

@NgModule({
  declarations: [AppComponent, ForecastComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    LayoutsModules
  ],
  exports: [],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AngularMaterialModule } from './modules/angular-material/angular-material.module';
import { LayoutsModules } from './modules/layouts/layouts.module';

import { environment } from '../environments/environment';
import { AppComponent } from './app.component';
import { SortCitiesPipe } from './pipes/sort-cities.pipe';

import { NgxsModule } from '@ngxs/store';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';
import { NgxsLoggerPluginModule } from '@ngxs/logger-plugin';
import { AppUserState } from './states/app.state';
import { ForecastComponent } from './components/forecast/forecast.component';
import {
  AppSnackBarComponent,
  AppSnackBarInnerComponent
} from './components/snack-bar/snack-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    SortCitiesPipe,
    ForecastComponent,
    AppSnackBarComponent,
    AppSnackBarInnerComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    LayoutsModules,
    NgxsModule.forRoot([AppUserState]),
    NgxsReduxDevtoolsPluginModule.forRoot(),
    NgxsLoggerPluginModule.forRoot()
  ],
  entryComponents: [AppSnackBarComponent],
  providers: [SortCitiesPipe],
  bootstrap: [AppComponent]
})
export class AppModule {}

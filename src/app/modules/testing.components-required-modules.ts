import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AngularMaterialModule } from './angular-material/angular-material.module';
import { LayoutsModules } from './layouts/layouts.modules';
import { environment } from 'src/environments/environment';
import { MatSnackBarModule } from '@angular/material';
import { NgxsModule } from '@ngxs/store';
import { AppHistoryState, AppErrorsState } from '../states/app.state';

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    BrowserModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    LayoutsModules,
    MatSnackBarModule,
    NgxsModule.forRoot([AppHistoryState, AppErrorsState])
  ],
  exports: [
    BrowserModule,
    HttpClientModule,
    AngularFireModule,
    AngularFireDatabaseModule,
    BrowserModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    LayoutsModules,
    MatSnackBarModule,
    NgxsModule
  ]
})

export class TestingComponentsRequiredModules {}

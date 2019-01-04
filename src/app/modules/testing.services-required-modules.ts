import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { MatSnackBarModule } from '@angular/material';
import { environment } from 'src/environments/environment';
import { NgxsModule } from '@ngxs/store';
import { AppHistoryState, AppErrorsState } from '../states/app.state';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    BrowserAnimationsModule,
    MatSnackBarModule,
    NgxsModule.forRoot([AppHistoryState, AppErrorsState])
  ],
  exports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AngularFireModule,
    AngularFireDatabaseModule,
    BrowserAnimationsModule,
    MatSnackBarModule,
    NgxsModule
  ]
})

export class TestingServicesRequiredModules {}

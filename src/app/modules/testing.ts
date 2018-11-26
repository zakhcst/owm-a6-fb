import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AngularMaterialModule } from '.././modules/angular-material/angular-material.module';
import { LayoutsModules } from './layouts/layouts.module';
import { environment } from 'src/environments/environment';
import { MatSnackBarModule } from '@angular/material';

export const AppModules = [
  BrowserModule,
  HttpClientModule,
  AngularFireModule.initializeApp(environment.firebase),
  AngularFireDatabaseModule,
  BrowserModule,
  BrowserAnimationsModule,
  AngularMaterialModule,
  LayoutsModules,
  MatSnackBarModule,
];

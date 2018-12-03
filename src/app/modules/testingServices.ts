
import { HttpClientModule } from '@angular/common/http';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { MatSnackBarModule } from '@angular/material';
import { environment } from 'src/environments/environment';
import { NgxsModule } from '@ngxs/store';
import { AppHistoryState, AppErrorsState } from '../states/app.state';

export const AppServivesModules = [
  HttpClientModule,
  AngularFireModule.initializeApp(environment.firebase),
  AngularFireDatabaseModule,
  MatSnackBarModule,
  NgxsModule.forRoot([AppHistoryState, AppErrorsState]),
];

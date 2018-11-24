
import { HttpClientModule } from '@angular/common/http';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { environment } from 'src/environments/environment';

export const AppServivesModules = [
  HttpClientModule,
  AngularFireModule.initializeApp(environment.firebase),
  AngularFireDatabaseModule
];

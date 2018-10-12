import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatSelectModule,
  MatCardModule
  // MatTableModule,
  // MatButtonModule,
  // MatIconModule,
  // MatProgressBarModule,
  // MatDividerModule,
  // MatPaginatorModule,
  // MatSidenavModule,
  // MatToolbarModule,
  // MatListModule,
  // MatSortModule,
  // MatSlideToggleModule
} from '@angular/material';

@NgModule({
  imports: [CommonModule, MatSelectModule, MatCardModule],
  exports: [MatSelectModule, MatCardModule]
})
export class AngularMaterialModule {}

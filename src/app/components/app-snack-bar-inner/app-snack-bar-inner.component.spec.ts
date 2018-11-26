import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppSnackBarInnerComponent } from './app-snack-bar-inner.component';
import { MAT_SNACK_BAR_DATA } from '@angular/material';

describe('SnackBarInnerComponent', () => {
  let component: AppSnackBarInnerComponent;
  let fixture: ComponentFixture<AppSnackBarInnerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppSnackBarInnerComponent ],
      providers: [ { provide: MAT_SNACK_BAR_DATA, useValue: { message: 'Test Message' } } ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppSnackBarInnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

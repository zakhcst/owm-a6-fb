import { Component, OnInit, Inject } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { MAT_SNACK_BAR_DATA } from '@angular/material';

@Component({
  selector: 'app-snack-bar',
  templateUrl: './snack-bar.component.html',
  styleUrls: ['./snack-bar.component.css']
})
export class AppSnackBarComponent implements OnInit {
  constructor(
    public snackBar: MatSnackBar,
    @Inject(MAT_SNACK_BAR_DATA) public data: any
  ) {}

  ngOnInit() {}

  openSnackBar() {
    this.snackBar.openFromComponent(AppSnackBarInnerComponent, {
      data: this.data
    });
  }
}
// openFromComponent extends the functionality
@Component({
  selector: 'app-snack-bar-component-inner',
  templateUrl: 'app-snack-bar-component-inner.html',
  styles: [
    `
      .example {
        color: white;
      }
    `
  ]
})
export class AppSnackBarInnerComponent {
  constructor(@Inject(MAT_SNACK_BAR_DATA) public data: any) {}
}

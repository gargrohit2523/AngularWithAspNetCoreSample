import { Injectable, NgZone } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { SnackbarComponent } from '../widgets/shared/snackbar/snackbar.component';

@Injectable({
  providedIn: 'root'
})
export class SnackbarService {
  duration=3000;

  constructor(public snackBar: MatSnackBar,
    private zone: NgZone) { }

    public success(message = 'Success'){
      this.zone.run(() => {
        this.snackBar.openFromComponent(SnackbarComponent, {
          duration: this.duration,
          panelClass : ['green-snackbar'],
          data: {message}
        });
      });
    }

    public error(message = 'Error'){
      this.zone.run(() => {
        this.snackBar.openFromComponent(SnackbarComponent, {
          duration: this.duration,
          panelClass : ['red-snackbar'],
          data: {message}
        });
      });
    }
}

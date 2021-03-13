import { BreakpointObserver } from '@angular/cdk/layout';
import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { throwError } from 'rxjs';
import { FirebaseUser } from 'src/app/models/models';
import { MainService } from 'src/app/services/main.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  hide:boolean = true;
  isLoading: boolean = false;
  durationInSeconds = 10;
  
  constructor(private service: MainService, private router: Router, 
    private breakpointObserver: BreakpointObserver,  private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }
  
  signUp(f: NgForm){
    this.enableLoader();
    const payload: {email: string, password: string} = f.form.getRawValue();
    this.service.signUp(payload.email, payload.password).subscribe((data: FirebaseUser) => {
      this.service.storeUser(data);
      this.router.navigate(['/']);
      this.disableLoader;
      console.log(data);
    }, error => {
      this.disableLoader();
      this.handleError(error);
    });
   }
 
   openSnackBar(message: string, action: string) {
     const isSmallScreen = this.breakpointObserver.isMatched('(max-width: 599px)');
     const horizontalPosition = isSmallScreen ? "center": "right";
     const verticalPosition =   isSmallScreen ? "bottom": "top";
     this._snackBar.open(message, action, {
       duration:  this.durationInSeconds * 1000,
       horizontalPosition,
       verticalPosition
     });
   
   }
 
  enableLoader(){
    this.isLoading = true;
  }
 
  disableLoader(){
   this.isLoading = false;
 }
 
 
 private handleError(error: HttpErrorResponse) {
   if (error.error instanceof ErrorEvent) {
     // A client-side or network error occurred. Handle it accordingly.
     console.error('An error occurred:', error.error.message);
     this.openSnackBar(`${error.error.message}`, 'Try again');
   } else {
       this.openSnackBar(`${error.error.error.message}`.split('_').join(" "), 'Try again');
   }
   // Return an observable with a user-facing error message.
   return throwError(
     'Something bad happened; please try again later.');
 }
}

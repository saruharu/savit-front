import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services';

export const passwordMatchingValidator: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
  const password = control.get('password');
  const confirmPassword = control.get('confirmPassword');

  // console.log("confirmation",password, confirmPassword, password?.value === confirmPassword?.value )
  return password?.value === confirmPassword?.value ? null : { notmatched: true };
};


@Component({
  selector: 'app-signup-dialog',
  templateUrl: './signup-dialog.component.html',
  styleUrls: ['./signup-dialog.component.scss']
})
export class SignupDialogComponent implements OnInit {

  constructor(private authService: AuthService,private router: Router) { 

  }

  ngOnInit(): void {
  }

  signupForm = new FormGroup({
    "username": new FormControl("",[Validators.required,Validators.minLength(5)]),
    // "name": new FormControl("", Validators.required),
    // "phonenumber": new FormControl("", Validators.required),
    "email": new FormControl("", [Validators.email, Validators.required]),
    "password": new FormControl("", [
      Validators.required,
      Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}'),
      Validators.minLength(8) ]
      ),
    "confirmPassword": new FormControl("", [Validators.required]),
  }, { validators: passwordMatchingValidator })

  onSignupSubmit(): void{
    console.log("formvalues",this.signupForm.value)
    // send request to backend to register the user
    //if(exists): display "user already exists"
    // if(doesnt exist): display ""
    const username = this.signupForm.get('username')?.value || null;
    const email = this.signupForm.get('email')?.value || null;
    const password = this.signupForm.get('password')?.value || null;
    

    this.authService.register(username, email, password).subscribe(
      data => {
        console.log(data);
        this.isSuccessful = true;
        this.isSignUpFailed = false;
        if(this.isSuccessful) window.location.reload();

      },
      err => {
        this.errorMessage = err.error.message;
        this.isSignUpFailed = true;
      }
    );
  }


  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';  


}

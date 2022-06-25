import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AuthService, TokenStorageService } from '../../services';

@Component({
  selector: 'app-login-dialog',
  templateUrl: './login-dialog.component.html',
  styleUrls: ['./login-dialog.component.scss']
})
export class LoginDialogComponent implements OnInit {

  loginForm = new FormGroup({
    "username": new FormControl("", Validators.required),
    "password": new FormControl("", Validators.required),
});
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = [];
  constructor(private authService: AuthService,
     private tokenStorage: TokenStorageService, private router: Router,
     private dialogRef: MatDialogRef<LoginDialogComponent>
     ) { }
  ngOnInit(): void {
    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
      this.roles = this.tokenStorage.getUser().roles;
    }
  }
  onLoginSubmit(): void {
    const { username, password } = {username: this.loginForm.value.username, password: this.loginForm.value.password};
    this.authService.login(username, password).subscribe(
      data => {
        this.tokenStorage.saveToken(data.accessToken);
        this.tokenStorage.saveUser(data);
        this.isLoginFailed = false;
        this.isLoggedIn = true;
        this.roles = this.tokenStorage.getUser().roles;
        this.dialogRef.close();
        window.location.reload();
      },
      err => {
        this.errorMessage = err.error.message;
        this.isLoginFailed = true;
      }
    );
  }
  
  toHomePage(): void {
    this.router.navigate(['menu'])
  }
}

import { LoginDialogComponent } from "./login-dialog/login-dialog.component";
import { LoginComponent } from "./login/login.component";
import { RegisterComponent } from "./register/register.component";
import { SignupDialogComponent } from "./signup-dialog/signup-dialog.component";

export const components = [
    LoginDialogComponent,
    SignupDialogComponent,
    LoginComponent,
    RegisterComponent

];

export const entryComponents = [
    LoginDialogComponent,
    SignupDialogComponent
]


export * from "./signup-dialog/signup-dialog.component";
export * from "./login-dialog/login-dialog.component";
export * from "./login/login.component";
export *from './register/register.component';


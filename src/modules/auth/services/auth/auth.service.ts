import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs';
import { AppConstants } from 'src/environments/environment';
import { HttpService } from 'src/modules/shared/services';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

const AUTH_API = AppConstants.AUTH_API;
@Injectable({
  providedIn: 'root'
})
export class AuthService {




  constructor(private http: HttpClient) { }
  login(username: string, password: string): Observable<any> {
    return this.http.post(AUTH_API + 'signin', {
      username,
      password
    }, httpOptions);
  }
  register(username: string, email: string, password: string): Observable<any> {
    return this.http.post(AUTH_API + 'signup', {
      username,
      email,
      password
    }, httpOptions);
  }

  //   constructor(private httpService: HttpService) { }

//   verifyToken(token:any): Observable<any> {
//     let options = {
//       headers: new HttpHeaders({ 'Content-Type': 'text/plain' })
// };
//     return this.httpService.post(AppConstants.AUTH_API + 'token/verify', token, options)
//   }
   
//   resendToken(token:any): Observable<any> {
//     return this.http.post(AppConstants.AUTH_API + 'token/resend', token, {
//           headers: new HttpHeaders({ 'Content-Type': 'text/plain' })
//     });
//   }
}

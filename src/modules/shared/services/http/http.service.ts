import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private httpClientService: HttpClient) { }

  get(url: string,options: any,params?: any){
    return this.httpClientService.get(url,options).pipe().toPromise().catch(err=>{
      return console.error(err);
    })
  }

  post(url: string,data: any,options: any,params?: any){
    return this.httpClientService.post(url,data,options).pipe().toPromise().catch(err=>{
      return console.error(err);
    })
  }

  put(url: string,data:any,options: any,params?: any){
    return this.httpClientService.put(url,data,options).pipe().toPromise().catch(err=>{
      return console.error(err);
    })
  }

  delete(url: string,options: any,params?: any){
    return this.httpClientService.delete(url,options).pipe().toPromise().catch(err=>{
      return console.error(err);
    })
  }
}

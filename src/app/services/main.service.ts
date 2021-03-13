import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MainService {

  constructor(private http: HttpClient) { }

  getUser(): boolean{
    const user = !!localStorage.getItem('crypto_user');
    return user;
  }

  signUp(email: string, password: string){
    return this.http.post(`signUp?key=${environment.API_KEY}`, {email, password, returnSecureToken: true});
  }

  signIn(email: string, password: string){
    return this.http.post(`signInWithPassword?key=${environment.API_KEY}`, 
    {email, password, returnSecureToken: true});
  }

  forgotPassword(email: string){
    return this.http.post(`sendOobCode?key=${environment.API_KEY}`, 
    {email, equestType: "PASSWORD_RESET"});
  }

  verifyPasswordReset(oobCode: string){
    return this.http.post(`resetPassword?key=${environment.API_KEY}`, 
    {oobCode});
  }

}

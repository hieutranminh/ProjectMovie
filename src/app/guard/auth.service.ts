import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isLogin: boolean = false;
  getIsLogin(){
    return this.isLogin;
  }
  checkLogin(){
    let localUser = localStorage.getItem('LocalUser');
    if(localUser){
      this.isLogin = true;
      return JSON.parse(localUser);
    }
    else{
      this.isLogin = false;
    }
  }
  constructor() { }
}

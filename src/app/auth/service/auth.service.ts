import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from "src/environments/environment";

import { User } from "../model/user.model";

const URI: string = environment.API + "auth";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  constructor(private http: HttpClient) { }

  register(user: User){
    return this.http.post<any>(`${URI}/register`, user);
  }

  login(user: User){
    return this.http.post<any>(`${URI}/login`, user);
  }

  saveUserCredential(token: string, role: "user" | "admin"){
    localStorage.setItem("token", token);
    localStorage.setItem("role", role);
  }

  getToken(): string {
    return localStorage.getItem("token") || "";
  }

  logout(){
    localStorage.removeItem("token");
    localStorage.removeItem("role");
  }

  isLoggedIn(){
    return !!localStorage.getItem("token");
  }  
}

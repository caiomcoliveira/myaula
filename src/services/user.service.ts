import { Injectable } from '@angular/core';
import { User } from '../models/user';

@Injectable()
export class UserService {

  constructor() { }

  static isAuthenticated():boolean{
      return localStorage.getItem('currentUser') != null;
  }
  static getCurrentUser(): User{
    if (localStorage.getItem('currentUser')){
        return JSON.parse(localStorage.getItem('currentUser'));
    }
    return null
    
  }
}
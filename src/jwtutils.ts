
import { Injectable, Inject } from '@angular/core';
declare var require: any;

var jwtDecode = require('jwt-decode');

@Injectable()
export class JWTUtils {
  getToken: () => string = () => {
      return localStorage.getItem("token");
  };

  constructor() {}

  public getJWTExpirationDate(): Date {
    let token : string = this.getToken();   
    let decodedToken = jwtDecode(token);

    if (!decodedToken.hasOwnProperty('exp')) return null;
    
    const expirationDate = new Date(0);
    expirationDate.setUTCSeconds(decodedToken.exp);

    return expirationDate;
  }

  public isJWTExpired(offset?: number): boolean {
       
    let date = this.getJWTExpirationDate();
    offset = offset || 0;

    if (date === null) {
      return false;
    }

    return !(date.valueOf() > new Date().valueOf() + offset * 1000);
  }
    
}


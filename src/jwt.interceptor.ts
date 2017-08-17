import { HttpEvent , HttpRequest , HttpHandler , HttpInterceptor } from "@angular/common/http";
import { Injectable } from "@angular/core";
import {Observable} from "rxjs/Observable";
import { JWTUtils } from './jwtutils';
import 'rxjs/add/operator/map';

@Injectable()
export class JWTInterceptor implements HttpInterceptor {
      authPrefix : string = 'Bearer';
        
      getToken: () => string = () => {
          return localStorage.getItem("token");
      };  
      constructor(public jwtUtils: JWTUtils){
      }
      intercept(request: HttpRequest<any>,next: HttpHandler): Observable<HttpEvent<any>> {
        
        const token = this.getToken();
        var isTokenExpired = this.jwtUtils.isJWTExpired();
        //console.log("Adding Auth Headers " + `Bearer ${token}`);
        if(isTokenExpired){
            request = request.clone();
        }else{
            request = request.clone({
                setHeaders: {"Authorization": `${this.authPrefix}${token}`}
            });
        }

        return next.handle(request);
    }    
  
}




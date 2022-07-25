import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {urls} from "../../environments/environment";
import {of} from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class UsersServicesService {
  login_url: string = urls.login_url;
  register_url: string = urls.register_url;

  constructor(private http: HttpClient) {
  }

  login(loginData: any) {
    return this.http.post<any>(this.login_url, loginData)
  }

  register(registerData: any) {
    const headers = { 'content-type': 'application/json'}

    return this.http.post<any>(this.register_url,registerData,{headers:headers})
  }


  /**
   * @author Abdullah Hegab
   * @description to check if the token exist in the browser or not
   * @return boolean
   */
  loggedIn(){
    return of(!! localStorage.getItem('token'))
  }

}

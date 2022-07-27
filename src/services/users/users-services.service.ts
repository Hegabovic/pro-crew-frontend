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
  logout_url:string = urls.logout_url;
  users_url:string = urls.users_url;
  deleteUser_url:string=urls.deleteUser_url;
  showUser_url:string = urls.showUser_url;
  editUser_url:string= urls.editUser_url;

  constructor(private http: HttpClient) {
  }

  login(loginData: any) {
    return this.http.post<any>(this.login_url, loginData)
  }

  register(registerData: any) {
    return this.http.post<any>(this.register_url,registerData)
  }

  logout(logout: any) {
    return this.http.post<any>(this.logout_url,logout)
  }


  users() {
    return this.http.get<any>(this.users_url)
  }

  user(id:number){
    this.showUser_url = this.showUser_url.replace("{id}", id.toString())
    return this.http.get<any>(this.showUser_url)
  }

  editUser(id:number,editedUser:any){
    this.editUser_url = this.editUser_url.replace("{id}", id.toString())
    return this.http.put<any>(this.editUser_url,editedUser)
  }

  delete(id:number){
    this.deleteUser_url = this.deleteUser_url.replace("{id}", id.toString())

    return this.http.delete<any>(this.deleteUser_url)
  }



  /**
   * @author Abdullah Hegab
   * @description to check if the token exist in the browser or not
   * @return boolean
   */
  loggedIn(){
    return of(!! localStorage.getItem('token') || !! sessionStorage.getItem('token'))
  }


}

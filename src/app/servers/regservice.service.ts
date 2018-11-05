import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RegserviceService {
  url="http://localhost:3000/api";
 noAuthHeader = { headers: new HttpHeaders({ 'NoAuth': 'True' }) };  
  
  constructor(private http: HttpClient) {}
  
  storedetails(details){
    return this.http.post(this.url+'/register',details,this.noAuthHeader);
   }

   login(authCredentials) {
     console.log(authCredentials);
     return this.http.post(this.url + '/authenticate', authCredentials,this.noAuthHeader);
   }
   getUserProfile() {
     return this.http.get(this.url + '/userProfile');
   }
 rstpw(email){
   return this.http.put(this.url+'/rstpw',email);
 }

 newpassword(token){
   
   return this.http.get(this.url+'/resetpassword/'+token);

 }
 
 savepassword(password){
   return this.http.put(this.url+'/savepassword',password);
 }
   //Helper Methods
 
   setToken(token: string) {
     localStorage.setItem('token', token);
   }
 
   getToken() {
     return localStorage.getItem('token');
   }
 
   deleteToken() {
     localStorage.removeItem('token');
   }
 
   getUserPayload() {
     var token = this.getToken();
     if (token) {
       var userPayload = atob(token.split('.')[1]);
       return JSON.parse(userPayload);
     }
     else
       return null;
   }
 
   isLoggedIn() {
     var userPayload = this.getUserPayload();
     if (userPayload)
       return userPayload.exp > Date.now() / 1000;
     else
       return false;
   }


   newpost(post){
     return this.http.post(this.url+'/newPost',post);
    }
    getAllPosts(){
     return this.http.get(this.url + '/getPosts');
    }

}

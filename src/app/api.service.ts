import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }
   
  addSignup=(dataToSend:any)=>{
    return this.http.post("http://localhost:8080/signup",dataToSend)
  }
  userLogin=(data:any)=>{
    return this.http.post("http://localhost:8080/login",data)
  }
  booksEntry=(data:any)=>{
    return this.http.post("http://localhost:8080/entry",data)
  }
  fetchBook=()=>{
    return this.http.get("http://localhost:8080/view")
  }
  searchBook=(data:any)=>{
    return this.http.post("http://localhost:8080/search",data)
  }
  deleteBook=(data:any)=>{
    return this.http.post("http://localhost:8080/delete",data)
  }
}

import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  name=""
  aadharNo=""
  address=""
  pincode=""
  dateOfBirth=""
  email=""
  phonenumber=""
  username=""
  password=""
  
  constructor(private api:ApiService){}
 
  readValues=()=>
  {
   let data:any={"name":this.name,"aadharNo":this.aadharNo,"address":this.address,"pincode":this.pincode,"dateOfBirth":this.dateOfBirth,"email":this.email,"phonenumber":this.phonenumber,"username":this.username,"password":this.password,}
   console.log(data)
   this.api.addSignup(data).subscribe(
    (response:any)=>{
      console.log(response)
      if (response.status=="success") {
        alert("Rgistered successfully")
        this.name=""
        this.aadharNo=""
        this.address=""
        this.pincode=""
        this.dateOfBirth=""
        this.email=""
        this.phonenumber=""
        this.username=""
        this.password=""
        
      } else {
        alert("Not registered")
      }
    }
   )
  }
}

import { Component } from '@angular/core';

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
  confirmpassword=""
 
  readValues=()=>
  {
   let data:any={"name":this.name,"aadharNo":this.aadharNo,"address":this.address,"pincode":this.pincode,"dateOfBirth":this.dateOfBirth,"email":this.email,"phonenumber":this.phonenumber,"username":this.username,"password":this.password," confirmpassword":this.confirmpassword}
   console.log(data)
  }
}

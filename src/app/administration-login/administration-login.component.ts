import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-administration-login',
  templateUrl: './administration-login.component.html',
  styleUrls: ['./administration-login.component.css']
})
export class AdministrationLoginComponent {
  username=""
  password=""
 
  constructor(private route:Router){}
 
 
 readValues=()=>
 {
   let data:any={"username":this.username,"password":this.password}
   console.log(data)
 
 
   if (this.username=="admin"&&this.password=="12345") {
     
     this.route.navigate(['/entry'])
   } else {
     alert("invalid credential")
     
   }
 
   }
}

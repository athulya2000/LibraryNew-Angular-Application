import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent {
  
  username=""
  password=""

  Search:any=[]

  constructor(private api:ApiService,private route:Router){}

  readValues=()=>{
    let login:any={"username":this.username,"password":this.password}
    console.log(login)
    this.api.userLogin(login).subscribe(
      (response:any)=>{

        console.log(response)
        if (response.length==0) {
          alert("Invalid username or passsword")
          this.username=""
          this.password=""
        } else {
          this.Search=response
          this.route.navigate(['/view'])
        }
      }
    )

  }
}

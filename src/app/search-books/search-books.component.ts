import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-search-books',
  templateUrl: './search-books.component.html',
  styleUrls: ['./search-books.component.css']
})
export class SearchBooksComponent {

  title=""

  SearchData:any=[]

  constructor(private api:ApiService,private route:Router){}

  readValues=()=>{
    let data:any={"title":this.title}
    console.log(data)
    this.api.searchBook(data).subscribe(
      (response:any)=>{
        console.log(response)
        if (response.length==0) {
          alert("Book not found")
        } else {
          this.SearchData=response
        }
      }
    )
  }
deleteBtnClick=(id:any)=>{
  let data:any={"id":id }
    console.log(data)
    this.api.deleteBook(data).subscribe(
      (response:any)=>{
        console.log(response)
        if (response.status=="success") {
          alert("books deleted successfully")
          this.SearchData=[]
          this.title=""
          this.route.navigate(['/search'])
        } else {
          alert("Book not found")
          this.title=""
        }
      }
    )
   
    
}

}

import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-books-entry',
  templateUrl: './books-entry.component.html',
  styleUrls: ['./books-entry.component.css']
})
export class BooksEntryComponent {
  title=""
  author=""
  price=""
  image=""

  constructor(private api:ApiService){}

  readValues=()=>
  {
    let books:any= {"title":this.title,"author":this.author,"price":this.price,"image":this.image}
      
    
    console.log(books)
    this.api.booksEntry(books).subscribe(
      (response:any)=>{
        console.log(response)
        if (response.Status=="success") {
          alert("Book added successfully")
          this.title=""
          this.author=""
          this.image=""
          this.price=""
        } 
        else {
          
        }
      }
    )
  }

}



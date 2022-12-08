import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-viewall-books',
  templateUrl: './viewall-books.component.html',
  styleUrls: ['./viewall-books.component.css']
})
export class ViewallBooksComponent {
  
  constructor(private api:ApiService){
    api.fetchBook().subscribe(
      (response)=>{
        this.books=response
      }
    )
  }

  books:any=[]
  
}

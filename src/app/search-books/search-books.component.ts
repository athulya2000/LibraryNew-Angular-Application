import { Component } from '@angular/core';

@Component({
  selector: 'app-search-books',
  templateUrl: './search-books.component.html',
  styleUrls: ['./search-books.component.css']
})
export class SearchBooksComponent {

  title=""

  readValues=()=>{
    let data:any={"title":this.title}
    console.log(data)
  }
}

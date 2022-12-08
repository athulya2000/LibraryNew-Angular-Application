import { Component } from '@angular/core';

@Component({
  selector: 'app-books-entry',
  templateUrl: './books-entry.component.html',
  styleUrls: ['./books-entry.component.css']
})
export class BooksEntryComponent {
  title=""
  image=""
  author=""
  price=""
  Language=""
  Description=""
  Publisher=""
  Distributor=""
  ReleasedYear=""

  readValues=()=>
  {
    let books:any= {
      "titie":this.title,
      "image":this.image,
      "author":this.author,
      "price":this.price,
      "Language":this.Language,
      "Description":this.Description,
      " Publisher":this.Publisher,
      " Distributor":this.Distributor,
      " ReleasedYear":this.ReleasedYear
    }
    console.log(books)
  }

}



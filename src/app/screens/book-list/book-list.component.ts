import { BookService } from './../../services/book.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
  books:any[] = [];

  constructor(private BookService:BookService) { }

  ngOnInit(): void {
    this.BookService.getAll().subscribe(data => {
      this.books = data;
    }
      )
  }

}

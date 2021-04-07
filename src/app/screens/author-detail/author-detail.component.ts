import { AuthorService } from './../../services/author.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-author-detail',
  templateUrl: './author-detail.component.html',
  styleUrls: ['./author-detail.component.css']
})
export class AuthorDetailComponent implements OnInit {
  authorId: string = "";
  author : any;
  constructor(private route: ActivatedRoute,
             private bookService:AuthorService
             ) { }


  async ngOnInit() {
    await this.route.params.subscribe(params => {
      this.authorId = params['authorId'];
    });

    await this.bookService.findById(this.authorId).subscribe(data => {
      console.log(data.books);
      this.author = data.books;
      console.log(this.author);
    });

  }

}

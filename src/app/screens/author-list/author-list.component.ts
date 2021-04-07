import { AuthorService } from './../../services/author.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-author-list',
  templateUrl: './author-list.component.html',
  styleUrls: ['./author-list.component.css']
})
export class AuthorListComponent implements OnInit {
  author:any[] = [];

  constructor(private  AuthorService: AuthorService) { }

  ngOnInit(): void {
    this.AuthorService.getAll().subscribe(data => {
      this.author = data;
  })}

}

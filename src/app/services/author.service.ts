import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthorService {
  private API_URL = "http://localhost:3000/authors";
  constructor(private http:HttpClient){}
  getAll():Observable<any>{
    let requestApi = `${this.API_URL}`;
    return this.http.get<any>(requestApi);
  }
  
  findById(authorId:string): Observable<any>{
    let requestApi = `${this.API_URL}/${authorId}?_embed=books`;
    return this.http.get<any>(requestApi);
   }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private _HttpClient:HttpClient) { }
  getAllPosts(): Observable<any> {
    return this._HttpClient.get(
      'https://dev.to/api/articles'
    );
  }
}

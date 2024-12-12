import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BbcArticlesService {
  private apiUrl = 'http://localhost:5000/api/bbc-articles';

  constructor(private http: HttpClient) {}

  getArticles(): Observable<any[]> {
    return this.http.get<unknown[]>(this.apiUrl);
  }
}

import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { Article } from '../models/article.model';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  private apiUrl = 'http://localhost:3000/api/articles';

  constructor(private http: HttpClient) {}

  getArticles(query?: string): Observable<Article[]> {
    let params = new HttpParams();
    if (query && query.trim() !== '') {
      params = params.set('q', query.trim());
    }
    return this.http.get<Article[]>(this.apiUrl, { params });
  }

  changeQuantity(articleId: number, changeInQuantity: number): Observable<Article> {
    return this.http.patch<Article>(`${this.apiUrl}/${articleId}`, { changeInQuantity });
  }

  create(article: Article): Observable<any> {
    return this.http.post<Article>(this.apiUrl, article);
  }

}

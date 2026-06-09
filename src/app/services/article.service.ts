import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { Article } from '../models/article.model';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  private articles: Article[] = [
    {
      id: 1,
      name: 'Nike Air Max 90',
      imageUrl: 'assets/images/nike-airmax90.jpg',
      price: 109.99,
      isOnSale: true,
      quantityInCart: 0
    },
    {
      id: 2,
      name: 'Adidas Ultraboost 22',
      imageUrl: 'assets/images/adidas-ultraboost22.jpg',
      price: 129.99,
      isOnSale: true,
      quantityInCart: 0
    },
    {
      id: 3,
      name: 'Puma Smash V2',
      imageUrl: 'assets/images/puma-smashv2.jpg',
      price: 89.99,
      isOnSale: false,
      quantityInCart: 0
    }
  ];

  private articlesSubject = new BehaviorSubject<Article[]>(this.articles);

  getArticles(): Observable<Article[]> {
    return this.articlesSubject.asObservable();
  }

  changeQuantity(articleID: number, changeInQuantity: number): Observable <Article> {
    const article = this.articles.find(a => a.id === articleID);
    if (!article) {
      throw new Error(`Article ${articleID} not found`);
    }
    article.quantityInCart = changeInQuantity;
    this.articlesSubject.next([...this.articles]);
    return of(article);
  }

  create(article: Article): Observable<any> {
    const newArticle = { ...article, id: Date.now() };
    this.articles = [...this.articles, newArticle];
    this.articlesSubject.next(this.articles);
    return of(newArticle);
  }

}

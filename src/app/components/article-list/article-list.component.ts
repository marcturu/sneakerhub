import { Component } from '@angular/core';
import { Article, ArticleQuantityChange } from '../../models/article.model';

@Component({
  selector: 'app-article-list',
  template: `
    <div class="container">
      <h1 class="list-title">Nueva colección</h1>
      <div class="article-grid">
        <app-article-item
          *ngFor="let article of articles"
          [article]="article"
          (quantityChange)="onQuantityChange($event)">
        </app-article-item>
      </div>
    </div>
  `,
  styles: [`
    .list-title {
      font-size: 2rem;
      color: var(--color-primary);
      margin-bottom: var(--spacing-md);
    }
    .article-grid {
      display: flex;
      flex-wrap: wrap;
      gap: var(--spacing-md);
    }
  `]
})
export class ArticleListComponent {

  articles: Article[] = [
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

  onQuantityChange(changes: ArticleQuantityChange): void {
    const article = this.articles.find(a => a.id === changes.article.id);
    if (article) {
      article.quantityInCart = changes.quantity;
    }
  }
}

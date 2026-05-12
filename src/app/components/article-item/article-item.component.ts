import { Component } from '@angular/core';
import { Article } from '../../models/article.model';

@Component({
  selector: 'app-article-item',
  templateUrl: './article-item.component.html',
  styleUrl: './article-item.component.css'
})
export class ArticleItemComponent {
  article: Article = {
    name: 'Nike Air Max 90',
    imageUrl: 'assets/images/nike-airmax90.jpg',
    price: 109.99,
    isOnSale: true,
    quantityInCart: 0
  };

  increment(): void {
    this.article.quantityInCart++;
  }

  decrement(): void {
    if (this.article.quantityInCart > 0) {
      this.article.quantityInCart--;

    }
  }
}

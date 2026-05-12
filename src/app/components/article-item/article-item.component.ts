import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { Article, ArticleQuantityChange } from '../../models/article.model';

@Component({
  selector: 'app-article-item',
  templateUrl: './article-item.component.html',
  styleUrl: './article-item.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ArticleItemComponent {
  @Input() article!: Article;
  @Output() quantityChange = new EventEmitter<ArticleQuantityChange>();

  increment(): void {
    this.quantityChange.emit({
      article: this.article,
      quantity: this.article.quantityInCart + 1
    });
  }

  decrement(): void {
    if (this.article.quantityInCart > 0) {
      this.quantityChange.emit({
        article: this.article,
        quantity: this.article.quantityInCart - 1
      });
    }
  }
}

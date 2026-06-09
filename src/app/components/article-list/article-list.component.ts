import { Component, OnInit } from '@angular/core';
import { Article, ArticleQuantityChange } from '../../models/article.model';
import { ArticleService } from '../../services/article.service';
import { Observable } from 'rxjs/internal/Observable';

@Component({
  selector: 'app-article-list',
  template: `
    <div class="container py-4">
      <h1 class="list-title mb-2">Nueva colección</h1>
      <div class="row g-4">
        <div
          class="col-12 col-sm-6 col-lg-4"
          *ngFor="let article of articles$ | async">
          <app-article-item
            [article]="article"
            (quantityChange)="onQuantityChange($event)">
          </app-article-item>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .list-title {
      font-size: 2rem;
    }
  `]
})
export class ArticleListComponent implements OnInit {

  articles$!: Observable<Article[]>;

  constructor(private articleService: ArticleService) { }

  ngOnInit(): void {
    this.articles$ = this.articleService.getArticles();
  }

  onQuantityChange(change: ArticleQuantityChange): void {
    this.articleService.changeQuantity(change.article.id, change.quantity).subscribe();
  }
}

import { Component, OnInit } from '@angular/core';
import { Article, ArticleQuantityChange } from '../../models/article.model';
import { ArticleService } from '../../services/article.service';
import { Observable, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap, startWith } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-article-list',
  template: `
  <app-hero *ngIf="router.url === '/article/list'"></app-hero>

    <div class="container py-4">
      <h1 class="list-title mb-2">New Arrivals</h1>
      <div class="search-wrapper">
        <input
          type="text"
          class="form-control search-input"
          placeholder="Search sneakers..."
          (input)="onSearch($event)">
      </div>
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

    .search-wrapper {
      margin-bottom: var(--spacing-md);
      max-width: 400px;
    }

    .search-input {
      font-family: var(--font-secondary);
      border-color: var(--color-border);
      border-radius: var(--border-radius-sm);
    }

    .search-input:focus {
      border-color: var(--color-accent);
      box-shadow: 0 0 0 3px rgba(59,130,246,0.15);
    }
  `]
})
export class ArticleListComponent implements OnInit {

  articles$!: Observable<Article[]>;
  private searchSubject = new Subject<string>();

  constructor(private articleService: ArticleService, public router: Router) { }

  ngOnInit(): void {
    this.articles$ = this.searchSubject.pipe(
      startWith(''),
      debounceTime(300),
      distinctUntilChanged(),
      switchMap(query => this.articleService.getArticles(query))
    );
  }

  onSearch(event: Event): void {
    const query = (event.target as HTMLInputElement).value;
    this.searchSubject.next(query);
  }

  onQuantityChange(change: ArticleQuantityChange): void {
    this.articleService.changeQuantity(change.article.id, change.delta)
      .subscribe();
  }
}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Article } from '../../models/article.model';
import { NameArticleValidator } from '../../validators/name-article.validator';
import { ArticleService } from '../../services/article.service';

@Component({
  selector: 'app-article-new-reactive',
  templateUrl: './article-new-reactive.component.html',
  styleUrl: './article-new-reactive.component.css'
})
export class ArticleNewReactiveComponent implements OnInit {
  articleForm!: FormGroup;

  urlPattern = /^(?!.*\.\.)https?:\/\/[a-zA-Z0-9][a-zA-Z0-9\-._~:/?#[\]@!$&'()*+,;=%]*\.[a-zA-Z]{2,3}$/;

  constructor(private fb: FormBuilder, private articleService: ArticleService) { }

  ngOnInit(): void {
    this.articleForm = this.fb.group({
      name: ['', [Validators.required, NameArticleValidator]],
      price: [null, [Validators.required, Validators.min(0.1)]],
      imageUrl: ['', [Validators.required, Validators.pattern(this.urlPattern)]],
      isOnSale: [false]
    });
  }

  get name() {
    return this.articleForm.get('name');
  }
  get price() {
    return this.articleForm.get('price');
  }
  get imageUrl() {
    return this.articleForm.get('imageUrl');
  }

  onSubmit(): void {
  if (this.articleForm.valid) {
    const newArticle = {
      //id: Date.now(), // ID asignado en el servidor
      name: this.articleForm.value.name,
      imageUrl: this.articleForm.value.imageUrl,
      price: this.articleForm.value.price,
      isOnSale: this.articleForm.value.isOnSale ?? false,
      //quantityInCart: 0 //  0 por defecto en el servidor
    };
    this.articleService.create(newArticle as Article).subscribe({
      next: (article) => {
        console.log('Artículo creado en servidor:', article);
        this.articleForm.reset();
      },
      error: (err) => console.error('Error al crear artículo:', err)
    });
  } else {
    this.articleForm.markAllAsTouched();
  }
}
}

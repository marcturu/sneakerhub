import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Article } from '../../models/article.model';

@Component({
  selector: 'app-article-new-template',
  templateUrl: './article-new-template.component.html',
  styleUrl: './article-new-template.component.css'
})
export class ArticleNewTemplateComponent {
    urlPattern = /^(?!.*\.\.)https?:\/\/[a-zA-Z0-9][a-zA-Z0-9\-._~:/?#[\]@!$&'()*+,;=%]*\.[a-zA-Z]{2,3}$/;

    onSubmit(form: NgForm): void {
      if (form.valid) {
        const newArticle: Article = {
          id: Date.now(),
          name: form.value.article.name,
          price: form.value.article.price,
          imageUrl: form.value.article.imageUrl,
          isOnSale: form.value.article.isOnSale ?? false,
          quantityInCart: 0
        };
      console.log('Nuevo artículo creado:', newArticle);
      form.resetForm();
    }
  }
}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ArticleRoutingModule } from './article-routing.module';
import { ArticleListComponent } from '../../components/article-list/article-list.component';
import { ArticleNewReactiveComponent } from '../../components/article-new-reactive/article-new-reactive.component';
import { ArticleNewTemplateComponent } from '../../components/article-new-template/article-new-template.component';
import { ArticleDetailComponent } from '../../components/article-detail/article-detail.component';
import { ArticleItemComponent } from '../../components/article-item/article-item.component';
import { HeroComponent } from '../../components/hero/hero.component';
import { DefaultImagePipe } from '../../pipes/default-image.pipe';
import { PricePipe } from '../../pipes/price.pipe';


@NgModule({
  declarations: [
    ArticleListComponent,
    ArticleNewReactiveComponent,
    ArticleNewTemplateComponent,
    ArticleDetailComponent,
    ArticleItemComponent,
    HeroComponent,
    DefaultImagePipe,
    PricePipe
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    ArticleRoutingModule
  ]
})
export class ArticleModule {}
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ArticleItemComponent } from './components/article-item/article-item.component';
import { ArticleListComponent } from './components/article-list/article-list.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ArticleNewTemplateComponent } from './components/article-new-template/article-new-template.component';
import { ArticleNewReactiveComponent } from './components/article-new-reactive/article-new-reactive.component';
import { HeroComponent } from './components/hero/hero.component';
import { DefaultImagePipe } from './pipes/default-image.pipe';
import { PricePipe } from './pipes/price.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ArticleItemComponent,
    ArticleListComponent,
    NavbarComponent,
    ArticleNewTemplateComponent,
    ArticleNewReactiveComponent,
    HeroComponent,
    DefaultImagePipe,
    PricePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticleListComponent } from '../../components/article-list/article-list.component';
import { ArticleNewReactiveComponent } from '../../components/article-new-reactive/article-new-reactive.component';
import { ArticleNewTemplateComponent } from '../../components/article-new-template/article-new-template.component';
import { ArticleDetailComponent } from '../../components/article-detail/article-detail.component';
import { AuthGuard } from '../../guards/auth.guard';

const routes: Routes = [
  { path: 'list', component: ArticleListComponent },
  { path: 'create', component: ArticleNewReactiveComponent, canActivate: [AuthGuard] },
  { path: 'create-template', component: ArticleNewTemplateComponent },
  { path: ':id', component: ArticleDetailComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ArticleRoutingModule { }
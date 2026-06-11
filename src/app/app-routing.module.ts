import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: '', loadChildren: () => import('./modules/user/user.module').then(m => m.UserModule) },
  { path: 'article', loadChildren: () => import('./modules/article/article.module').then(m => m.ArticleModule) },
  { path: '**', redirectTo: 'login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
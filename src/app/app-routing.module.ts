import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcessoGuard } from '@shared/guards/acesso.guard';
import { ContatoComponent } from './contato/contato.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then((m) => m.HomeModule),
    canActivate: [AcessoGuard]
  },
  {
    path: 'listagem-produto',
    loadChildren: () =>
      import('./listagem-produto/listagem-produto.module').then(
        (m) => m.ListagemProdutoModule
      ),
    canActivate: [AcessoGuard]
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'contato',
    component: ContatoComponent,
    canActivate: [AcessoGuard]
  },
  { path: '**', redirectTo: 'home' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'enabled',
      relativeLinkResolution: 'legacy',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}

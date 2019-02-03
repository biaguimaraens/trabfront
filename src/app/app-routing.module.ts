import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NavbarComponent } from './navbar/navbar.component';
import { SobrenosComponent } from './pages/sobrenos/sobrenos.component';
import { CarrinhoComponent } from './pages/carrinho/carrinho.component';
import { ContatoComponent } from './pages/contato/contato.component';
import { HomeComponent } from './pages/home/home.component';
import { ConstrucaoComponent } from './pages/construcao/construcao.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'sobrenos', component: SobrenosComponent },
  { path: 'carrinho', component: CarrinhoComponent },
  { path: 'contato', component: ContatoComponent },
  { path: 'construcao', component: ConstrucaoComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

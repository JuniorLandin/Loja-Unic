import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContatoComponent } from './pages/contato/contato.component';
import { GuitarrasComponent } from './pages/guitarras/guitarras.component';
import { VioloesComponent } from './pages/violoes/violoes.component';
import { LoginComponent } from './pages/login/login.component';
import { RecuperarSenhaComponent } from './pages/login/recuperar-senha/recuperar-senha.component';
import { CadastrarComponent } from './pages/login/cadastrar/cadastrar.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  {path: 'contato', component: ContatoComponent},
  {path: 'guitarras', component: GuitarrasComponent},
  {path: 'violoes', component: VioloesComponent},
  {path: 'login', component: LoginComponent},
  {path: 'recuperar-senha', component: RecuperarSenhaComponent},
  {path: 'cadastrar', component: CadastrarComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

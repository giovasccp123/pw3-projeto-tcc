import { CadastroViagemComponent } from './cadastro-viagem/cadastro-viagem.component';
import { DetalhesViagemComponent } from './detalhes-viagem/detalhes-viagem.component';
import { ExclusaoViagemComponent } from './exclusao-viagem/exclusao-viagem.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path:'', component : HomeComponent},
  {path:'cadastro',component : CadastroViagemComponent},
  {path:'detalhes/:id',component : DetalhesViagemComponent},
  {path:'excluir/:id',component : ExclusaoViagemComponent},
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]

})
export class AppRoutingModule { }

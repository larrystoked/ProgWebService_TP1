import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EquipeNFLComponent } from './equipe-nfl/equipe-nfl.component';

const routes: Routes = [
  { path: 'equipe-nfl', component: EquipeNFLComponent }, // Définissez une route pour EquipeNFLComponent
  // Ajoutez d'autres routes si nécessaire
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

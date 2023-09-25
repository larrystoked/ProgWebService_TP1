import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EquipeNFLComponent } from './equipe-nfl/equipe-nfl.component';
import { RosterComponent } from './roster/roster.component'; // Importez le composant RosterComponent

const routes: Routes = [
  // Autres routes...
  { path: 'roster/:equipe', component: RosterComponent },
  { path: 'equipe-nfl', component: EquipeNFLComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

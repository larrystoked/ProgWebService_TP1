import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EquipeNFLComponent } from './equipe-nfl/equipe-nfl.component';
import { RosterComponent } from './roster/roster.component'; 
import { HoraireComponent } from './horaire/horaire.component';


const routes: Routes = [
  // Autres routes...
  { path: 'roster/:equipe', component: RosterComponent },
  { path: 'equipe-nfl', component: EquipeNFLComponent },
  { path: 'horaire/:equipe', component: HoraireComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

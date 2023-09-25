import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EquipeNFLComponent } from './equipe-nfl/equipe-nfl.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { RosterComponent } from './roster/roster.component';
import { HoraireComponent } from './horaire/horaire.component';

@NgModule({
  declarations: [
    AppComponent,
    EquipeNFLComponent,
    RosterComponent,
    HoraireComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

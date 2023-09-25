import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { Equipe } from './equipe.model'; 

@Component({
  selector: 'app-equipe-nfl',
  templateUrl: './equipe-nfl.component.html',
  styleUrls: ['./equipe-nfl.component.css']
})
export class EquipeNFLComponent implements OnInit {
  equipesNFL: Equipe[] = []; 
  equipeSelectionnee: string | undefined;

  constructor(private http: HttpClient, private router: Router) {
    const equipesAjoutees = localStorage.getItem('equipes');
    this.equipesNFL = equipesAjoutees ? JSON.parse(equipesAjoutees) : [];
  }
  

  ngOnInit(): void {
    const apiUrl = 'https://tank01-nfl-live-in-game-real-time-statistics-nfl.p.rapidapi.com/getNFLTeams?rosters=true&schedules=true&topPerformers=true&teamStats=true';

    const headers = new HttpHeaders({
      'X-RapidAPI-Key': 'c14d3079d1msh0af830eb990e30cp13d17cjsnf3f8aa925a92',
      'X-RapidAPI-Host': 'tank01-nfl-live-in-game-real-time-statistics-nfl.p.rapidapi.com',
    });

    this.http.get<any>(apiUrl, { headers }).subscribe(
      (response) => {
        this.equipesNFL = response.body;
        console.log(this.equipesNFL); 
      },
      (error) => {
        console.error('Erreur lors de la récupération des équipes NFL :', error);
      }
    );
  }

  onSubmit() {
    console.log('Équipe sélectionnée :', this.equipeSelectionnee);
  }

  getEquipeVille(nomEquipe: string): string {
    const equipe = this.equipesNFL.find(e => e.teamAbv === nomEquipe);
    return equipe ? equipe.teamCity : '';
  }

  getEquipeLogo(teamAbv: string): string {
    return `./assets/logos/${teamAbv}.webp`; 
  }

  afficherRoster() {
    if (this.equipeSelectionnee) {
      this.router.navigate(['/roster', this.equipeSelectionnee]);
    }
  }

  afficherHoraire() {
    if (this.equipeSelectionnee) {
      this.router.navigate(['/horaire', this.equipeSelectionnee]);
    }
  }
  
}
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';

interface HoraireItem {
  gameWeek: string;
  home: string;
  away: string;
  
}

@Component({
  selector: 'app-horaire',
  templateUrl: './horaire.component.html',
  styleUrls: ['./horaire.component.css']
})
export class HoraireComponent implements OnInit {
  equipeSelectionnee: string | undefined;
  horaire: { body: { schedule: HoraireItem[] } } = { body: { schedule: [] } };

  

  constructor(private route: ActivatedRoute, private http: HttpClient) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.equipeSelectionnee = params['equipe'];
      console.log('Équipe sélectionnée :', this.equipeSelectionnee);
      this.chargerHoraire();
    });
  }

  chargerHoraire() {
    const apiUrl = `https://tank01-nfl-live-in-game-real-time-statistics-nfl.p.rapidapi.com/getNFLTeamSchedule?teamAbv=${this.equipeSelectionnee}&season=2023`;
  
    const headers = new HttpHeaders({
      'X-RapidAPI-Key': 'c14d3079d1msh0af830eb990e30cp13d17cjsnf3f8aa925a92',
      'X-RapidAPI-Host': 'tank01-nfl-live-in-game-real-time-statistics-nfl.p.rapidapi.com',
    });
  
    this.http.get<any>(apiUrl, { headers }).subscribe(
      (data) => {
        this.horaire = data; 
        console.log(this.horaire);
      },
      (error) => {
        console.error('Erreur lors de la récupération de l\'horaire :', error);
      }
    );
  }
  
}

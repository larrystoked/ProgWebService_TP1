import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';

interface Joueur {
  jerseyNum: string;
  pos: string;
  espnName: string;
  school: string;
  age: string;
    height: string;
    weight: string;
  stats: {
    gamesPlayed: string;
    teamID: string;
    espnHeadshot: string;
  };
  
}

@Component({
  selector: 'app-roster',
  templateUrl: './roster.component.html',
  styleUrls: ['./roster.component.css']
})
export class RosterComponent implements OnInit {
  equipeSelectionnee: string | undefined;
  joueurs: { body: { roster: Joueur[] } } = { body: { roster: [] } };

  constructor(private route: ActivatedRoute, private http: HttpClient) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.equipeSelectionnee = params['equipe'];
      console.log('Équipe sélectionnée :', this.equipeSelectionnee);
      this.chargerRoster();
    });
  }

  chargerRoster() {
    const apiUrl = `https://tank01-nfl-live-in-game-real-time-statistics-nfl.p.rapidapi.com/getNFLTeamRoster?teamAbv=${this.equipeSelectionnee}&getStats=true`;

    const headers = new HttpHeaders({
      'X-RapidAPI-Key': 'c14d3079d1msh0af830eb990e30cp13d17cjsnf3f8aa925a92',
      'X-RapidAPI-Host': 'tank01-nfl-live-in-game-real-time-statistics-nfl.p.rapidapi.com',
    });

    this.http.get<any>(apiUrl, { headers }).subscribe(
      (data) => {
        this.joueurs = data;
        console.log(this.joueurs);
      },
      (error) => {
        console.error('Erreur lors de la récupération du roster :', error);
      }
    );
  }
}

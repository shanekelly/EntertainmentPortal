import { Component, OnInit } from '@angular/core';
import { Genre } from '../genre';
import moviesData from '../../assets/data/movie.json';

@Component({
  selector: 'app-action',
  templateUrl: './action.component.html',
  styleUrls: ['./action.component.css']
})
export class ActionComponent implements OnInit {
  genre!: Genre;

  constructor() { }

  ngOnInit(): void {
    this.genre = new Genre(
      moviesData.action.title,
      moviesData.action.description,
      moviesData.action.movies
    );
  }
}

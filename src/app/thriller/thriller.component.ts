import { Component, OnInit } from '@angular/core';
import { Genre } from '../genre';
import moviesData from '../../assets/data/movie.json';

@Component({
  selector: 'app-thriller',
  templateUrl: './thriller.component.html',
  styleUrls: ['./thriller.component.css']
})
export class ThrillerComponent implements OnInit {
  genre!: Genre;

  constructor() { }

  ngOnInit(): void {
    this.genre = new Genre(
      moviesData.thriller.title,
      moviesData.thriller.description,
      moviesData.thriller.movies
    );
  }
}

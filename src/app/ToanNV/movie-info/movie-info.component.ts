import { Component, OnInit, Input } from '@angular/core';
import { Movie } from 'src/models/movie';

@Component({
  selector: 'app-movie-info',
  templateUrl: './movie-info.component.html',
  styleUrls: ['./movie-info.component.css']
})
export class MovieInfoComponent implements OnInit {

  @Input() movie: Movie;

  constructor() { }

  ngOnInit() {
  }

}

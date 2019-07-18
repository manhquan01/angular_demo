import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/models/movie';
// import { MovieService } from '../movie.service';
import { MovieService } from 'src/app/movie.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  movies: Movie[] = [];


  constructor(private movieService: MovieService) { }

  ngOnInit() {
    this.getMovies();
  }

  getMovies(): void {
    this.movieService.getMovies().subscribe(movies => this.movies = movies.slice(1, 5));
  }

}

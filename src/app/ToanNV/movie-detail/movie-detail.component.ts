import { Component, OnInit, Input } from '@angular/core';
import { Movie } from 'src/models/movie';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { MovieService } from 'src/app/movie.service';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit {
  movies: Movie[];
  @Input() movie: Movie;
  constructor(
    private route: ActivatedRoute,
    private movieService: MovieService,
    private location: Location
  ) { }

  ngOnInit() {
    this.getMovieFromRoute();
  }

  getMovieFromRoute(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    console.log(this.route.snapshot.paramMap);
    this.movieService.getMovieFromId(id).subscribe(movie => this.movie = movie);
    // subscribe: quan sát khi nào có kết quả thì gán vào hàm này
  }
  goBack(): void {
    this.location.back();
  }
  save(): void {
    this.movieService.updateMovie(this.movie).subscribe(() => this.goBack());
    // sau khi update xong thì quay lại list
  }
  delete(movieId: number): void {
    this.movieService.deleteMovie(movieId).subscribe(_ => this.goBack() );
  }
}

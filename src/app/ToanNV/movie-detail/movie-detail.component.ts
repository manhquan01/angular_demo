import { Component, OnInit, Input } from '@angular/core';
import { Movie } from 'src/models/movie';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { MovieService } from '../../movie.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit {
  movies: Movie[];
  movieForm;
  @Input() enabled = true;
  @Input() movie: Movie;
  constructor(
    public movieService: MovieService,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  editMovie: Movie;

  ngOnInit() {
    this.getMovieFromRoute();
    // this.movieForm = new FormGroup({
    //   name : new FormControl(this.movie.name, [
    //     Validators.required,
    //     Validators.minLength(3),
    //     Validators.maxLength(20),
    //     // forbiddenNameValidator(/bob/i)
    //   ]),
    //   year: new FormControl(this.movie.name, [
    //     Validators.required,
    //   ])
    // });
  }
  // get name() { return this.movieForm.get('name'); }
  // get year() { return this.movieForm.get('year'); }
  
  getMovieFromRoute(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    // console.log(this.route.snapshot.paramMap);
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

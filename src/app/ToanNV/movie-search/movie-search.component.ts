import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Movie } from 'src/app/ToanNV/models/movie';
import { MovieService } from 'src/app/movie.service';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-movie-search',
  templateUrl: './movie-search.component.html',
  styleUrls: ['./movie-search.component.css']
})
export class MovieSearchComponent implements OnInit {
//là 1 object  chạy trên 1 tiến trình riêng đe khi đang gọi lên server lấy kết quả thì vẫn gõ được
  movies$: Observable<Movie[]>;

  //đối tượng để quản lý strim
  private searchedSubject = new Subject<string>();

  //trích xuất movieSerrvice
  constructor(private movieService: MovieService) { }
  search(searchedString: string): void{
    console.log(`searchedString = ${searchedString}`);
    this.searchedSubject.next(searchedString); //khi gõ 1 kí tự vào thì kí tự mới sẽ dc đẩy dần vào trong strim để xly bất đồng bộ
  }

  ngOnInit() {
    this.movies$ = this.searchedSubject.pipe(
      debounceTime(300), //khoảng thời gian giữa 2 lần bấm
      distinctUntilChanged(), //khi gõ 2 tring giống nhau thì nó không lấy dl nữa
      //đổ dữ liệu vào trong search movie
      switchMap((searchedString: string) => this.movieService.searchMovies(searchedString)),
    );
  }

}

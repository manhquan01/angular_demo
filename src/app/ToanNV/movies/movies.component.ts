import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/movie.service';
import { Movie } from '../models/movie';
import { BookModel, BookInterface } from '../models/book.model';
// import { fakeMovies } from '../fake-movies';
// import { MovieService } from '../movie.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  
  // public cart: BookModel[] = [];

  // public book: BookModel = new BookModel(
  //     // tslint:disable-next-line: max-line-length
  //     'https://toidicodedao.files.wordpress.com/2019/07/which-programming-langauge-should-i-learn-first-itonlinelearning.jpg?w=672&h=372&crop=1',
  //     'Toan NV',
  //     'Hrllo hahahah kkk mini',
  //     15,
  //     0
  // );

  // addToCart(book: BookModel) {
  //   this.cart.push(book);
  // }

  constructor(private movieService: MovieService) {
    // ngay khi component khởi tạo thì thuộc tính movieService cũng được khởi tạo theo
  }
  // movies = fakeMovies;
  movies: Movie[];
  selectedMovie: Movie; // định nghĩa hàm khi con trỏ chạm vào list item
  getMoviesFromServices(): void { // lấy dữ liệu từ service đổ vào mảng movies
    // this.movies = this.movieService.getMovies();
    this.movieService.getMovies().subscribe(
      (updateMovies) => {
        this.movies = updateMovies;
        console.log(this.movies);
      }
    );
  }
  add(name: string, year: string ): void {
    if (Number.isNaN(Number(year)) || !name || Number(year) === 0) {
      alert(' Tên không được để trống, năm phải là dạng số');
      return;
    }
    const newMovie: Movie = new Movie();
    newMovie.name = name;
    newMovie.year = Number(year);
    this.movieService.addMovie(newMovie)
      .subscribe(insertedMovie => {
        this.movies.push(insertedMovie);
      });
  }
  delete(movieId: number): void {
    this.movieService.deleteMovie(movieId).subscribe(_ => { // quan sát khi nào có kết quả thì chui vào
      // khi nào có respon thì sử dụng hàm filter lọc ra nhũng bản ghi thỏa mãn điều kiện phía bên phải mũi tên để xóa phần tử trong mảng
      // tslint:disable-next-line: triple-equals
      this.movies = this.movies.filter(eachMovie => eachMovie.id != movieId);
    });
  }

  ngOnInit() {
    this.getMoviesFromServices();
  }
  onSelect(movie: Movie): void { // event
    this.selectedMovie = movie; // thuộc tính để lưu đối tượng ta select lại
    console.log(this.selectedMovie);
    // alert(this.selectedMovie);
  }

}

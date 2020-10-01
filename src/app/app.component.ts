import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Alura Pic';

  photos: Object[] = [];

  constructor(http: HttpClient) {
    console.log(http);

    http.get<Object[]>('http://127.0.0.1:3000/flavio/photos').subscribe(
      photos => this.photos = photos,
      err => console.log(err.message)
      );
  }
}

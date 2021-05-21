import { Component } from '@angular/core';
import { PhotoService } from './photos/photo/photo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  photos: Object[] = [];

  constructor(photoService: PhotoService) {

    // const observable = http.get('http://localhost:3000/flavio/photos')
    // observable.subscribe()
    photoService
      .listFromUser('flavio')
      .subscribe(photos => this.photos = photos);
  }
}

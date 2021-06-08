import { Component, OnInit } from '@angular/core';
import { PhotoService } from '../photo/photo.service';

@Component({
  selector: 'app-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.css']
})
export class PhotoListComponent implements OnInit {

  photos: any[] = [];

  constructor(private photoService: PhotoService) { }

  ngOnInit(): void {
    try {
      this.photoService
        .listFromUser('flavio')
        .subscribe(photos => this.photos = photos);
    } catch (error) {
      console.error(error);
      throw new Error('Method not implemented.');
    }
  }

}

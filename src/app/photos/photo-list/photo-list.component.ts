import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
// import { PhotoService } from '../photo/photo.service';
import { Photo } from '../photo/photo';

@Component({
  selector: 'app-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.css']
})
export class PhotoListComponent implements OnInit {

  photos: Photo[] = [];
  filter: string = '';

  constructor(
    // private photoService: PhotoService,
    private activatedRoute: ActivatedRoute
    ) { }

  ngOnInit(): void {
    // this.photos = this.activatedRoute.snapshot.data.photos;
    this.photos = this.activatedRoute.snapshot.data['photos'];

    // const userName = this.activatedRoute.snapshot.params.userName;

    // try {
    //   this.photoService
    //     .listFromUser(userName)
    //     .subscribe(photos => this.photos = photos);
    // } catch (error) {
    //   console.error(error);
    //   throw new Error('Method not implemented.');
    // }
  }

}

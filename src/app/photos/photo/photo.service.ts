import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Photo } from "./photo";

const API = 'http://127.0.0.1:3000';

@Injectable({ providedIn: 'root' })
export class PhotoService {
    constructor(private http: HttpClient) { }

    listFromUser(userName: string) {
        return this.http.get<Photo[]>(API + '/flavio/photos');
    }
}
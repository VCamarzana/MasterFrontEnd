import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Image } from '../interfaces/interfaces';
import { imagesArray } from '../../assets/img/img-array';

@Injectable({
  providedIn: 'root',
})
export class ImagesService {
  constructor() {}

  getImages(): Observable<Image[]> {
    return of(imagesArray);
  }
}

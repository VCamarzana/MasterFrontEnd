import { Component, HostListener, ViewChild } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { imagesArray } from '../../../assets/img/img-array';
import { DisplayedImg, Image } from '../../interfaces/interfaces';
import { ImagesService } from '../../services/images.service';
import { SlicePipe } from '../../pipes/slice.pipe';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

type Layout = 'largeImage' | 'smallImage' | 'default';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [
    NgFor,
    NgIf,
    SlicePipe,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
  ],
  templateUrl: 'gallery.component.html',
  styleUrl: 'gallery.component.scss',
})
export class GalleryComponent {
  imagesPerPage: number = 3;
  currentPage: number = 0;
  thumbnailWidth: number = 60;
  thumbnailHeight: number = 90;
  intervalId: any;
  playing: boolean = false;
  imgFolder = 'assets/img/';
  currentImg: DisplayedImg = {
    id: imagesArray[0].id,
    src: imagesArray[0].src,
    title: imagesArray[0].title,
    height: 400,
  };

  images: Image[] = imagesArray;
  totalImg: number = this.images.length;
  constructor(private imagesService: ImagesService) {}

  ngOnInit(): void {
    this.imagesService.getImages().subscribe((imagesArray) => {
      this.images;
      this.currentImg = {
        id: this.images[0].id,
        src: this.images[0].src,
        title: this.images[0].title,
        height: 400,
      };
    });

    this.resizeImg();
  }

  updateDisplayedImg(index: number) {
    this.currentImg.id = index + 1;
    this.currentImg.src = `${this.imgFolder}${index + 1}.jpg`;
  }

  selectImage(image: DisplayedImg) {
    this.currentImg = {
      id: image.id,
      src: image.src,
      title: image.title,
      height: 400,
    };
  }

  expand() {
    this.currentImg.height *= 1.1;
  }

  reduce() {
    this.currentImg.height *= 0.9;
  }

  nextPage() {
    const lastPage = Math.floor(this.totalImg / this.imagesPerPage) + 1;
    if (this.currentPage < lastPage) {
      this.currentPage += 1;
    }
  }
  prevPage() {
    if (this.currentPage > 0) {
      this.currentPage -= 1;
    }
  }

  next() {
    this.currentImg.id++;
    if (this.currentImg.id > this.totalImg) {
      this.currentImg.id = 1;
    }
    this.updateDisplayedImg(this.currentImg.id - 1);
  }

  prev() {
    this.currentImg.id--;
    if (this.currentImg.id < 1) {
      this.currentImg.id = this.totalImg;
    }
    this.updateDisplayedImg(this.currentImg.id - 1);
  }

  play() {
    if (!this.playing) {
      this.playing = true;
      this.intervalId = setInterval(() => {
        this.next();
      }, 2000);
    }
  }

  stop() {
    if (this.playing) {
      this.playing = false;
      clearInterval(this.intervalId);
    }
  }

  @HostListener('window:resize')
  resizeImg(): void {
    const baseHeight = window.innerHeight;
    let layoutType: Layout = 'default';
    if (baseHeight > 400) {
      layoutType = 'largeImage';
    } else if (baseHeight < 400) {
      layoutType = 'smallImage';
    }

    switch (layoutType) {
      case 'largeImage':
        this.currentImg.height = baseHeight * 0.45;
        break;
      case 'smallImage':
        this.currentImg.height = baseHeight * 0.3;
        break;
      default:
        this.currentImg.height = baseHeight * 0.4;
    }
  }
}

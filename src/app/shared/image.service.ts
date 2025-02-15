import { Injectable } from '@angular/core';
import { Image } from './models/image';

@Injectable({
  providedIn: 'root',
})
export class ImageService {
  private images: Image[] = [];

  constructor() {
    this.loadImages();
  }

  private loadImages() {
    for (let i = 1; i <= 30; i++) {
      this.images.push({
        id: i,
        description: `Image ${i}`,
        src: `assets/img/${i}.jpg`, // Corrected filename format
      });
    }
  }

  getImages(): Promise<Image[]> {
    return Promise.resolve(this.images);
  }
}

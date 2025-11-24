import { Injectable } from '@angular/core';

export interface CarouselImage {
  id: string;
  src: string;
}

@Injectable({
  providedIn: 'root'
})
export class ImageService {
  
  getImages(): Promise<CarouselImage[]> {
    // Replace this with your actual data source
    const images: CarouselImage[] = [
      { "id": "1", "src": "assets/img/1.jpg" },
      { "id": "2", "src": "assets/img/2.jpg" },
      { "id": "3", "src": "assets/img/3.jpg" },
      { "id": "4", "src": "assets/img/4.jpg" },
      { "id": "5", "src": "assets/img/5.jpg" },
      { "id": "6", "src": "assets/img/6.jpg" },
      { "id": "7", "src": "assets/img/7.jpg" },
      { "id": "8", "src": "assets/img/8.jpg" },
      { "id": "9", "src": "assets/img/9.jpg" },
      { "id": "10", "src": "assets/img/10.jpg" },
      { "id": "11", "src": "assets/img/11.jpg" },
      { "id": "12", "src": "assets/img/12.jpg" },
      { "id": "13", "src": "assets/img/13.jpg" },
      { "id": "14", "src": "assets/img/14.jpg" },
      { "id": "15", "src": "assets/img/15.jpg" },
      { "id": "16", "src": "assets/img/16.jpg" },
      { "id": "17", "src": "assets/img/17.jpg" },
      { "id": "18", "src": "assets/img/18.jpg" },
      { "id": "19", "src": "assets/img/19.jpg" },
      { "id": "20", "src": "assets/img/20.jpg" },
      { "id": "21", "src": "assets/img/21.jpg" },
      { "id": "22", "src": "assets/img/22.jpg" },
      { "id": "23", "src": "assets/img/23.jpg" },
      { "id": "24", "src": "assets/img/24.jpg" },
      { "id": "25", "src": "assets/img/25.jpg" },
      { "id": "26", "src": "assets/img/26.jpg" },
      { "id": "27", "src": "assets/img/27.jpg" },
      { "id": "28", "src": "assets/img/28.jpg" }
    ];

    return Promise.resolve(images);
  }
}
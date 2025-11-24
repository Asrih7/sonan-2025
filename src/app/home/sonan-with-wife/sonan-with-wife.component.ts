import { Component, Input, OnInit } from '@angular/core';
import { ImageService } from 'src/app/shared/image.service';
import { trigger, transition, useAnimation } from "@angular/animations";

import {
  AnimationType,
  fadeIn,
  fadeOut,
  slideIn,
  slideOut
} from "src/app/shared/carousel.animations";

interface CarouselImage {
  id: string;
  src: string;
}

@Component({
  selector: 'app-sonan-with-wife',
  templateUrl: './sonan-with-wife.component.html',
  styleUrls: ['./sonan-with-wife.component.scss'],
  animations: [
    trigger("slideAnimation", [
      transition("void => fade", [
        useAnimation(fadeIn, { params: { time: "600ms" } })
      ]),
      transition("fade => void", [
        useAnimation(fadeOut, { params: { time: "600ms" } })
      ]),
      transition("void => slide", [
        useAnimation(slideIn, { params: { time: "600ms" } })
      ]),
      transition("slide => void", [
        useAnimation(slideOut, { params: { time: "600ms" } })
      ])
    ])
  ]
})
export class SonanWithWifeComponent implements OnInit {
  images: CarouselImage[] = [];
  @Input() animationType = AnimationType.Fade;

  currentSlide = 0;
  private autoPlayInterval: any;

  constructor(private imageService: ImageService) {}

  ngOnInit(): void {
    this.loadImages();
    this.startAutoPlay();
  }

  ngOnDestroy(): void {
    this.stopAutoPlay();
  }

  onPreviousClick() {
    this.stopAutoPlay();
    const previous = this.currentSlide - 1;
    this.currentSlide = previous < 0 ? this.images.length - 1 : previous;
    this.startAutoPlay();
  }

  onNextClick() {
    this.stopAutoPlay();
    const next = this.currentSlide + 1;
    this.currentSlide = next === this.images.length ? 0 : next;
    this.startAutoPlay();
  }

  goToSlide(index: number): void {
    this.stopAutoPlay();
    this.currentSlide = index;
    this.startAutoPlay();
  }

  private startAutoPlay(): void {
    this.stopAutoPlay();
    this.autoPlayInterval = setInterval(() => {
      this.onNextClick();
    }, 5000); // Change slide every 5 seconds
  }

  private stopAutoPlay(): void {
    if (this.autoPlayInterval) {
      clearInterval(this.autoPlayInterval);
    }
  }

  private loadImages(): void {
    this.imageService.getImages().then((images: CarouselImage[]) => {
      this.images = images;
      console.log('Images loaded:', this.images);
    }).catch((error) => {
      console.error('Error loading images:', error);
    });
  }
}
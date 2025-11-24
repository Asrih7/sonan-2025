import { Component, OnInit } from '@angular/core';
import { trigger, transition, useAnimation } from "@angular/animations";

import {
  AnimationType,
  fadeIn,
  fadeOut,
  slideIn,
  slideOut
} from "src/app/shared/carousel.animations";

interface CarouselImage {
  id: number;
  src: string;
}

@Component({
  selector: 'app-forgettable-sonan',
  templateUrl: './forgettable-sonan.component.html',
  styleUrls: ['./forgettable-sonan.component.scss'],
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
export class ForgettableSonanComponent implements OnInit {
  images: CarouselImage[] = [
    { "id": 1, "src": "assets/img/SM1.jpg" },
    { "id": 2, "src": "assets/img/SM2.jpg" },
    { "id": 3, "src": "assets/img/SM3.jpg" },
    { "id": 4, "src": "assets/img/SM4.jpg" },
    { "id": 5, "src": "assets/img/SM5.jpg" },
    { "id": 6, "src": "assets/img/SM6.jpg" },
    { "id": 7, "src": "assets/img/SM7.jpg" },
    { "id": 8, "src": "assets/img/SM8.jpg" },
    { "id": 9, "src": "assets/img/SM9.jpg" },
    { "id": 10, "src": "assets/img/SM10.jpg" },
    { "id": 11, "src": "assets/img/SM11.jpg" },
    { "id": 12, "src": "assets/img/SM12.jpg" },
    { "id": 13, "src": "assets/img/SM13.jpg" },
    { "id": 14, "src": "assets/img/SM14.jpg" },
    { "id": 15, "src": "assets/img/SM15.jpg" },
    { "id": 16, "src": "assets/img/SM16.jpg" },
    { "id": 17, "src": "assets/img/SM17.jpg" },
    { "id": 18, "src": "assets/img/SM18.jpg" },
    { "id": 19, "src": "assets/img/SM19.jpg" },
    { "id": 20, "src": "assets/img/SM20.jpg" },
    { "id": 21, "src": "assets/img/SM21.jpg" },
    { "id": 22, "src": "assets/img/SM22.jpg" },
    { "id": 23, "src": "assets/img/SM23.jpg" },
    { "id": 24, "src": "assets/img/SM24.jpg" },
    { "id": 25, "src": "assets/img/SM25.jpg" },
    { "id": 26, "src": "assets/img/SM26.jpg" },
    { "id": 27, "src": "assets/img/SM27.jpg" },
    { "id": 28, "src": "assets/img/SM28.jpg" },
    { "id": 29, "src": "assets/img/SM29.jpg" },
    { "id": 30, "src": "assets/img/SM30.jpg" }
  ];

  animationType = AnimationType.Fade;
  currentSlide = 0;
  private autoPlayInterval: any;

  constructor() {}

  ngOnInit(): void {
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
}
import { Component, Input, OnInit } from '@angular/core';
import { ImageService } from 'src/app/shared/image.service';
import { Image } from 'src/app/shared/models/image';
import { trigger, transition, useAnimation } from "@angular/animations";

import {
  AnimationType,
  scaleIn,
  scaleOut,
  fadeIn,
  fadeOut,
  flipIn,
  flipOut,
  jackIn,
  jackOut
} from "src/app/shared/carousel.animations";
@Component({
  selector: 'app-sonan-with-wife',
  templateUrl: './sonan-with-wife.component.html',
  styleUrls: ['./sonan-with-wife.component.scss'],
  animations: [
    trigger("slideAnimation", [
      /* scale */
      transition("void => scale", [
        useAnimation(scaleIn, { params: { time: "500ms" } })
      ]),
      transition("scale => void", [
        useAnimation(scaleOut, { params: { time: "500ms" } })
      ]),

      /* fade */
      transition("void => fade", [
        useAnimation(fadeIn, { params: { time: "500ms" } })
      ]),
      transition("fade => void", [
        useAnimation(fadeOut, { params: { time: "500ms" } })
      ]),

      /* flip */
      transition("void => flip", [
        useAnimation(flipIn, { params: { time: "500ms" } })
      ]),
      transition("flip => void", [
        useAnimation(flipOut, { params: { time: "500ms" } })
      ]),

      /* JackInTheBox */
      transition("void => jackInTheBox", [
        useAnimation(jackIn, { params: { time: "700ms" } })
      ]),
      transition("jackInTheBox => void", [
        useAnimation(jackOut, { params: { time: "700ms" } })
      ])
    ])
  ]
})
export class SonanWithWifeComponent implements OnInit {
  images: Image[] = []; // Array to hold the images
  @Input() animationType = AnimationType.Scale;

  currentSlide = 0;
  constructor(private imageService: ImageService) {}

  ngOnInit(): void {
    this.loadImages(); // Load images when the component initializes
  }
  onPreviousClick() {
    const previous = this.currentSlide - 1;
    this.currentSlide = previous < 0 ? this.images.length - 1 : previous;
    console.log("previous clicked, new current slide is: ", this.currentSlide);
  }

  onNextClick() {
    const next = this.currentSlide + 1;
    this.currentSlide = next === this.images.length ? 0 : next;
    console.log("next clicked, new current slide is: ", this.currentSlide);
  }
  // Fetch images from the service
  private loadImages(): void {
    this.imageService.getImages().then((images) => {
      this.images = images; // Assign the fetched images to the component property
      console.log('Images loaded:', this.images); // Debugging: Check if images are loaded
    }).catch((error) => {
      console.error('Error loading images:', error); // Debugging: Check for errors
    });
  }


}
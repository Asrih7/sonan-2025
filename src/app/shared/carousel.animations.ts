import {
  animation,
  style,
  animate,
  keyframes
} from "@angular/animations";

export const fadeIn = animation([
  style({ opacity: 0 }),
  animate('{{ time }}', style({ opacity: 1 }))
]);

export const fadeOut = animation([
  animate('{{ time }}', style({ opacity: 0 }))
]);

export const slideIn = animation([
  style({ transform: 'translateX(100%)', opacity: 0 }),
  animate('{{ time }} ease-out', style({ transform: 'translateX(0)', opacity: 1 }))
]);

export const slideOut = animation([
  animate('{{ time }} ease-in', style({ transform: 'translateX(-100%)', opacity: 0 }))
]);

export const scaleIn = animation([
  style({ transform: 'scale(0.8)', opacity: 0 }),
  animate('{{ time }} ease-out', style({ transform: 'scale(1)', opacity: 1 }))
]);

export const scaleOut = animation([
  animate('{{ time }} ease-in', style({ transform: 'scale(1.2)', opacity: 0 }))
]);

export enum AnimationType {
  Scale = "scale",
  Fade = "fade",
  Flip = "flip",
  JackInTheBox = "jackInTheBox",
  Slide = "slide"
}
import { Component } from '@angular/core';

@Component({
  selector: 'app-carousel',
  imports: [],
  templateUrl: './carousel.html',
  styleUrl: './carousel.css',
})
export class Carousel {
  imageNumber: number = 1;
  image: string = `carousel/${this.imageNumber}.jpg`;

  changeImg(e: Event, dots: any) {
    const dot = e.target as HTMLInputElement;
    const newIndex = parseInt(dot.classList[0]);
    this.shiftCarousel(newIndex);
  }

  slideShow(dots: any) {
    setInterval(() => {
      const newIndex = this.imageNumber === 3 ? 1 : this.imageNumber + 1;
      this.shiftCarousel(newIndex);
    }, 1000);
  }

  shiftCarousel(newIndex: number) {
    this.imageNumber = newIndex;
    this.image = `carousel/${this.imageNumber}.jpg`;
  }
}

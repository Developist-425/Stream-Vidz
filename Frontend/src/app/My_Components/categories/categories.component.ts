import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/movie.service';


@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})


export class CategoriesComponent {

    trending: any[] = [];
    recommended: any[] = [];

  constructor(private movieService: MovieService) {}

  // ngOnInit(): void {
   
  //    this.trending = this.movieService.getTrending();
    
  //   this.recommended = this.movieService.getRecommended();
    
  // }

  ngOnInit(): void {
    this.trending = this.movieService.getTrending();
    this.recommended = this.movieService.getRecommended();
  }
  

  defaultTransform: number = 0;

  goNext(id: string): void {
    const slider: HTMLElement | null = document.getElementById(id);

    if (slider) {
      this.defaultTransform = this.defaultTransform - 398;

      if (Math.abs(this.defaultTransform) >= slider.scrollWidth / 1.7) {
        this.defaultTransform = 0;
      }

      slider.style.transform = `translateX(${this.defaultTransform}px)`;
    }
  }

  goPrev(id: string): void {
    const slider: HTMLElement | null = document.getElementById(id);

    if (slider) {
      if (Math.abs(this.defaultTransform) === 0) {
        this.defaultTransform = 0;
      } else {
        this.defaultTransform = this.defaultTransform + 398;
      }

      slider.style.transform = `translateX(${this.defaultTransform}px)`;
    }
  }
}

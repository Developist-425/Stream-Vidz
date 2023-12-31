import { Component } from '@angular/core';
import { MovieService } from 'src/app/movie.service';
import { Carousel, Dropdown, initTE,Collapse,Ripple, PerfectScrollbar, SmoothScroll } from 'tw-elements';

@Component({
  selector: 'app-nav-slider',
  templateUrl: './nav-slider.component.html',
  styleUrls: ['./nav-slider.component.css']
})
export class NavSliderComponent {


  trending: any[] = [];

  constructor(private movieService: MovieService) {}
  ngOnInit() {
    this.trending = this.movieService.getTrending();
    
    initTE({ Carousel, Dropdown,Collapse,Ripple, PerfectScrollbar, SmoothScroll});

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

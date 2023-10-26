// import { Component, OnInit } from '@angular/core';
// import { MovieService } from 'src/app/movie.service';
// import { ActivatedRoute } from '@angular/router';



// @Component({
//   selector: 'app-video-player',
//   templateUrl: './video-player.component.html',
//   styleUrls: ['./video-player.component.css'],
// })

// export class VideoPlayerComponent implements OnInit {

//   trending: any[] = [];
//   recommended: any[] = [];
//   movie: any;

//   constructor(
//     private route: ActivatedRoute,
//     private movieService: MovieService
//   ) {}

// ngOnInit(): void {
//   this.trending = this.movieService.getTrending();
//    this.recommended = this.movieService.getRecommended();


 
//   const idParam = this.route.snapshot.paramMap.get('id');
//     if (idParam !== null) {
   
//       const movieId = +idParam;

//       const videoData = this.movieService.getTrendingById(movieId);
//       console.log(videoData);

//       this.movie = this.movieService.getTrendingById(movieId);
//       this.movie = this.movieService.getRecommendedById(movieId);
//       // this.movie = this.movieService.getSliderById(movieId);
// }
// }

// defaultTransform: number = 0;

// goNext(id: string): void {
//   const slider: HTMLElement | null = document.getElementById(id);

//   if (slider) {
//     this.defaultTransform = this.defaultTransform - 398;

//     if (Math.abs(this.defaultTransform) >= slider.scrollWidth / 1.7) {
//       this.defaultTransform = 0;
//     }

//     slider.style.transform = `translateX(${this.defaultTransform}px)`;
//   }
// }

// goPrev(id: string): void {
//   const slider: HTMLElement | null = document.getElementById(id);

//   if (slider) {
//     if (Math.abs(this.defaultTransform) === 0) {
//       this.defaultTransform = 0;
//     } else {
//       this.defaultTransform = this.defaultTransform + 398;
//     }

//     slider.style.transform = `translateX(${this.defaultTransform}px)`;
//   }
// }
// }



import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/movie.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-video-player',
  templateUrl: './video-player.component.html',
  styleUrls: ['./video-player.component.css'],
})

export class VideoPlayerComponent implements OnInit {
  trending: any[] = [];
  recommended: any[] = [];
  movie: any;

  constructor(
    private route: ActivatedRoute,
    private movieService: MovieService
  ) {}

  ngOnInit(): void {
    this.trending = this.movieService.getTrending();
    this.recommended = this.movieService.getRecommended();

    const idParam = this.route.snapshot.paramMap.get('id');
    if (idParam !== null) {
      const movieId = +idParam;

     
      this.movie = this.movieService.getTrendingById(movieId);

    
      if (!this.movie) {
        this.movie = this.movieService.getRecommendedById(movieId);
      }

   
      if (!this.movie) {
        console.log("Video not found");
      }
    }
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


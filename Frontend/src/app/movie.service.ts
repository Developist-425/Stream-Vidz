import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root',
})
export class MovieService {
  private trending = [
    {
      id: 1,
      title: 'PAKISTAN VS INDIA',
      trailerUrl: 'https://player.vimeo.com/external/370331493.sd.mp4?s=e90dcaba73c19e0e36f03406b47bbd6992dd6c1c&profile_id=139&oauth2_token_id=57447761',
      image:'https://i.ibb.co/fDngH9G/carosel-1.png',
      description: 'Minimal Interior',
      profile1:"https://img.a.transfermarkt.technology/portrait/big/342229-1682683695.jpg?lm=1",
      profile2:"https://i.ibb.co/fDngH9G/carosel-1.png",
      profile3:"https://i.ibb.co/fDngH9G/carosel-1.png",
      profile4:"https://i.ibb.co/fDngH9G/carosel-1.png"
    },
    {
      id: 2,
      title: 'AUSTRALIA VS ENGLAND',
      trailerUrl: 'https://player.vimeo.com/external/195913085.sd.mp4?s=7c12f7a83de62a8900fd2ae049297070b9bc8a54&profile_id=164&oauth2_token_id=574477611',
      image:'https://i.ibb.co/fDngH9G/carosel-1.png',
      description: 'Description for Movie 2',
      profile1:"https://i.ibb.co/fDngH9G/carosel-1.png",
      profile2:"https://i.ibb.co/fDngH9G/carosel-1.png",
      profile3:"https://i.ibb.co/fDngH9G/carosel-1.png",
      profile4:"https://i.ibb.co/fDngH9G/carosel-1.png"
    },
    {
      id: 3,
      title: 'Movie 3',
      trailerUrl: 'https://player.vimeo.com/external/332588783.sd.mp4?s=cab1817146dd72daa6346a1583cc1ec4d9e677c7&profile_id=139&oauth2_token_id=57447761',
      image:'https://i.ibb.co/fDngH9G/carosel-1.png',
      description: 'Description for Movie 3',
    },
    {
      id: 4,
      title: 'Movie 3',
      trailerUrl: 'https://player.vimeo.com/external/332588783.sd.mp4?s=cab1817146dd72daa6346a1583cc1ec4d9e677c7&profile_id=139&oauth2_token_id=57447761',
      image:'https://i.ibb.co/fDngH9G/carosel-1.png',
      description: 'Description for Movie 3',
    },
    {
      id: 5,
      title: 'Movie 3',
      trailerUrl: 'https://player.vimeo.com/external/332588783.sd.mp4?s=cab1817146dd72daa6346a1583cc1ec4d9e677c7&profile_id=139&oauth2_token_id=57447761',
      image:'https://i.ibb.co/fDngH9G/carosel-1.png',
      description: 'Description for Movie 3',
    },
    {
      id: 6,
      title: 'Movie 3',
      trailerUrl: 'https://player.vimeo.com/external/332588783.sd.mp4?s=cab1817146dd72daa6346a1583cc1ec4d9e677c7&profile_id=139&oauth2_token_id=57447761',
      image:'https://i.ibb.co/fDngH9G/carosel-1.png',
      description: 'Description for Movie 3',
    },
    {
      id: 7,
      title: 'Movie 3',
      trailerUrl: 'https://player.vimeo.com/external/332588783.sd.mp4?s=cab1817146dd72daa6346a1583cc1ec4d9e677c7&profile_id=139&oauth2_token_id=57447761',
      image:'https://i.ibb.co/fDngH9G/carosel-1.png',
      description: 'Description for Movie 3',
    },
  ];

  private recommended = [
    {
      id: 1,
      title: 'Haaland Vs Rashford',
      trailerUrl: '../assets/videos/foot.mp4',
      image:'https://i.ibb.co/fDngH9G/carosel-1.png',
      description: 'Minimal Interior',
      profile1:"https://img.a.transfermarkt.technology/portrait/big/342229-1682683695.jpg?lm=1",
      profile2:"https://i.ibb.co/fDngH9G/carosel-1.png",
      profile3:"https://i.ibb.co/fDngH9G/carosel-1.png",
      profile4:"https://i.ibb.co/fDngH9G/carosel-1.png"
    },
    {
      id: 2,
      title: 'Haaland VS Rashford',
      trailerUrl: '../assets/videos/foot.mp4',
      image:'https://i.ibb.co/fDngH9G/carosel-1.png',
      description: 'Description for Movie 2',
      profile1:"https://i.ibb.co/fDngH9G/carosel-1.png",
      profile2:"https://i.ibb.co/fDngH9G/carosel-1.png",
      profile3:"https://i.ibb.co/fDngH9G/carosel-1.png",
      profile4:"https://i.ibb.co/fDngH9G/carosel-1.png"
    },
    {
      id: 3,
      title: 'Liverpool Vs Manchester',
      trailerUrl: '../assets/videos/foot.mp4',
      image:'https://i.ibb.co/fDngH9G/carosel-1.png',
      description: 'Description for Movie 2',
      profile1:"https://i.ibb.co/fDngH9G/carosel-1.png",
      profile2:"https://i.ibb.co/fDngH9G/carosel-1.png",
      profile3:"https://i.ibb.co/fDngH9G/carosel-1.png",
      profile4:"https://i.ibb.co/fDngH9G/carosel-1.png"
    },
    {   
         id: 4,
      title: 'Manchester Vs Brighton',
      trailerUrl: '../assets/videos/foot.mp4',
      image:'https://i.ibb.co/fDngH9G/carosel-1.png',
      description: 'Description for Movie 2',
      profile1:"https://i.ibb.co/fDngH9G/carosel-1.png",
      profile2:"https://i.ibb.co/fDngH9G/carosel-1.png",
      profile3:"https://i.ibb.co/fDngH9G/carosel-1.png",
      profile4:"https://i.ibb.co/fDngH9G/carosel-1.png"
    },
    {
      id: 5,
      title: 'Manchester Vs Spain',
      trailerUrl: '../assets/videos/foot.mp4',
      image:'https://i.ibb.co/fDngH9G/carosel-1.png',
      description: 'Description for Movie 2',
      profile1:"https://i.ibb.co/fDngH9G/carosel-1.png",
      profile2:"https://i.ibb.co/fDngH9G/carosel-1.png",
      profile3:"https://i.ibb.co/fDngH9G/carosel-1.png",
      profile4:"https://i.ibb.co/fDngH9G/carosel-1.png"
    },
    {
      id: 6,
      title: 'Portugal Vs Spain',
      trailerUrl: '../assets/videos/foot.mp4',
      image:'https://i.ibb.co/fDngH9G/carosel-1.png',
      description: 'Description for Movie 2',
      profile1:"https://i.ibb.co/fDngH9G/carosel-1.png",
      profile2:"https://i.ibb.co/fDngH9G/carosel-1.png",
      profile3:"https://i.ibb.co/fDngH9G/carosel-1.png",
      profile4:"https://i.ibb.co/fDngH9G/carosel-1.png"
    },
    {
      id: 7,
      title: 'Greece Vs Chelsea',
      trailerUrl: '../assets/videos/foot.mp4',
      image:'https://i.ibb.co/fDngH9G/carosel-1.png',
      description: 'Description for Movie 2',
      profile1:"https://i.ibb.co/fDngH9G/carosel-1.png",
      profile2:"https://i.ibb.co/fDngH9G/carosel-1.png",
      profile3:"https://i.ibb.co/fDngH9G/carosel-1.png",
      profile4:"https://i.ibb.co/fDngH9G/carosel-1.png"
    },

    {
      id: 8,
      title: 'Germany Vs France',
      trailerUrl: '../assets/videos/foot.mp4',
      image:'https://i.ibb.co/fDngH9G/carosel-1.png',
      description: 'Description for Movie 2',
      profile1:"https://i.ibb.co/fDngH9G/carosel-1.png",
      profile2:"https://i.ibb.co/fDngH9G/carosel-1.png",
      profile3:"https://i.ibb.co/fDngH9G/carosel-1.png",
      profile4:"https://i.ibb.co/fDngH9G/carosel-1.png"
    },
    {
      id: 9,
      title: 'France Vs Spain',
      trailerUrl: '../assets/videos/foot.mp4',
      image:'https://i.ibb.co/fDngH9G/carosel-1.png',
      description: 'Description for Movie 2',
      profile1:"https://i.ibb.co/fDngH9G/carosel-1.png",
      profile2:"https://i.ibb.co/fDngH9G/carosel-1.png",
      profile3:"https://i.ibb.co/fDngH9G/carosel-1.png",
      profile4:"https://i.ibb.co/fDngH9G/carosel-1.png"
    },
    {
      id: 10,
      title: 'Spain Vs Portugal',
      trailerUrl: '../assets/videos/foot.mp4',
      image:'https://i.ibb.co/fDngH9G/carosel-1.png',
      description: 'Description for Movie 2',
      profile1:"https://i.ibb.co/fDngH9G/carosel-1.png",
      profile2:"https://i.ibb.co/fDngH9G/carosel-1.png",
      profile3:"https://i.ibb.co/fDngH9G/carosel-1.png",
      profile4:"https://i.ibb.co/fDngH9G/carosel-1.png"
    },
    {
      id: 11,
      title: 'France Vs Real Madrid',
      trailerUrl: '../assets/videos/foot.mp4',
      image:'https://i.ibb.co/fDngH9G/carosel-1.png',
      description: 'Description for Movie 2',
      profile1:"https://i.ibb.co/fDngH9G/carosel-1.png",
      profile2:"https://i.ibb.co/fDngH9G/carosel-1.png",
      profile3:"https://i.ibb.co/fDngH9G/carosel-1.png",
      profile4:"https://i.ibb.co/fDngH9G/carosel-1.png"
    },
    {
      id: 12,
      title: 'Germany Vs Greece',
      trailerUrl: '../assets/videos/babar.mp4',
      image:'https://i.ibb.co/fDngH9G/carosel-1.png',
      description: 'Description for Movie 2',
      profile1:"https://i.ibb.co/fDngH9G/carosel-1.png",
      profile2:"https://i.ibb.co/fDngH9G/carosel-1.png",
      profile3:"https://i.ibb.co/fDngH9G/carosel-1.png",
      profile4:"https://i.ibb.co/fDngH9G/carosel-1.png "
    },

  ];



  private slider = [
    {
      id: 1,
      title: 'PAKISTAN VS INDIA',
      trailerUrl: 'https://player.vimeo.com/external/370331493.sd.mp4?s=e90dcaba73c19e0e36f03406b47bbd6992dd6c1c&profile_id=139&oauth2_token_id=57447761',
      image:'https://i.ibb.co/fDngH9G/carosel-1.png',
      description: 'Minimal Interior',
      profile1:"https://img.a.transfermarkt.technology/portrait/big/342229-1682683695.jpg?lm=1",
      profile2:"https://i.ibb.co/fDngH9G/carosel-1.png",
      profile3:"https://i.ibb.co/fDngH9G/carosel-1.png",
      profile4:"https://i.ibb.co/fDngH9G/carosel-1.png"
    },
    {
      id: 2,
      title: 'AUSTRALIA VS ENGLAND',
      trailerUrl: 'https://player.vimeo.com/external/195913085.sd.mp4?s=7c12f7a83de62a8900fd2ae049297070b9bc8a54&profile_id=164&oauth2_token_id=574477611',
      image:'https://i.ibb.co/fDngH9G/carosel-1.png',
      description: 'Description for Movie 2',
      profile1:"https://i.ibb.co/fDngH9G/carosel-1.png",
      profile2:"https://i.ibb.co/fDngH9G/carosel-1.png",
      profile3:"https://i.ibb.co/fDngH9G/carosel-1.png",
      profile4:"https://i.ibb.co/fDngH9G/carosel-1.png"
    },
    {
      id: 3,
      title: 'Movie 3',
      trailerUrl: 'https://player.vimeo.com/external/332588783.sd.mp4?s=cab1817146dd72daa6346a1583cc1ec4d9e677c7&profile_id=139&oauth2_token_id=57447761',
      image:'https://i.ibb.co/fDngH9G/carosel-1.png',
      description: 'Description for Movie 3',
    },
    {
      id: 4,
      title: 'Movie 3',
      trailerUrl: 'https://player.vimeo.com/external/332588783.sd.mp4?s=cab1817146dd72daa6346a1583cc1ec4d9e677c7&profile_id=139&oauth2_token_id=57447761',
      image:'https://i.ibb.co/fDngH9G/carosel-1.png',
      description: 'Description for Movie 3',
    },
    {
      id: 5,
      title: 'Movie 3',
      trailerUrl: 'https://player.vimeo.com/external/332588783.sd.mp4?s=cab1817146dd72daa6346a1583cc1ec4d9e677c7&profile_id=139&oauth2_token_id=57447761',
      image:'https://i.ibb.co/fDngH9G/carosel-1.png',
      description: 'Description for Movie 3',
    },
    {
      id: 6,
      title: 'Movie 3',
      trailerUrl: 'https://player.vimeo.com/external/332588783.sd.mp4?s=cab1817146dd72daa6346a1583cc1ec4d9e677c7&profile_id=139&oauth2_token_id=57447761',
      image:'https://i.ibb.co/fDngH9G/carosel-1.png',
      description: 'Description for Movie 3',
    },
    {
      id: 7,
      title: 'Movie 3',
      trailerUrl: 'https://player.vimeo.com/external/332588783.sd.mp4?s=cab1817146dd72daa6346a1583cc1ec4d9e677c7&profile_id=139&oauth2_token_id=57447761',
      image:'https://i.ibb.co/fDngH9G/carosel-1.png',
      description: 'Description for Movie 3',
    },
  ];

  getTrending() {
    return this.trending;
  }
  getRecommended() {
    return this.recommended;
  }
  getSlider() {
    return this.slider;
  }

  getTrendingById(id: number) {
    return this.trending.find((movie) => movie.id === id);
  }
  getRecommendedById(id: number) {
    return this.recommended.find((movie) => movie.id === id);
  }
  getSliderById(id: number) {
    return this.slider.find((movie) => movie.id === id);
  }
}

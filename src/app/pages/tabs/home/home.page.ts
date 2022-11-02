import { Component, OnInit } from '@angular/core';
// import Swiper core and required modules
import SwiperCore, { Keyboard, Pagination, SwiperOptions } from 'swiper';

// install Swiper modules
SwiperCore.use([Pagination, Keyboard]);


@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

banners: any[] = [];
restaurants: any[] = [];
isLoading = false;

  constructor() { }

  ngOnInit() {
    this.isLoading = true;
    setTimeout(() => {
          this.banners = [
      {banners: 'assets/imgs/1.jpg'},
      {banners: 'assets/imgs/2.jpg'},
      {banners: 'assets/imgs/3.jpg'}
    ];
    this.restaurants = [
      {
        cover: 'assets/imgs/1.jpg',
        name: 'Stayfit',
        shortName: 'stayfit',
        cuisines: [
          'Italian',
          'Mexican'
        ],
        rating: 5,
        deliveryTime: 25,
        distance: 2.5,
        price: 100
      },
      {
        cover: 'assets/imgs/2.jpg',
        name: 'Stayfit1',
        shortName: 'stayfit1',
        cuisines: [
          'Italian',
          'Mexican'
        ],
        rating: 5,
        deliveryTime: 25,
        distance: 2.5,
        price: 100
      },
      {
        cover: 'assets/imgs/3.jpg',
        name: 'Stayfit2',
        shortName: 'stayfit2',
        cuisines: [
          'Italian',
          'Mexican'
        ],
        rating: 5,
        deliveryTime: 25,
        distance: 2.5,
        price: 100
      },
    ];
    this.isLoading = false;
    }, 3000);

  }

}

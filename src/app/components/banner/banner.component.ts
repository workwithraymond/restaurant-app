import { AfterContentChecked, Component, Input, OnInit } from '@angular/core';
import { SwiperOptions } from 'swiper';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss'],
})
export class BannerComponent implements OnInit, AfterContentChecked {

  @Input() bannerImages: any[];
  config: SwiperOptions = {};

  constructor() { }

  ngOnInit() {}

  ngAfterContentChecked(): void {
      this.config = {
    slidesPerView: 1.1,
    //navigation: true,
    pagination: { clickable: true },
    keyboard: { enabled: true}
    //centeredSlides: true

  };
  }

}

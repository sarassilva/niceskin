import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import jsonData from '../../../data/feed.json';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { RouterLink, RouterOutlet } from '@angular/router';
import { ProductsComponent } from '../products/products.component';

@Component({
  selector: 'app-bestsellers',
  standalone: true,
  imports: [HttpClientModule, SlickCarouselModule, RouterLink, RouterOutlet, ProductsComponent],
  templateUrl: './bestsellers.component.html',
  styleUrl: './bestsellers.component.scss'
})

export class BestsellersComponent {
  slides: any[] = jsonData.products;
  
  slideConfig = {
    slidesToShow: 3, 
    slidesToScroll: 1,
    infinite: false,

    responsive: [
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 2,
        }
      },
      {
      breakpoint: 600,
        settings: {
          slidesToShow: 1,
        }
    }]
  }
  
}
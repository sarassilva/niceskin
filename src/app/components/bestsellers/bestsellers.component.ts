import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { RouterLink, RouterOutlet } from '@angular/router';
import { ProductService } from '../products/product.service';

@Component({
  selector: 'app-bestsellers',
  standalone: true,
  imports: [HttpClientModule, SlickCarouselModule, RouterLink, RouterOutlet],
  templateUrl: './bestsellers.component.html',
  styleUrl: './bestsellers.component.scss'
})

export class BestsellersComponent {
  slides: any[] = [];

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.productService.getProducts().subscribe(data => {
      this.slides = data;
    });
  }
  
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
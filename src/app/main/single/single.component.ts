import { Component, OnInit } from '@angular/core';
import { NotfoundComponent } from '../../notfound/notfound.component';
import { NgFor, NgIf } from '@angular/common';
import { ActivatedRoute, ParamMap, Router, RouterLink } from '@angular/router';
import { switchMap, Observable, of } from 'rxjs';
import { ProductService } from '../../components/products/product.service';
import { QuizComponent } from '../../components/quiz/quiz.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';

@Component({
  selector: 'app-single',
  standalone: true,
  imports: [NotfoundComponent, NgFor, NgIf, QuizComponent, RouterLink, SlickCarouselModule],
  templateUrl: './single.component.html',
  styleUrl: './single.component.scss'
})

export class SingleComponent implements OnInit {
  product: any;
  error: boolean = false;
  selectedSize: any;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.route.paramMap.pipe(
      switchMap(params => {
        const id = params.get('id');
        if (id) {
          return this.productService.getProductById(+id);
        } else {
          return of(null);
        }
      })
    ).subscribe(data => {
      if (data) {
        this.product = data;
      } else {
        this.router.navigate(['/not-found']);
      }
    });
  }

  slideFor = {
    slidesToShow: 1, 
    slidesToScroll: 1,
    infinite: false,
    asNavFor: '.slider-nav',
    arrows: false
  }

  slideNav = {
    slidesToShow: 4,
    slidesToScroll: 1,
    asNavFor: '.slider-for',
    dots: false,
    focusOnSelect: true,
    arrows: true
  }


  selectSize(size: any): void {
    this.selectedSize = size;
  }

  more() {
    const ingredients = document.getElementById('hide');

    ingredients?.classList.toggle('show');
  }
}
 
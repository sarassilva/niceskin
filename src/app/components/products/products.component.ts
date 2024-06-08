import { Component, OnInit } from '@angular/core';
import { ProductService } from './product.service';
import { NgFor } from '@angular/common';
import { RouterLink } from '@angular/router';
import { FiltersComponent } from '../filters/filters.component';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [NgFor, RouterLink, FiltersComponent],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})

export class ProductsComponent implements OnInit {

  title = 'All skincare';

  products: any[] = [];

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.productService.getProducts().subscribe(data => {
      this.products = data;
    });
  }
}

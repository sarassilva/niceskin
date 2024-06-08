import { Component } from '@angular/core';
import { ProductsComponent } from '../products/products.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-featured',
  standalone: true,
  imports: [ProductsComponent, RouterLink],
  templateUrl: './featured.component.html',
  styleUrl: './featured.component.scss', 
})
export class FeaturedComponent {
  title = 'The formula for';
  subtitle = 'Your daily skincare for all ocasions. Let your skin feel moisturezed and healthy.'
}

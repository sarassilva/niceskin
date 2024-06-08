import { Component } from '@angular/core';
import { FeaturedComponent } from '../../components/featured/featured.component';
import { BestsellersComponent } from '../../components/bestsellers/bestsellers.component';
import { NewsletterComponent } from '../../components/newsletter/newsletter.component';
import { FooterComponent } from '../../footer/footer.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FeaturedComponent, BestsellersComponent, NewsletterComponent, FooterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}

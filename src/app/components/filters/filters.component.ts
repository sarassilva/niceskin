import { Component } from '@angular/core';

@Component({
  selector: 'app-filters',
  standalone: true,
  imports: [],
  templateUrl: './filters.component.html',
  styleUrl: './filters.component.scss'
})
export class FiltersComponent {
  filter() {
    const filter = document.getElementById('filter-hold');
    const overlay = document.getElementById('overlay');

    filter?.classList.toggle('open');
    overlay?.classList.toggle('show');
  }
}

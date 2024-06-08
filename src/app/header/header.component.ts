import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterOutlet],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})

export class HeaderComponent {
  openSideMenu() {
    const sideMenu = document.getElementById('side-menu');
    const overlay = document.getElementById('overlay');

    sideMenu?.classList.toggle('show');
    overlay?.classList.toggle('show');
  }

  sideCart() {
    const sideCart = document.getElementById('side-cart');
    const overlay = document.getElementById('overlay');

    sideCart?.classList.toggle('show');
    overlay?.classList.toggle('show');
  }
}

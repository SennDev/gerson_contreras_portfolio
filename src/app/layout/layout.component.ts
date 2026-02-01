import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header';
import { FooterComponent } from './footer/footer';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent],
  template: `
    <app-header></app-header>

    <main class="container py-5">
      <router-outlet></router-outlet>
    </main>

    <app-footer></app-footer>
  `
})
export class LayoutComponent {}

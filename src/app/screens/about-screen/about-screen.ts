import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-about-screen',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './about-screen.html',
  styleUrl: './about-screen.scss',
})
export class AboutScreen {
}

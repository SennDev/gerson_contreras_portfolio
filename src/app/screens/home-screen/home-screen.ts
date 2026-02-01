import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home-screen',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './home-screen.html',
  styleUrls: ['./home-screen.scss']
})
export class HomeScreenComponent implements OnInit, OnDestroy {

  phrases: string[] = [
    'Frontend Developer',
    'Game Developer Indie',
    'Ingeniero de Software',
    'Tech Enthusiast'
  ];

  typedText = '';
  private phraseIndex = 0;
  private charIndex = 0;
  private isDeleting = false;
  private timeoutId: any;

  ngOnInit() {
    this.type();
  }

  ngOnDestroy() {
    if (this.timeoutId) {
      clearTimeout(this.timeoutId);
    }
  }

  private type() {
    const current = this.phrases[this.phraseIndex];

    this.typedText = this.isDeleting
      ? current.substring(0, this.charIndex--)
      : current.substring(0, this.charIndex++);

    let delay = this.isDeleting ? 50 : 100;

    if (!this.isDeleting && this.charIndex === current.length + 1) {
      delay = 2000;
      this.isDeleting = true;
    } else if (this.isDeleting && this.charIndex === 0) {
      this.isDeleting = false;
      this.phraseIndex = (this.phraseIndex + 1) % this.phrases.length;
      delay = 500;
    }

    this.timeoutId = setTimeout(() => this.type(), delay);
  }
}

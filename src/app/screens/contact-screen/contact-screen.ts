import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import emailjs from '@emailjs/browser';

@Component({
  selector: 'app-contact-screen',
  templateUrl: './contact-screen.html',
  styleUrls: ['./contact-screen.scss'],
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
})
export class ContactScreenComponent {

  contactForm!: FormGroup;
  sending = false;
  success = false;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      subject: [''],
      reason: [''],
      message: ['', [Validators.required, Validators.minLength(10)]]
    });
  }

  isInvalid(field: string): boolean {
    const control = this.contactForm.get(field);
    return !!(control && control.invalid && control.touched);
  }

  sendMessage(): void {
    if (this.contactForm.invalid) {
      this.contactForm.markAllAsTouched();
      return;
    }

    this.sending = true;

    // Asegúrate de reemplazar tus KEYS aquí
    emailjs.send(
      'SERVICE_ID',
      'TEMPLATE_ID',
      this.contactForm.value,
      'PUBLIC_KEY'
    ).then(() => {
      this.success = true;
      this.contactForm.reset();
    }).finally(() => {
      this.sending = false;
    });
  }
}

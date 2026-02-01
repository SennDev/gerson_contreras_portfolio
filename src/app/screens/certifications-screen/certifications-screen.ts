import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Certification {
  title: string;
  provider: string;
  image: string;
  url: string;
  icon: string; // Icono del proveedor (bi-microsoft, bi-translate, etc)
}

@Component({
  selector: 'app-certifications-screen',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './certifications-screen.html',
  styleUrls: ['./certifications-screen.scss']
})
export class CertificationsScreen {

  certifications: Certification[] = [
    {
      title: 'Foundational C# with Microsoft',
      provider: 'FreeCodeCamp · Microsoft',
      image: 'assets/microsoftC.png', // Asegúrate de tener esta imagen
      url: 'https://www.freecodecamp.org/certification/senndev4520/foundational-c-sharp-with-microsoft',
      icon: 'bi-microsoft'
    },
    {
      title: 'English Certificate: B2 First',
      provider: 'Cambridge Assessment English',
      image: 'assets/cambridge.png', // ¡Sube una imagen con este nombre!
      url: '#', // Pon aquí el link de validación si tienes uno público, o deja #
      icon: 'bi-translate'
    }
  ];
}

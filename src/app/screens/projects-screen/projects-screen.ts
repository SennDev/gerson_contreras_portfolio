import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Project {
  title: string;
  description: string;
  tech: string[];
  image: string;
  demo: string;
  github: string;
}

@Component({
  selector: 'app-projects-screen',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects-screen.html',
  styleUrls: ['./projects-screen.scss']
})
export class ProjectsScreenComponent {

  projects: Project[] = [
    {
      title: 'Diccionario Náhuatl',
      description: 'Plataforma educativa dedicada a la preservación y aprendizaje del Náhuatl variante Huasteca (Veracruz, SLP, Hidalgo).',
      tech: ['Angular', 'TypeScript', 'PWA'],
      image: 'assets/diccionario.png', // ¡Sube una captura con este nombre!
      demo: 'https://senndev.github.io/diccionario-nahuatl/', // URL probable de GitHub Pages
      github: 'https://github.com/SennDev/diccionario-nahuatl'
    },
    {
      title: 'Space Edu',
      description: 'Reimaginación del clásico Space Invaders con integración de hardware externo (ESP32) para una experiencia interactiva.',
      tech: ['Angular', 'IoT', 'ESP32'],
      image: 'assets/spaceEdu.png',
      demo: 'https://igniferdev.github.io/space-angular/',
      github: 'https://github.com/IgniferDev/space-angular'
    },
    {
      title: 'Sistema de Soporte de Decisión',
      description: 'Dashboard analítico serverless para visualización de datos empresariales mediante Cubos OLAP.',
      tech: ['Python', 'SQL', 'Serverless'],
      image: 'assets/olguinCubo.png',
      demo: 'https://igniferdev.github.io/DashboardPF-Negocios-sinFlask/',
      github: 'https://github.com/IgniferDev/DashboardPF-Negocios-sinFlask'
    },
    {
      title: 'CRUD Escolar WebApp',
      description: 'Sistema de gestión académica desarrollado para la materia de Tecnologías Web (Primavera 2025).',
      tech: ['Angular', 'Web API', 'Bootstrap'],
      image: 'assets/crud.png', // ¡Sube una captura con este nombre!
      demo: 'https://github.com/SennDev/crud-escolar-webapp', // Si no tiene deploy, el link va al repo
      github: 'https://github.com/SennDev/crud-escolar-webapp'
    }
  ];
}

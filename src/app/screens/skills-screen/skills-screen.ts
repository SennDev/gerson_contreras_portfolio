import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-skills-screen',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills-screen.html',
  styleUrls: ['./skills-screen.scss']
})
export class SkillsScreen {

  // --- NÚCLEO PRINCIPAL (Barras de Energía) ---
  coreSkills = [
    { name: 'Angular & Modern Web', level: 85, icon: 'devicon-angularjs-plain' },
    { name: 'HTML5 / SCSS & Diseño', level: 90, icon: 'devicon-sass-original' },
    { name: 'TypeScript / JavaScript', level: 80, icon: 'devicon-typescript-plain' },
    { name: 'Python & Django', level: 65, icon: 'devicon-django-plain' },
    { name: 'SQL & Bases de Datos', level: 70, icon: 'devicon-azuresqldatabase-plain' },
    { name: 'ReactJS (Librería)', level: 45, icon: 'devicon-react-original' },
    { name: 'C# (Fundamentos)', level: 40, icon: 'devicon-csharp-plain' },
    { name: 'Unity & Lógica de Juegos', level: 25, icon: 'devicon-unity-original' } // Rango 15-25%
  ];

  // --- MÓDULO GAME DEV & CREATIVIDAD (Tags) ---
  gameDevTools = [
    'Unity Engine 2D/3D',
    'Diseño de Niveles',
    'Mecánicas de Juego',
    'Blender (Modelado Básico)',
    'Físicas & Colisiones'
  ];

  // --- MÓDULO HARDWARE & SOPORTE (Lista) ---
  hardwareOps = [
    'Diagnóstico y Reparación de Equipos',
    'Mantenimiento Preventivo y Correctivo',
    'Ensamblaje de PCs',
    'Optimización de Sistemas Operativos'
  ];

  // --- MÓDULO PERFIL PROFESIONAL (Atributos) ---
  softSkills = [
    { title: 'Resolución de Problemas', icon: 'bi-puzzle-fill', desc: 'Enfoque lógico y analítico.' },
    { title: 'Adaptabilidad Técnica', icon: 'bi-arrow-repeat', desc: 'Aprendizaje rápido de nuevas herramientas.' },
    { title: 'Comunicación Efectiva', icon: 'bi-chat-quote-fill', desc: 'Claridad en documentación y reporte.' },
    { title: 'Pensamiento Crítico', icon: 'bi-lightbulb-fill', desc: 'Filosofía aplicada a la ingeniería.' }
  ];

}

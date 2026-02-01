import { Injectable, signal, computed } from '@angular/core';

export type Language = 'es' | 'en';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {

  currentLang = signal<Language>('es');

  toggleLang() {
    this.currentLang.update(lang => lang === 'es' ? 'en' : 'es');
  }

  translations = computed(() => {
    const lang = this.currentLang();

    if (lang === 'en') {
      return {
        header: {
          home: 'Home',
          about: 'About',
          projects: 'Projects',
          certifications: 'Certifications',
          contact: 'Contact',
          skills: 'Skills'
        },
        home: {
          badge: 'Available for projects',
          greeting: "Hi, I'm",
          typing: [
            'Frontend Developer',
            'Creative Engineer',
            'Software Engineer',
            'Tech Enthusiast'
          ],
          // Usamos etiquetas HTML dentro del string para mantener el estilo
          desc_p1: "I am an <strong>Information Technology Engineer</strong> focused on Frontend development. I consider myself an adaptable professional, curious by nature, and committed to building clean and efficient web interfaces.",
          desc_p2: "Beyond code, I enjoy exploring my creativity through <strong>game development</strong>, a personal passion that complements my technical vision.",
          btn_projects: 'View Projects',
          btn_contact: 'Connect',
          stats: {
            exp: 'Experience',
            profile: 'Profile',
            design: 'Web Design',
            degree: 'IT Engineer'
          },
          stack: {
            eyebrow: 'Technical Arsenal',
            title: 'Technologies & Tools'
          },
          footer_cta: {
            text: 'Ready to see real code?',
            link: 'Explore Portfolio'
          }
        }
      };
    } else {
      return {
        header: {
          home: 'Inicio',
          about: 'Sobre mí',
          projects: 'Proyectos',
          certifications: 'Certificaciones',
          contact: 'Contacto',
          skills: 'Skills'
        },
        home: {
          badge: 'Disponible para proyectos',
          greeting: 'Hola, soy',
          typing: [
            'Desarrollador Frontend',
            'Ingeniero Creativo',
            'Ingeniero de Software',
            'Entusiasta Tech'
          ],
          desc_p1: "Soy un <strong>Ingeniero en Tecnologías de la Información</strong> enfocado en el desarrollo Frontend. Me considero un profesional adaptable, curioso por naturaleza y comprometido con crear interfaces web limpias y eficientes.",
          desc_p2: "Más allá del código, disfruto explorar mi creatividad a través del <strong>desarrollo de videojuegos</strong>, una pasión personal que complementa mi visión técnica.",
          btn_projects: 'Ver Proyectos',
          btn_contact: 'Conectar',
          stats: {
            exp: 'Experiencia',
            profile: 'Perfil',
            design: 'Diseño Web',
            degree: 'Ing. TI'
          },
          stack: {
            eyebrow: 'Arsenal Técnico',
            title: 'Tecnologías & Herramientas'
          },
          footer_cta: {
            text: '¿Listo para ver código real?',
            link: 'Explorar Portafolio'
          }
        }
      };
    }
  });
}

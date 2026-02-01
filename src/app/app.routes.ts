import { Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';

export const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        loadComponent: () =>
          import('./screens/home-screen/home-screen')
            .then(m => m.HomeScreenComponent)
      },
      {
        path: 'about',
        loadComponent: () =>
          import('./screens/about-screen/about-screen')
            .then(m => m.AboutScreen)
      },
      {
        path: 'projects',
        loadComponent: () =>
          import('./screens/projects-screen/projects-screen')
            .then(m => m.ProjectsScreenComponent)
      },
      {
        path: 'skills',
        loadComponent: () =>
          import('./screens/skills-screen/skills-screen')
            .then(m => m.SkillsScreen)
      },
      {
        path: 'contact',
        loadComponent: () =>
          import('./screens/contact-screen/contact-screen')
            .then(m => m.ContactScreenComponent)
      },
      {
        path: 'certifications',
        loadComponent: () =>
          import('./screens/certifications-screen/certifications-screen')
            .then(m => m.CertificationsScreen)
      }
    ]
  }
];

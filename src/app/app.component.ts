import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { CertificationsComponent } from './components/certifications/certifications.component';
import { ContactComponent } from './components/contact/contact.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    SkillsComponent,
    ProjectsComponent,
    CertificationsComponent,
    ContactComponent
  ],
  template: `
    <div class="app-container">
      <app-navbar></app-navbar>
      <main>
        <app-home></app-home>
        <app-about></app-about>
        <app-skills></app-skills>
        <app-projects></app-projects>
        <app-certifications></app-certifications>
        <app-contact></app-contact>
      </main>
    </div>
  `,
  styles: [`
    .app-container {
      min-height: 100vh;
    }
    
    main {
      position: relative;
    }
  `]
})
export class AppComponent {
  title = 'Vikram Portfolio';
}

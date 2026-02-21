import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../navbar/navbar.component';
import { HomeComponent } from '../home/home.component';
import { AboutComponent } from '../about/about.component';
import { SkillsComponent } from '../skills/skills.component';
import { ProjectsComponent } from '../projects/projects.component';
import { CertificationsComponent } from '../certifications/certifications.component';
import { ContactComponent } from '../contact/contact.component';

@Component({
  selector: 'app-landing',
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
export class LandingComponent {}

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Project {
  title: string;
  description: string;
  tech: string[];
  image: string;
  github?: string;
  demo?: string;
  category: string;
}

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="projects" class="py-20 px-4 bg-white">
      <div class="container mx-auto max-w-6xl">
        <div class="text-center mb-12">
          <h2 class="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            My <span class="gradient-text">Projects</span>
          </h2>
          <div class="w-24 h-1 bg-primary mx-auto mb-4"></div>
          <p class="text-xl text-gray-600 max-w-2xl mx-auto">
            A showcase of my recent work and personal projects
          </p>
        </div>

        <!-- Projects Grid -->
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div 
            *ngFor="let project of projects; let i = index"
            class="bg-white rounded-xl shadow-lg overflow-hidden card-hover fade-in-up"
            [style.animation-delay]="(i * 0.1) + 's'"
          >
            <!-- Project Image -->
            <div class="relative h-48 overflow-hidden bg-gray-100">
              <img 
                [src]="project.image" 
                [alt]="project.title"
                class="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                (error)="onImageError($event)"
              />
              <div class="absolute top-4 right-4 px-3 py-1 bg-white rounded-full text-xs font-semibold text-primary shadow-md">
                {{ project.category }}
              </div>
            </div>

            <!-- Project Content -->
            <div class="p-6 space-y-4">
              <h3 class="text-xl font-bold text-gray-900">{{ project.title }}</h3>
              <p class="text-gray-600 text-sm leading-relaxed">{{ project.description }}</p>

              <!-- Tech Stack -->
              <div class="flex flex-wrap gap-2">
                <span 
                  *ngFor="let tech of project.tech"
                  class="px-3 py-1 bg-blue-100 text-primary text-xs rounded-full font-medium"
                >
                  {{ tech }}
                </span>
              </div>

              <!-- Links -->
              <div class="flex space-x-3 pt-2">
                <a 
                  *ngIf="project.github"
                  [href]="project.github"
                  target="_blank"
                  class="flex items-center space-x-1 px-4 py-2 bg-gray-900 text-white rounded-lg text-sm font-medium btn-hover"
                >
                  <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                  <span>GitHub</span>
                </a>
                <a 
                  *ngIf="project.demo"
                  [href]="project.demo"
                  target="_blank"
                  class="flex items-center space-x-1 px-4 py-2 bg-primary text-white rounded-lg text-sm font-medium btn-hover"
                >
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                  </svg>
                  <span>View Live</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        <!-- More Projects Link -->
        <div class="text-center mt-12">
          <a 
            href="https://github.com/PGV-da"
            target="_blank"
            class="inline-flex items-center space-x-2 px-8 py-3 border-2 border-primary text-primary rounded-full font-semibold btn-hover"
          >
            <span>View More on GitHub</span>
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
            </svg>
          </a>
        </div>
      </div>
    </section>
  `,
  styles: []
})
export class ProjectsComponent {
  projects: Project[] = [
    {
      title: 'DailyLoop',
      description: 'A productivity and habit tracker mobile app that helps users manage tasks and build habits with reminders, task analytics, and performance charts. Published on Google Play Store.',
      tech: ['Flutter', 'Dart', 'Firebase'],
      image: 'assets/images/projects/dailyloop.jpg',
      demo: 'https://play.google.com/store/apps/details?id=com.vikramji283.dailyloop',
      category: 'Mobile'
    },
    {
      title: 'Green Guard AI',
      description: 'AI-powered agricultural assistant combining AI, real-time data, and chatbot integration to support farmers with crop recommendation, disease detection, and market insights.',
      tech: ['Python', 'Flask', 'Machine Learning', 'HTML/CSS/JS'],
      image: 'assets/images/projects/greenguard.png',
      github: 'https://github.com/PGV-da/Green-Guard-AI',
      category: 'AI/ML'
    },
    {
      title: 'block_porn Package',
      description: 'A Flutter package that blocks and filters inappropriate URLs. Lightweight, developer-friendly, supports custom blocklists. Published on pub.dev.',
      tech: ['Flutter', 'Dart', 'Package Development'],
      image: 'assets/images/projects/blockporn.png',
      demo: 'https://pub.dev/packages/block_porn',
      github: 'https://github.com/PGV-da/block_porn',
      category: 'Open Source'
    }
  ];

  // Fallback image if project image fails to load
  onImageError(event: any) {
    event.target.src = 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=400&h=300&fit=crop';
  }
}

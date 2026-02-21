import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

interface App {
  id: string;
  name: string;
  tagline: string;
  description: string;
  image: string;
  platform: string;
  status: string;
  features: string[];
}

@Component({
  selector: 'app-myapps',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <div class="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      <!-- Header -->
      <nav class="fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
        <div class="container mx-auto px-4 sm:px-6 lg:px-8">
          <div class="flex justify-between items-center h-16">
            <a routerLink="/" class="text-2xl font-bold gradient-text">
              Vikram
            </a>
            <a 
              routerLink="/" 
              class="px-4 py-2 text-primary hover:text-white hover:bg-primary rounded-lg transition-all duration-300 font-medium"
            >
              ← Back to Portfolio
            </a>
          </div>
        </div>
      </nav>

      <!-- Main Content -->
      <main class="pt-24 pb-16 px-4">
        <div class="container mx-auto max-w-6xl">
          <!-- Page Title -->
          <div class="text-center mb-12">
            <h1 class="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              My <span class="gradient-text">Apps</span>
            </h1>
            <div class="w-24 h-1 bg-primary mx-auto mb-4"></div>
            <p class="text-xl text-gray-600 max-w-2xl mx-auto">
              Mobile applications I've built and published
            </p>
          </div>

          <!-- Apps Grid -->
          <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div 
              *ngFor="let app of apps; let i = index"
              class="bg-white rounded-2xl shadow-lg overflow-hidden card-hover fade-in-up"
              [style.animation-delay]="(i * 0.1) + 's'"
            >
              <!-- App Image/Logo -->
              <div class="relative h-48 overflow-hidden bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                <img 
                  [src]="app.image" 
                  [alt]="app.name"
                  class="w-24 h-24 rounded-2xl shadow-lg"
                />
                <div class="absolute top-4 right-4 px-3 py-1 bg-white rounded-full text-xs font-semibold shadow-md"
                     [class.text-green-600]="app.status === 'Live'"
                     [class.text-yellow-600]="app.status === 'Coming Soon'">
                  {{ app.status }}
                </div>
              </div>

              <!-- App Content -->
              <div class="p-6 space-y-4">
                <div class="flex items-center justify-between">
                  <h3 class="text-xl font-bold text-gray-900">{{ app.name }}</h3>
                  <span class="px-3 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
                    {{ app.platform }}
                  </span>
                </div>
                
                <p class="text-primary font-medium text-sm">{{ app.tagline }}</p>
                <p class="text-gray-600 text-sm leading-relaxed">{{ app.description }}</p>

                <!-- Features -->
                <div class="flex flex-wrap gap-2">
                  <span 
                    *ngFor="let feature of app.features.slice(0, 3)"
                    class="px-2 py-1 bg-blue-50 text-primary text-xs rounded-full"
                  >
                    {{ feature }}
                  </span>
                </div>

                <!-- Links -->
                <div class="flex space-x-3 pt-2">
                  <a 
                    [routerLink]="['/myapps', app.id]"
                    class="flex-1 flex items-center justify-center space-x-1 px-4 py-2 bg-primary text-white rounded-lg text-sm font-medium btn-hover"
                  >
                    <span>View Details</span>
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <!-- Footer -->
      <footer class="bg-gray-900 text-white py-8">
        <div class="container mx-auto px-4 text-center">
          <p class="text-gray-400">© 2024 Vikram. All rights reserved.</p>
        </div>
      </footer>
    </div>
  `,
  styles: [`
    .gradient-text {
      background: linear-gradient(135deg, #2563eb 0%, #7c3aed 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }

    .card-hover {
      transition: transform 0.3s ease, box-shadow 0.3s ease;
    }

    .card-hover:hover {
      transform: translateY(-8px);
      box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
    }

    .btn-hover {
      transition: all 0.3s ease;
    }

    .btn-hover:hover {
      transform: translateY(-2px);
      box-shadow: 0 4px 12px rgba(37, 99, 235, 0.4);
    }

    .fade-in-up {
      animation: fadeInUp 0.6s ease forwards;
      opacity: 0;
    }

    @keyframes fadeInUp {
      from {
        opacity: 0;
        transform: translateY(30px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
  `]
})
export class MyappsComponent {
  apps: App[] = [
    {
      id: 'flap3',
      name: 'Flap 3',
      tagline: '3D Endless Arcade Game',
      description: 'A modern 3D vertical endless runner inspired by classic side-scrolling mechanics, with online features, cloud score sync, and offline play support.',
      image: 'assets/images/logos/logo.png',
      platform: 'Android',
      status: 'Coming Soon',
      features: ['3D Graphics', 'Cloud Sync', 'Leaderboards', 'Offline Play']
    }
  ];
}

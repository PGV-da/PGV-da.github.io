import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Certification {
  name: string;
  issuer: string;
  date: string;
  logo: string;
  logoImage?: string; // Optional: path to actual logo image
  link?: string;
  status: 'completed' | 'ongoing';
  skills?: string[];
}

@Component({
  selector: 'app-certifications',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="certifications" class="py-20 px-4 bg-gradient-to-br from-gray-50 to-blue-50">
      <div class="container mx-auto max-w-6xl">
        <!-- Achievements Section -->
        <div class="mb-16">
          <div class="text-center mb-12">
            <h2 class="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              <span class="gradient-text">Achievements</span>
            </h2>
            <div class="w-24 h-1 bg-primary mx-auto"></div>
          </div>

          <div class="grid md:grid-cols-2 gap-6">
            <div class="bg-white rounded-xl shadow-lg p-8 card-hover">
              <div class="flex items-start space-x-4">
                <div class="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-lg flex items-center justify-center text-3xl">
                  🏆
                </div>
                <div>
                  <h3 class="text-xl font-bold text-gray-900 mb-2">LeetCode Competition</h3>
                  <p class="text-gray-600 mb-2">
                    Ranked <span class="font-bold text-primary">2192</span> in LeetCode Weekly Contest 441
                  </p>
                  <p class="text-sm text-gray-500">Among 28,000+ participants worldwide</p>
                </div>
              </div>
            </div>

            <div class="bg-white rounded-xl shadow-lg p-8 card-hover">
              <div class="flex items-start space-x-4">
                <div class="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-green-400 to-teal-500 rounded-lg flex items-center justify-center text-3xl">
                  📦
                </div>
                <div>
                  <h3 class="text-xl font-bold text-gray-900 mb-2">Open Source Contribution</h3>
                  <p class="text-gray-600 mb-2">
                    Published <span class="font-bold text-primary">block_porn</span> package on pub.dev
                  </p>
                  <p class="text-sm text-gray-500">Helping Flutter developers build safer apps</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Certifications Section -->
        <div class="text-center mb-12">
          <h2 class="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            <span class="gradient-text">Certifications</span>
          </h2>
          <div class="w-24 h-1 bg-primary mx-auto mb-4"></div>
          <p class="text-xl text-gray-600 max-w-2xl mx-auto">
            Professional certifications and continuous learning journey
          </p>
        </div>

        <!-- Certifications Grid -->
        <div class="grid md:grid-cols-2 gap-8">
          <div 
            *ngFor="let cert of certifications; let i = index"
            class="bg-white rounded-xl shadow-lg overflow-hidden card-hover fade-in-up"
            [style.animation-delay]="(i * 0.1) + 's'"
          >
            <div class="p-8">
              <div class="flex items-start space-x-4">
                <!-- Logo -->
                <div class="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center text-3xl">
                  <img 
                    *ngIf="cert.logoImage" 
                    [src]="cert.logoImage" 
                    [alt]="cert.issuer + ' logo'"
                    class="w-12 h-12 object-contain rounded"
                    (error)="onLogoError($event, cert)"
                  />
                  <span *ngIf="!cert.logoImage" class="text-3xl">{{ cert.logo }}</span>
                </div>

                <!-- Content -->
                <div class="flex-1">
                  <div class="flex items-start justify-between mb-2">
                    <h3 class="text-xl font-bold text-gray-900 leading-tight">
                      {{ cert.name }}
                    </h3>
                    <span 
                      *ngIf="cert.status === 'ongoing'"
                      class="px-3 py-1 bg-yellow-100 text-yellow-700 text-xs rounded-full font-semibold"
                    >
                      Ongoing
                    </span>
                    <span 
                      *ngIf="cert.status === 'completed'"
                      class="px-3 py-1 bg-green-100 text-green-700 text-xs rounded-full font-semibold"
                    >
                      Completed
                    </span>
                  </div>

                  <p class="text-primary font-semibold mb-2">{{ cert.issuer }}</p>
                  <p class="text-gray-600 text-sm mb-4">{{ cert.date }}</p>

                  <a 
                    *ngIf="cert.link"
                    [href]="cert.link"
                    target="_blank"
                    class="inline-flex items-center space-x-1 text-primary hover:text-blue-700 font-medium text-sm transition-colors"
                  >
                    <span>View Certificate</span>
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                    </svg>
                  </a>
                </div>
              </div>

              <!-- Skills Learned -->
              <div class="mt-6 pt-6 border-t border-gray-200">
                <h4 class="text-sm font-semibold text-gray-700 mb-3">Key Skills</h4>
                <div class="flex flex-wrap gap-2">
                  <span 
                    *ngFor="let skill of cert.skills"
                    class="px-3 py-1 bg-blue-50 text-primary text-xs rounded-full font-medium"
                  >
                    {{ skill }}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Learning Platforms -->
        <div class="mt-16">
          <h3 class="text-2xl font-bold text-gray-900 text-center mb-8">Certified By</h3>
          <div class="flex flex-wrap justify-center items-center gap-8">
            <div class="flex items-center space-x-3 px-6 py-3 bg-white rounded-lg shadow-md">
              <span class="text-3xl">🔍</span>
              <span class="font-semibold text-gray-700">Google</span>
            </div>
            <div class="flex items-center space-x-3 px-6 py-3 bg-white rounded-lg shadow-md">
              <span class="text-3xl">🍃</span>
              <span class="font-semibold text-gray-700">MongoDB</span>
            </div>
            <div class="flex items-center space-x-3 px-6 py-3 bg-white rounded-lg shadow-md">
              <span class="text-3xl">🏢</span>
              <span class="font-semibold text-gray-700">Microsoft</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: []
})
export class CertificationsComponent {
  certifications: Certification[] = [
    {
      name: 'Crash Course on Python',
      issuer: 'Google',
      date: 'Completed',
      logo: '🐍',
      status: 'completed',
      skills: ['Python', 'Programming Fundamentals', 'Automation', 'Problem Solving']
    },
    {
      name: 'MongoDB for SQL Professionals',
      issuer: 'MongoDB',
      date: 'Completed',
      logo: '🍃',
      status: 'completed',
      skills: ['MongoDB', 'NoSQL', 'Database Design', 'Data Modeling']
    },
    {
      name: 'Project Management Fundamentals',
      issuer: 'Microsoft',
      date: 'Completed',
      logo: '📊',
      status: 'completed',
      skills: ['Project Management', 'Agile Methodology', 'Team Leadership', 'Planning']
    }
  ];

  // Fallback if logo image fails to load
  onLogoError(event: any, cert: Certification) {
    event.target.style.display = 'none';
    // Show emoji fallback by removing logoImage
    cert.logoImage = undefined;
  }
}

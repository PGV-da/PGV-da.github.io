import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Skill {
  name: string;
  level: number;
  icon: string;
  category: string;
}

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="skills" class="py-20 px-4 bg-gradient-to-br from-gray-50 to-blue-50">
      <div class="container mx-auto max-w-6xl">
        <div class="text-center mb-12">
          <h2 class="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            My <span class="gradient-text">Skills</span>
          </h2>
          <div class="w-24 h-1 bg-primary mx-auto mb-4"></div>
          <p class="text-xl text-gray-600 max-w-2xl mx-auto">
            Technologies and tools I work with to bring ideas to life
          </p>
        </div>

        <!-- Skills Grid -->
        <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          <div 
            *ngFor="let skill of skills; let i = index"
            class="bg-white rounded-xl p-6 shadow-lg card-hover fade-in-up"
            [style.animation-delay]="(i * 0.1) + 's'"
          >
            <div class="flex flex-col items-center text-center space-y-3">
              <!-- Icon -->
              <div class="w-16 h-16 flex items-center justify-center rounded-full bg-gradient-to-br from-blue-100 to-indigo-100">
                <span class="text-3xl">{{ skill.icon }}</span>
              </div>
              
              <!-- Name -->
              <h3 class="font-semibold text-gray-900">{{ skill.name }}</h3>
              
              <!-- Progress Bar -->
              <div class="w-full">
                <div class="h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div 
                    class="h-full bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full transition-all duration-1000"
                    [style.width]="skill.level + '%'"
                  ></div>
                </div>
                <p class="text-xs text-gray-500 mt-1">{{ skill.level }}%</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Skill Categories -->
        <div class="mt-16 grid md:grid-cols-3 gap-8">
          <div class="bg-white rounded-xl p-8 shadow-lg card-hover text-center">
            <div class="w-16 h-16 mx-auto mb-4 flex items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-indigo-600">
              <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"></path>
              </svg>
            </div>
            <h3 class="text-xl font-bold text-gray-900 mb-2">Mobile Development</h3>
            <p class="text-gray-600">Flutter & Dart for cross-platform apps with Firebase integration</p>
          </div>

          <div class="bg-white rounded-xl p-8 shadow-lg card-hover text-center">
            <div class="w-16 h-16 mx-auto mb-4 flex items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-indigo-600">
              <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
              </svg>
            </div>
            <h3 class="text-xl font-bold text-gray-900 mb-2">Web Development</h3>
            <p class="text-gray-600">Flask, Angular with REST APIs and database integration</p>
          </div>

          <div class="bg-white rounded-xl p-8 shadow-lg card-hover text-center">
            <div class="w-16 h-16 mx-auto mb-4 flex items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-indigo-600">
              <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
              </svg>
            </div>
            <h3 class="text-xl font-bold text-gray-900 mb-2">AI & Databases</h3>
            <p class="text-gray-600">Machine Learning, MySQL, MongoDB, PostgreSQL</p>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: []
})
export class SkillsComponent {
  skills: Skill[] = [
    // Languages
    { name: 'Python', level: 90, icon: '�', category: 'Languages' },
    { name: 'Dart', level: 92, icon: '🎯', category: 'Languages' },
    { name: 'JavaScript', level: 85, icon: '⚡', category: 'Languages' },
    { name: 'TypeScript', level: 87, icon: '�', category: 'Languages' },
    
    // Frameworks
    { name: 'Flutter', level: 93, icon: '📱', category: 'Frameworks' },
    { name: 'Flask', level: 88, icon: '🔥', category: 'Frameworks' },
    { name: 'Angular', level: 86, icon: '🅰️', category: 'Frameworks' },
    
    // Databases
    { name: 'MySQL', level: 85, icon: '🗄️', category: 'Databases' },
    { name: 'MongoDB', level: 83, icon: '🍃', category: 'Databases' },
    { name: 'PostgreSQL', level: 82, icon: '🐘', category: 'Databases' },
    
    // Tools
    { name: 'Git & GitHub', level: 90, icon: '📦', category: 'Tools' },
    { name: 'Firebase', level: 88, icon: '🔥', category: 'Tools' },
    { name: 'REST APIs', level: 89, icon: '🔌', category: 'Tools' },
    
    // Other Skills
    { name: 'Machine Learning', level: 80, icon: '🤖', category: 'Other' },
    { name: 'Agile Development', level: 85, icon: '�', category: 'Other' },
    { name: 'Problem Solving', level: 92, icon: '�', category: 'Other' }
  ];
}

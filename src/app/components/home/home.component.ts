import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="home" class="min-h-screen flex items-center justify-center pt-16 px-4 bg-gradient-to-br from-blue-50 to-indigo-100">
      <div class="container mx-auto">
        <div class="grid md:grid-cols-2 gap-12 items-center">
          <!-- Text Content -->
          <div class="space-y-6 fade-in-up">
            <div class="space-y-2">
              <h1 class="text-5xl md:text-6xl font-bold text-gray-900">
                Hi, I'm <span class="gradient-text">Vikram</span> 👋
              </h1>
              <h2 class="text-2xl md:text-3xl text-gray-700">
                Software Developer | Flutter & Python Developer
              </h2>
            </div>
            
            <div class="flex items-center space-x-2 text-xl text-gray-600">
              <span>I'm a</span>
              <span class="font-semibold text-primary typing-text">{{ currentRole }}</span>
            </div>

            <p class="text-lg text-gray-600 leading-relaxed">
              Enthusiastic Software Developer with hands-on experience in building mobile, web, and AI-driven applications using Flutter, Python, Firebase, Flask, and Angular. Strong in databases, REST APIs, and problem-solving.
            </p>

            <!-- CTA Buttons -->
            <div class="flex flex-wrap gap-4 pt-4">
              <a 
                href="#contact"
                class="px-8 py-3 bg-primary text-white rounded-full font-semibold btn-hover"
              >
                Contact Me
              </a>
              <a 
                href="#projects"
                class="px-8 py-3 border-2 border-primary text-primary rounded-full font-semibold btn-hover"
              >
                View Projects
              </a>
            </div>

            <!-- Social Links -->
            <div class="flex space-x-4 pt-4">
              <a 
                href="https://github.com/PGV-da" 
                target="_blank"
                class="w-12 h-12 flex items-center justify-center rounded-full bg-white shadow-md hover:shadow-lg transition-all hover:scale-110"
                aria-label="GitHub"
              >
                <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
              <a 
                href="https://linkedin.com/in/vikram283/" 
                target="_blank"
                class="w-12 h-12 flex items-center justify-center rounded-full bg-white shadow-md hover:shadow-lg transition-all hover:scale-110"
                aria-label="LinkedIn"
              >
                <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
              <a 
                href="https://leetcode.com/u/vikram283/" 
                target="_blank"
                class="w-12 h-12 flex items-center justify-center rounded-full bg-white shadow-md hover:shadow-lg transition-all hover:scale-110"
                aria-label="LeetCode"
              >
                <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z" id="mainIconPathAttribute"></path>
                </svg>
              </a>
            </div>
          </div>

          <!-- Hero Image/Illustration -->
          <div class="relative fade-in">
            <div class="relative w-full h-96 md:h-[500px] flex items-center justify-center">
              <div class="absolute inset-0 bg-gradient-to-r from-blue-400 to-indigo-600 rounded-full blur-3xl opacity-20 animate-pulse"></div>
              <div class="relative w-80 h-80 md:w-96 md:h-96 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center shadow-2xl">
                <svg class="w-48 h-48 md:w-64 md:h-64 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .typing-text {
      border-right: 2px solid #2563eb;
      animation: blink 0.7s step-end infinite;
    }

    @keyframes blink {
      from, to { border-color: transparent }
      50% { border-color: #2563eb }
    }
  `]
})
export class HomeComponent implements OnInit {
  currentRole = '';
  roles = [
    'Freelance Developer',
    'Flutter Developer',
    'Python Programmer',
    'AI Enthusiast',
    'Problem Solver',
    'Full-Stack Developer'
  ];
  roleIndex = 0;

  ngOnInit() {
    this.typeRole();
  }

  typeRole() {
    let charIndex = 0;
    const currentText = this.roles[this.roleIndex];
    
    const typeInterval = setInterval(() => {
      if (charIndex < currentText.length) {
        this.currentRole = currentText.substring(0, charIndex + 1);
        charIndex++;
      } else {
        clearInterval(typeInterval);
        setTimeout(() => {
          this.deleteRole();
        }, 2000);
      }
    }, 100);
  }

  deleteRole() {
    let charIndex = this.currentRole.length;
    
    const deleteInterval = setInterval(() => {
      if (charIndex > 0) {
        this.currentRole = this.currentRole.substring(0, charIndex - 1);
        charIndex--;
      } else {
        clearInterval(deleteInterval);
        this.roleIndex = (this.roleIndex + 1) % this.roles.length;
        setTimeout(() => {
          this.typeRole();
        }, 500);
      }
    }, 50);
  }
}

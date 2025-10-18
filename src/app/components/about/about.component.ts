import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="about" class="py-20 px-4 bg-white">
      <div class="container mx-auto max-w-6xl">
        <div class="text-center mb-12">
          <h2 class="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            About <span class="gradient-text">Me</span>
          </h2>
          <div class="w-24 h-1 bg-primary mx-auto"></div>
        </div>

        <div class="grid md:grid-cols-2 gap-12 items-center">
          <!-- Image -->
          <div class="relative fade-in-up">
            <div class="relative w-full max-w-md mx-auto">
              <div class="absolute -inset-4 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-2xl blur-xl opacity-30"></div>
              <div class="relative bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl p-1">
                <div class="bg-white rounded-xl p-8 flex items-center justify-center h-80">
                  <svg class="w-48 h-48 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                  </svg>
                </div>
              </div>
            </div>
          </div>

          <!-- Content -->
          <div class="space-y-6 fade-in-up">
            <h3 class="text-3xl font-bold text-gray-900">
              Software Developer & Problem Solver
            </h3>
            
            <p class="text-lg text-gray-600 leading-relaxed">
              I'm Vikram P, an enthusiastic Software Developer with hands-on experience in building 
              mobile, web, and AI-driven applications. I specialize in Flutter, Python, Firebase, 
              Flask, and Angular, with a strong foundation in databases, REST APIs, and problem-solving.
            </p>

            <p class="text-lg text-gray-600 leading-relaxed">
              With published apps on Google Play Store and open-source contributions on pub.dev, 
              I'm passionate about delivering impactful software solutions. Currently pursuing my 
              MCA at Anna University, Chennai, while actively working on innovative projects that 
              combine technology with real-world impact.
            </p>

            <div class="space-y-4">
              <div class="flex items-start space-x-3">
                <svg class="w-6 h-6 text-primary mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <p class="text-gray-700">
                  <span class="font-semibold">Location:</span> Chennai, India
                </p>
              </div>
              
              <div class="flex items-start space-x-3">
                <svg class="w-6 h-6 text-primary mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <p class="text-gray-700">
                  <span class="font-semibold">Focus:</span> Full-Stack Development, Mobile Apps, AI Solutions
                </p>
              </div>
              
              <div class="flex items-start space-x-3">
                <svg class="w-6 h-6 text-primary mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <p class="text-gray-700">
                  <span class="font-semibold">Education:</span> MCA at Anna University (CGPA: 8.0)
                </p>
              </div>
            </div>

            <div class="pt-4">
              <a 
                href="assets/resume.pdf" 
                download
                class="inline-flex items-center space-x-2 px-8 py-3 bg-primary text-white rounded-full font-semibold btn-hover"
              >
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                </svg>
                <span>Download Resume</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: []
})
export class AboutComponent {}

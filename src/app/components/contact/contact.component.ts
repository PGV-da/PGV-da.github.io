import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="contact" class="py-20 px-4 bg-white">
      <div class="container mx-auto max-w-6xl">
        <div class="text-center mb-12">
          <h2 class="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Get In <span class="gradient-text">Touch</span>
          </h2>
          <div class="w-24 h-1 bg-primary mx-auto mb-4"></div>
          <p class="text-xl text-gray-600 max-w-2xl mx-auto">
            Have a project in mind? Let's work together to create something amazing!
          </p>
        </div>

        <div class="max-w-4xl mx-auto">
          <!-- Contact Info -->
          <div class="space-y-8">
            <div class="space-y-6 text-center">
              <h3 class="text-2xl font-bold text-gray-900">Let's Connect</h3>
              <p class="text-gray-600 leading-relaxed">
                I'm always open to discussing new projects, creative ideas, or opportunities 
                to be part of your visions. Feel free to reach out through any of these channels.
              </p>
            </div>

            <!-- Contact Cards -->
            <div class="grid md:grid-cols-2 gap-6">
              <a 
                href="mailto:vikramji283&#64;gmail.com"
                class="flex items-start space-x-4 p-4 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl hover:shadow-lg transition-all"
              >
                <div class="w-12 h-12 flex items-center justify-center rounded-lg bg-primary text-white flex-shrink-0">
                  <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                  </svg>
                </div>
                <div>
                  <h4 class="font-semibold text-gray-900">Email</h4>
                  <p class="text-gray-600 text-sm">vikramji283&#64;gmail.com</p>
                </div>
              </a>

              <a 
                href="tel:+919487885752"
                class="flex items-start space-x-4 p-4 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl hover:shadow-lg transition-all"
              >
                <div class="w-12 h-12 flex items-center justify-center rounded-lg bg-primary text-white flex-shrink-0">
                  <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                  </svg>
                </div>
                <div>
                  <h4 class="font-semibold text-gray-900">Phone</h4>
                  <p class="text-gray-600 text-sm">+91 9487885752</p>
                </div>
              </a>

              <a 
                href="https://github.com/PGV-da"
                target="_blank"
                class="flex items-start space-x-4 p-4 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl hover:shadow-lg transition-all"
              >
                <div class="w-12 h-12 flex items-center justify-center rounded-lg bg-primary text-white flex-shrink-0">
                  <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </div>
                <div>
                  <h4 class="font-semibold text-gray-900">GitHub</h4>
                  <p class="text-gray-600 text-sm">&#64;PGV-da</p>
                </div>
              </a>

              <a 
                href="https://linkedin.com/in/vikram283"
                target="_blank"
                class="flex items-start space-x-4 p-4 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl hover:shadow-lg transition-all"
              >
                <div class="w-12 h-12 flex items-center justify-center rounded-lg bg-primary text-white flex-shrink-0">
                  <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </div>
                <div>
                  <h4 class="font-semibold text-gray-900">LinkedIn</h4>
                  <p class="text-gray-600 text-sm">linkedin.com/in/vikram283</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="bg-secondary text-white py-8 px-4">
      <div class="container mx-auto max-w-6xl">
        <div class="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p class="text-center md:text-left">
            © 2025 Vikram
          </p>
          <div class="flex space-x-6">
            <a href="#home" class="hover:text-accent transition-colors">Home</a>
            <a href="#about" class="hover:text-accent transition-colors">About</a>
            <a href="#projects" class="hover:text-accent transition-colors">Projects</a>
            <a href="#contact" class="hover:text-accent transition-colors">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  `,
  styles: []
})
export class ContactComponent {
}

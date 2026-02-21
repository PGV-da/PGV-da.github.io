import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-flap3-account-deletion',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <div class="min-h-screen bg-gray-50">
      <!-- Header -->
      <nav class="fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
        <div class="container mx-auto px-4 sm:px-6 lg:px-8">
          <div class="flex justify-between items-center h-16">
            <a routerLink="/" class="text-2xl font-bold gradient-text">
              Vikram
            </a>
            <a 
              routerLink="/myapps/flap3" 
              class="px-4 py-2 text-gray-600 hover:text-primary transition-colors font-medium"
            >
              ← Back to Flap 3
            </a>
          </div>
        </div>
      </nav>

      <!-- Content -->
      <main class="pt-24 pb-16 px-4">
        <div class="container mx-auto max-w-3xl">
          <div class="bg-white rounded-2xl shadow-lg p-8 md:p-12">
            <!-- Header -->
            <div class="text-center mb-10">
              <img 
                src="assets/images/logos/logo.png" 
                alt="Flap 3"
                class="w-20 h-20 mx-auto rounded-2xl shadow-lg mb-4"
              />
              <h1 class="text-3xl md:text-4xl font-bold text-gray-900 mb-2">Account & Data Deletion</h1>
              <p class="text-gray-500">Flap 3 - 3D Endless Arcade Game</p>
            </div>

            <!-- Deletion Content -->
            <div class="space-y-8">

              <section>
                <p class="text-gray-600 leading-relaxed text-lg">
                  If you would like to delete your Flap 3 account and associated data, 
                  please send an email to:
                </p>
                <div class="bg-blue-50 rounded-xl p-4 mt-4 text-center">
                  <a href="mailto:vikramji283&#64;gmail.com?subject=Account%20Deletion%20Request" 
                     class="text-xl font-bold text-primary hover:underline">
                    vikramji283&#64;gmail.com
                  </a>
                </div>
              </section>

              <section>
                <h2 class="text-xl font-bold text-gray-900 mb-3">📧 Include the following information</h2>
                <ul class="space-y-2 text-gray-600 ml-4">
                  <li class="flex items-start">
                    <span class="text-primary mr-2 mt-1">•</span>
                    <span>Registered email address</span>
                  </li>
                  <li class="flex items-start">
                    <span class="text-primary mr-2 mt-1">•</span>
                    <span>Subject: <strong>Account Deletion Request</strong></span>
                  </li>
                </ul>
              </section>

              <section>
                <h2 class="text-xl font-bold text-gray-900 mb-3">🗑️ What will be deleted?</h2>
                <div class="bg-red-50 rounded-xl p-6">
                  <ul class="space-y-3 text-gray-700">
                    <li class="flex items-center">
                      <svg class="w-5 h-5 text-red-500 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path>
                      </svg>
                      <span>User account</span>
                    </li>
                    <li class="flex items-center">
                      <svg class="w-5 h-5 text-red-500 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path>
                      </svg>
                      <span>High score data</span>
                    </li>
                    <li class="flex items-center">
                      <svg class="w-5 h-5 text-red-500 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path>
                      </svg>
                      <span>Authentication data</span>
                    </li>
                  </ul>
                </div>
              </section>

              <section class="bg-yellow-50 rounded-xl p-6">
                <p class="text-gray-700 text-center">
                  <span class="text-2xl">⏱️</span><br>
                  <strong>Deletion will be processed within 7 days.</strong>
                </p>
              </section>

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
  `]
})
export class Flap3AccountDeletionComponent {}

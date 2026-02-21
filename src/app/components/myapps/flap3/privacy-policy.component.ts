import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-flap3-privacy-policy',
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
              <h1 class="text-3xl md:text-4xl font-bold text-gray-900 mb-2">Privacy Policy</h1>
              <p class="text-gray-500">Flap 3 - 3D Endless Arcade Game</p>
              <p class="text-sm text-gray-400 mt-2">Last updated: {{ lastUpdated }}</p>
            </div>

            <!-- Policy Content -->
            <div class="prose prose-lg max-w-none space-y-8">
              
              <section>
                <h2 class="text-xl font-bold text-gray-900 mb-3">1. Introduction</h2>
                <p class="text-gray-600 leading-relaxed">
                  Welcome to Flap 3 ("we," "our," or "us"). This Privacy Policy explains how we collect, 
                  use, disclose, and safeguard your information when you use our mobile application 
                  Flap 3 (the "App"). Please read this privacy policy carefully. If you do not agree 
                  with the terms of this privacy policy, please do not access the App.
                </p>
              </section>

              <section>
                <h2 class="text-xl font-bold text-gray-900 mb-3">2. Information We Collect</h2>
                
                <h3 class="text-lg font-semibold text-gray-800 mt-4 mb-2">2.1 Personal Information</h3>
                <p class="text-gray-600 leading-relaxed">
                  When you choose to create an account (Account Mode), we may collect:
                </p>
                <ul class="list-disc list-inside text-gray-600 space-y-1 ml-4">
                  <li>Email address (for email authentication)</li>
                  <li>Username/display name</li>
                  <li>Google account information (if using Google Sign-In)</li>
                </ul>

                <h3 class="text-lg font-semibold text-gray-800 mt-4 mb-2">2.2 Game Data</h3>
                <p class="text-gray-600 leading-relaxed">
                  We collect gameplay data to provide our services:
                </p>
                <ul class="list-disc list-inside text-gray-600 space-y-1 ml-4">
                  <li>Game scores and high scores</li>
                  <li>Total games played</li>
                  <li>Last played timestamps</li>
                  <li>Game session data</li>
                </ul>

                <h3 class="text-lg font-semibold text-gray-800 mt-4 mb-2">2.3 Analytics Data</h3>
                <p class="text-gray-600 leading-relaxed">
                  We use Firebase Analytics to collect:
                </p>
                <ul class="list-disc list-inside text-gray-600 space-y-1 ml-4">
                  <li>Session duration</li>
                  <li>App interactions and events</li>
                  <li>Device information (model, OS version)</li>
                  <li>Approximate location (country/region level only)</li>
                  <li>App performance metrics</li>
                </ul>
              </section>

              <section>
                <h2 class="text-xl font-bold text-gray-900 mb-3">3. Guest Mode</h2>
                <p class="text-gray-600 leading-relaxed">
                  Flap 3 offers a Guest Mode that does not require any account creation. In Guest Mode:
                </p>
                <ul class="list-disc list-inside text-gray-600 space-y-1 ml-4">
                  <li>No personal information is collected</li>
                  <li>Scores are stored locally on your device only</li>
                  <li>No data is synced to external servers</li>
                  <li>The game works fully offline</li>
                </ul>
              </section>

              <section>
                <h2 class="text-xl font-bold text-gray-900 mb-3">4. How We Use Your Information</h2>
                <p class="text-gray-600 leading-relaxed">
                  We use the information we collect to:
                </p>
                <ul class="list-disc list-inside text-gray-600 space-y-1 ml-4">
                  <li>Create and manage your account</li>
                  <li>Save and sync your game progress across devices</li>
                  <li>Display global leaderboards</li>
                  <li>Improve our App and gaming experience</li>
                  <li>Analyze usage trends and optimize performance</li>
                  <li>Provide customer support</li>
                </ul>
              </section>

              <section>
                <h2 class="text-xl font-bold text-gray-900 mb-3">5. Data Storage and Security</h2>
                <p class="text-gray-600 leading-relaxed">
                  Your data is stored securely using Firebase services provided by Google. We implement 
                  appropriate technical and organizational measures to protect your personal information 
                  against unauthorized access, alteration, disclosure, or destruction.
                </p>
                <ul class="list-disc list-inside text-gray-600 space-y-1 ml-4">
                  <li>Data is encrypted in transit and at rest</li>
                  <li>Firebase Authentication secures user credentials</li>
                  <li>Firestore security rules restrict data access</li>
                </ul>
              </section>

              <section>
                <h2 class="text-xl font-bold text-gray-900 mb-3">6. Third-Party Services</h2>
                <p class="text-gray-600 leading-relaxed">
                  We use the following third-party services:
                </p>
                <ul class="list-disc list-inside text-gray-600 space-y-1 ml-4">
                  <li><strong>Firebase Authentication:</strong> For user account management</li>
                  <li><strong>Cloud Firestore:</strong> For storing game data and leaderboards</li>
                  <li><strong>Firebase Analytics:</strong> For usage analytics</li>
                  <li><strong>Google Sign-In:</strong> For optional social authentication</li>
                </ul>
                <p class="text-gray-600 leading-relaxed mt-2">
                  These services have their own privacy policies. We encourage you to review 
                  <a href="https://policies.google.com/privacy" target="_blank" class="text-primary hover:underline">Google's Privacy Policy</a>.
                </p>
              </section>

              <section>
                <h2 class="text-xl font-bold text-gray-900 mb-3">7. Children's Privacy</h2>
                <p class="text-gray-600 leading-relaxed">
                  Flap 3 is intended for general audiences. We do not knowingly collect personal 
                  information from children under 13 years of age. If we discover that a child under 
                  13 has provided us with personal information, we will delete such information from 
                  our servers immediately.
                </p>
              </section>

              <section>
                <h2 class="text-xl font-bold text-gray-900 mb-3">8. Your Data Rights</h2>
                <p class="text-gray-600 leading-relaxed">
                  You have the following rights regarding your data:
                </p>
                <ul class="list-disc list-inside text-gray-600 space-y-1 ml-4">
                  <li><strong>Access:</strong> Request a copy of your personal data</li>
                  <li><strong>Correction:</strong> Request correction of inaccurate data</li>
                  <li><strong>Deletion:</strong> Request deletion of your account and data</li>
                  <li><strong>Portability:</strong> Request your data in a portable format</li>
                </ul>
                <p class="text-gray-600 leading-relaxed mt-2">
                  To exercise these rights, please contact us using the information provided below.
                </p>
              </section>

              <section>
                <h2 class="text-xl font-bold text-gray-900 mb-3">9. Data Retention</h2>
                <p class="text-gray-600 leading-relaxed">
                  We retain your personal information for as long as your account is active or as 
                  needed to provide you services. If you delete your account, we will delete your 
                  personal data within 30 days, except where we are required to retain it for legal purposes.
                </p>
              </section>

              <section>
                <h2 class="text-xl font-bold text-gray-900 mb-3">10. Changes to This Policy</h2>
                <p class="text-gray-600 leading-relaxed">
                  We may update this Privacy Policy from time to time. We will notify you of any 
                  changes by posting the new Privacy Policy on this page and updating the "Last updated" 
                  date. You are advised to review this Privacy Policy periodically for any changes.
                </p>
              </section>

              <section>
                <h2 class="text-xl font-bold text-gray-900 mb-3">11. Contact Us</h2>
                <p class="text-gray-600 leading-relaxed">
                  If you have any questions or concerns about this Privacy Policy or our data practices, 
                  please contact us at:
                </p>
                <div class="bg-gray-50 rounded-xl p-4 mt-3">
                  <p class="text-gray-700">
                    <strong>Developer:</strong> Vikram<br>
                    <strong>Email:</strong> <a href="mailto:vikram.pgv&#64;gmail.com" class="text-primary hover:underline">vikram.pgv&#64;gmail.com</a><br>
                    <strong>Website:</strong> <a href="https://pgv-da.github.io" target="_blank" class="text-primary hover:underline">https://pgv-da.github.io</a>
                  </p>
                </div>
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
export class Flap3PrivacyPolicyComponent {
  lastUpdated = 'February 22, 2026';
}

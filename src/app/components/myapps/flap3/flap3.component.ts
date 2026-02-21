import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-flap3',
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
            <div class="flex space-x-4">
              <a 
                routerLink="/myapps" 
                class="px-4 py-2 text-gray-600 hover:text-primary transition-colors font-medium"
              >
                ← My Apps
              </a>
            </div>
          </div>
        </div>
      </nav>

      <!-- Hero Section -->
      <section class="pt-24 pb-12 px-4">
        <div class="container mx-auto max-w-4xl">
          <div class="bg-white rounded-3xl shadow-xl overflow-hidden">
            <!-- Hero Banner -->
            <div class="bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 p-8 md:p-12 text-white text-center">
              <img 
                src="assets/images/logos/logo.png" 
                alt="Flap 3"
                class="w-32 h-32 mx-auto rounded-3xl shadow-2xl mb-6"
              />
              <h1 class="text-4xl md:text-5xl font-bold mb-2">Flap 3</h1>
              <p class="text-xl opacity-90 mb-4">🐤 3D Endless Arcade Game</p>
              <div class="flex flex-wrap justify-center gap-3 mb-6">
                <span class="px-4 py-2 bg-white/20 rounded-full text-sm font-medium">
                  📱 Android
                </span>
                <span class="px-4 py-2 bg-white/20 rounded-full text-sm font-medium">
                  🎮 Arcade
                </span>
                <span class="px-4 py-2 bg-white/20 rounded-full text-sm font-medium">
                  ☁️ Cloud Sync
                </span>
              </div>
              <a 
                href="#"
                class="inline-flex items-center space-x-2 px-8 py-3 bg-white text-primary rounded-full font-bold shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <svg class="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
                </svg>
                <span>Coming Soon on Play Store</span>
              </a>
            </div>

            <!-- Content -->
            <div class="p-8 md:p-12 space-y-10">
              <!-- Description -->
              <div>
                <h2 class="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <span class="text-3xl mr-3">🎯</span> About the Game
                </h2>
                <p class="text-gray-600 leading-relaxed text-lg">
                  A modern 3D vertical endless runner inspired by classic side-scrolling mechanics, 
                  enhanced with online features, cloud score sync, and offline play support. 
                  Control a flying bird through endless pipe obstacles - tap to flap upward while 
                  gravity pulls you down. Score points for each pipe successfully passed!
                </p>
              </div>

              <!-- Game Modes -->
              <div class="grid md:grid-cols-2 gap-6">
                <div class="bg-green-50 rounded-2xl p-6">
                  <h3 class="text-xl font-bold text-green-800 mb-3 flex items-center">
                    <span class="text-2xl mr-2">🟢</span> Guest Mode
                  </h3>
                  <ul class="space-y-2 text-green-700">
                    <li class="flex items-center"><span class="mr-2">✓</span> No login required</li>
                    <li class="flex items-center"><span class="mr-2">✓</span> Scores saved locally</li>
                    <li class="flex items-center"><span class="mr-2">✓</span> Works fully offline</li>
                  </ul>
                </div>
                <div class="bg-blue-50 rounded-2xl p-6">
                  <h3 class="text-xl font-bold text-blue-800 mb-3 flex items-center">
                    <span class="text-2xl mr-2">🔵</span> Account Mode
                  </h3>
                  <ul class="space-y-2 text-blue-700">
                    <li class="flex items-center"><span class="mr-2">✓</span> Email/Google login</li>
                    <li class="flex items-center"><span class="mr-2">✓</span> Global leaderboard</li>
                    <li class="flex items-center"><span class="mr-2">✓</span> Cloud sync across devices</li>
                  </ul>
                </div>
              </div>

              <!-- Features -->
              <div>
                <h2 class="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <span class="text-3xl mr-3">✨</span> Key Features
                </h2>
                <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  <div *ngFor="let feature of features" class="bg-gray-50 rounded-xl p-4 hover:bg-gray-100 transition-colors">
                    <span class="text-2xl">{{ feature.icon }}</span>
                    <h4 class="font-semibold text-gray-900 mt-2">{{ feature.title }}</h4>
                    <p class="text-sm text-gray-600">{{ feature.description }}</p>
                  </div>
                </div>
              </div>

              <!-- Tech Stack -->
              <div>
                <h2 class="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <span class="text-3xl mr-3">🛠️</span> Built With
                </h2>
                <div class="flex flex-wrap gap-3">
                  <span *ngFor="let tech of techStack" 
                        class="px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 text-primary rounded-full font-medium">
                    {{ tech }}
                  </span>
                </div>
              </div>

              <!-- Gameplay -->
              <div>
                <h2 class="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <span class="text-3xl mr-3">🕹️</span> Gameplay Mechanics
                </h2>
                <div class="bg-gray-50 rounded-2xl p-6 space-y-4">
                  <div class="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 class="font-semibold text-gray-900 mb-2">Controls</h4>
                      <ul class="text-gray-600 space-y-1">
                        <li>• Single tap → Bird flaps upward</li>
                        <li>• Continuous gravity pulls downward</li>
                        <li>• Auto-scrolling world</li>
                      </ul>
                    </div>
                    <div>
                      <h4 class="font-semibold text-gray-900 mb-2">Difficulty Progression</h4>
                      <ul class="text-gray-600 space-y-1">
                        <li>• 0-30s: Slow speed, Large gaps</li>
                        <li>• 30-60s: Medium speed, Medium gaps</li>
                        <li>• 60s+: Fast speed, Small gaps</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Links -->
              <div class="border-t pt-8">
                <h2 class="text-2xl font-bold text-gray-900 mb-4">📄 Legal</h2>
                <div class="flex flex-wrap gap-4">
                  <a 
                    routerLink="/myapps/flap3/privacy-policy"
                    class="inline-flex items-center space-x-2 px-6 py-3 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors font-medium"
                  >
                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                    </svg>
                    <span>Privacy Policy</span>
                  </a>
                  <a 
                    routerLink="/myapps/flap3/account-deletion"
                    class="inline-flex items-center space-x-2 px-6 py-3 bg-red-50 text-red-700 rounded-lg hover:bg-red-100 transition-colors font-medium"
                  >
                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path>
                    </svg>
                    <span>Account Deletion</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

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
export class Flap3Component {
  features = [
    { icon: '🎨', title: 'Low-Poly 3D Graphics', description: 'Beautiful cartoon-style visuals with depth parallax' },
    { icon: '☁️', title: 'Cloud Score Sync', description: 'Your scores sync across all devices' },
    { icon: '🏆', title: 'Global Leaderboard', description: 'Compete with players worldwide' },
    { icon: '📴', title: 'Offline Play', description: 'Play anytime, anywhere without internet' },
    { icon: '🐤', title: 'Smooth Physics', description: 'Realistic bird movement with gravity simulation' },
    { icon: '⚡', title: 'Fast Performance', description: 'Optimized for smooth 60 FPS gameplay' },
    { icon: '🌙', title: 'Day/Night Cycle', description: 'Dynamic environment changes' },
    { icon: '🎵', title: 'Background Music', description: 'Immersive audio layers' },
    { icon: '🔐', title: 'Firebase Auth', description: 'Secure Google & Email login' }
  ];

  techStack = [
    'Flutter',
    'Flame Engine',
    'Firebase Auth',
    'Cloud Firestore',
    'Firebase Analytics',
    'Forge2D Physics'
  ];
}

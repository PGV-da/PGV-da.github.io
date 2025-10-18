import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  template: `
    <nav 
      class="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      [class.glass]="isScrolled"
      [class.bg-white]="isScrolled"
      [class.shadow-md]="isScrolled"
    >
      <div class="container mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between items-center h-16">
          <!-- Logo -->
          <a href="#home" class="text-2xl font-bold gradient-text">
            Vikram
          </a>

          <!-- Desktop Menu -->
          <div class="hidden md:flex space-x-8">
            <a 
              *ngFor="let item of menuItems" 
              [href]="'#' + item.link"
              class="nav-link text-gray-700 hover:text-primary transition-colors duration-300 font-medium"
              [class.active]="activeSection === item.link"
            >
              {{ item.label }}
            </a>
          </div>

          <!-- Mobile Menu Button -->
          <button 
            class="md:hidden p-2"
            (click)="toggleMobileMenu()"
          >
            <svg 
              class="w-6 h-6" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                *ngIf="!isMobileMenuOpen"
                stroke-linecap="round" 
                stroke-linejoin="round" 
                stroke-width="2" 
                d="M4 6h16M4 12h16M4 18h16"
              />
              <path 
                *ngIf="isMobileMenuOpen"
                stroke-linecap="round" 
                stroke-linejoin="round" 
                stroke-width="2" 
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        <!-- Mobile Menu -->
        <div 
          *ngIf="isMobileMenuOpen"
          class="md:hidden pb-4 fade-in"
        >
          <a 
            *ngFor="let item of menuItems"
            [href]="'#' + item.link"
            class="block py-2 text-gray-700 hover:text-primary transition-colors duration-300"
            (click)="closeMobileMenu()"
          >
            {{ item.label }}
          </a>
        </div>
      </div>
    </nav>
  `,
  styles: [`
    .nav-link {
      position: relative;
    }

    .nav-link::after {
      content: '';
      position: absolute;
      bottom: -4px;
      left: 0;
      width: 0;
      height: 2px;
      background: #2563eb;
      transition: width 0.3s ease;
    }

    .nav-link:hover::after,
    .nav-link.active::after {
      width: 100%;
    }
  `]
})
export class NavbarComponent {
  isScrolled = false;
  isMobileMenuOpen = false;
  activeSection = 'home';

  menuItems = [
    { label: 'Home', link: 'home' },
    { label: 'About', link: 'about' },
    { label: 'Skills', link: 'skills' },
    { label: 'Projects', link: 'projects' },
    { label: 'Certifications', link: 'certifications' },
    { label: 'Contact', link: 'contact' }
  ];

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isScrolled = window.pageYOffset > 50;
    this.updateActiveSection();
  }

  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }

  closeMobileMenu() {
    this.isMobileMenuOpen = false;
  }

  updateActiveSection() {
    const sections = this.menuItems.map(item => item.link);
    
    for (const section of sections) {
      const element = document.getElementById(section);
      if (element) {
        const rect = element.getBoundingClientRect();
        if (rect.top <= 100 && rect.bottom >= 100) {
          this.activeSection = section;
          break;
        }
      }
    }
  }
}

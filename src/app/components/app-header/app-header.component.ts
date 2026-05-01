import { CommonModule } from '@angular/common';
import { Component, Input, inject } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <header class="top-nav full-bleed top-nav-bleed">
      <p class="brand">Server<span>96</span></p>
      <nav aria-label="Primary navigation">
        @for (item of navItems; track item) {
          <a [routerLink]="routeForNav(item)">{{ item }}</a>
        }
      </nav>
      <a class="contact-link" [routerLink]="'/contact-us'">Contact Us</a>
    </header>
  `,
  styles: [`
    .top-nav {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 1rem;
      padding: 0.9rem max(1rem, calc((100vw - var(--content-max, 1140px)) / 2));
      border-bottom: 1px solid var(--line-color, #dddddd);
    }

    .brand {
      margin: 0;
      font-size: 1.15rem;
      font-weight: 700;
      letter-spacing: -0.04em;
    }

    .brand span {
      color: var(--accent-color, #ff7a2f);
    }

    nav {
      display: flex;
      gap: 1.25rem;
    }

    a {
      text-decoration: none;
      color: var(--ink-soft, #5c5f68);
    }

    nav a {
      font-size: 0.8rem;
      text-transform: uppercase;
      letter-spacing: 0.06em;
    }

    .contact-link {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      min-height: 2rem;
      border: 1px solid var(--accent-color, #ff7a2f);
      border-radius: 999px;
      color: var(--accent-color, #ff7a2f);
      text-transform: uppercase;
      letter-spacing: 0.04em;
      font-size: 0.78rem;
      font-weight: 600;
      padding: 0.5rem 0.9rem;
    }

    @media (max-width: 920px) {
      nav {
        display: none;
      }

      .top-nav {
        padding-left: 1rem;
        padding-right: 1rem;
      }
    }
  `]
})
export class AppHeaderComponent {
  @Input() navItems: string[] = ['Home', 'About', 'Work', 'Pricing'];

  routeForNav(item: string): string {
    const map: Record<string, string> = {
      Home: '/',
      About: '/about',
      Work: '/work',
      Pricing: '/pricing'
    };

    return map[item] ?? '/';
  }
}

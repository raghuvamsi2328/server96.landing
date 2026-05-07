import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <header class="top-nav full-bleed top-nav-bleed">
      <a class="brand" [routerLink]="'/'" aria-label="Server96 home">
        <span class="brand-text">server<span class="brand-accent">96</span></span>
        <span class="brand-mark">
          <span class="mark-lines" aria-hidden="true">
            <span class="line-orange"></span>
            <span class="line-black"></span>
          </span>
        </span>
      </a>
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
      position: relative;
      min-height: 72px;
      padding: 0;
      border-bottom: 1px solid var(--line-color, #dddddd);
    }

    .brand {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 0.28rem;
      text-decoration: none;
      position: absolute;
      left: max(1rem, calc((100vw - var(--content-max, 1140px)) / 2));
      top: 50%;
      transform: translateY(-50%);
      z-index: 2;
    }

    .brand-text {
      font-family: 'Orbitron', sans-serif;
      font-size: 1.85rem;
      font-weight: 700;
      font-style: italic;
      text-transform: lowercase;
      letter-spacing: -0.02em;
      color: #111111;
      line-height: 1;
    }

    .brand-accent {
      color: var(--accent-color, #ff7a2f);
    }

    .brand-mark {
      display: inline-flex;
      align-items: center;
      gap: 0.4rem;
      margin-left: 0.08rem;
    }

    .mark-lines {
      display: inline-flex;
      align-items: center;
      gap: 0.38rem;
    }

    .line-orange,
    .line-black {
      display: inline-block;
      height: 3px;
      clip-path: polygon(12% 0, 100% 0, 88% 100%, 0 100%);
    }

    .line-orange {
      width: 2.5rem;
      background: var(--accent-color, #ff7a2f);
      animation: orangeBlink 1.4s steps(1, end) infinite;
    }

    .line-black {
      width: 2.05rem;
      background: #222222;
      opacity: 0.58;
    }

    @keyframes orangeBlink {
      0%, 45%, 100% {
        opacity: 1;
      }

      46%, 54% {
        opacity: 0.2;
      }

      55%, 60% {
        opacity: 1;
      }

      61%, 66% {
        opacity: 0.15;
      }
    }

    nav {
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 1.25rem;
    }

    a {
      text-decoration: none;
      color: var(--ink-soft, #5c5f68);
    }

    nav a {
      display: inline-flex;
      align-items: center;
      height: 2rem;
      line-height: 1;
      font-size: 0.8rem;
      text-transform: uppercase;
      letter-spacing: 0.06em;
    }

    .contact-link {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      position: absolute;
      right: max(1rem, calc((100vw - var(--content-max, 1140px)) / 2));
      top: 50%;
      transform: translateY(-50%);
      z-index: 2;
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
        min-height: 64px;
      }

      .brand {
        left: 1rem;
      }

      .contact-link {
        right: 1rem;
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

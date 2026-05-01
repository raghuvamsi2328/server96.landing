import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { RouterLink } from '@angular/router';

import { LANDING_CONTENT } from '../../config/landing-content.config';
import { SeoService } from '../../services/seo.service';
import { AppHeaderComponent } from '../../components/app-header/app-header.component';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [CommonModule, RouterLink, AppHeaderComponent],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss'
})
export class LandingPageComponent implements OnInit {
  private seo = inject(SeoService);
  readonly content = LANDING_CONTENT;
  readonly navItems = LANDING_CONTENT.navItems;

  ngOnInit(): void {
    this.seo.updateSeo({
      title: 'Server96 - Digital Product & Design Studio',
      description:
        'We are a creative digital team helping ambitious brands turn ideas into clean, high-performing digital experiences. Web design, branding, motion graphics, and illustration.',
      keywords: 'web design, digital studio, branding, UI/UX, graphic design, motion graphics',
      image: '/og-image.png',
      url: 'https://server96.com'
    });
  }

  routeForFooterLink(link: string): string {
    const map: Record<string, string> = {
      'About Us': '/about',
      'Our Works': '/work',
      Community: '/community',
      'Get Started': '/contact-us',
      'Privacy Policy': '/privacy-policy',
      Instagram: '/contact-us',
      LinkedIn: '/contact-us'
    };

    return map[link] ?? '/';
  }
}

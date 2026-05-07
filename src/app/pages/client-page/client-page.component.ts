import { CommonModule } from '@angular/common';
import { Component, OnInit, computed, effect, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';

import { LANDING_CONTENT } from '../../config/landing-content.config';
import { CLIENT_PAGES } from '../../config/client-pages.config';
import { SeoService } from '../../services/seo.service';
import { AppHeaderComponent } from '../../components/app-header/app-header.component';

@Component({
  selector: 'app-client-page',
  standalone: true,
  imports: [CommonModule, RouterLink, AppHeaderComponent],
  templateUrl: './client-page.component.html',
  styleUrl: './client-page.component.scss'
})
export class ClientPageComponent implements OnInit {
  private readonly route = inject(ActivatedRoute);
  private seo = inject(SeoService);

  readonly navItems = LANDING_CONTENT.navItems;
  readonly footer = LANDING_CONTENT.footer;

  readonly page = computed(() => {
    const key = this.route.snapshot.data['key'] as string | undefined;
    return CLIENT_PAGES[key ?? 'about'] ?? CLIENT_PAGES['about'];
  });

  readonly pageKey = computed(() => {
    return this.route.snapshot.data['key'] as string ?? 'about';
  });

  constructor() {
    effect(() => {
      const currentPage = this.page();
      const key = this.pageKey();

      // Create dynamic descriptions for each page
      const pageDescriptions: Record<string, string> = {
        about: `Learn about Server96, a web engineering and cloud solutions team building resilient, scalable digital infrastructure.`,
        work: `Explore our web engineering case studies and cloud solutions that improved reliability, performance, and growth.`,
        pricing: `Flexible engagement models for your project. From starter sprints to retained partnerships.`,
        'contact-us': `Start your project with Server96. Tell us what you are building and we'll reply with a practical scope.`,
        'privacy-policy': `Server96 privacy policy and data protection practices. We collect minimal information securely.`,
        features: `Discover our capabilities: frontend architecture, backend engineering, cloud infrastructure, and DevOps.`,
        community: `Join our community. Access knowledge sharing, build walkthroughs, and collaborative sessions.`
      };

      this.seo.updateSeo({
        title: `${currentPage.title} | Server96`,
        description: pageDescriptions[key] || currentPage.subtitle,
        keywords: `${key}, Server96, web engineering, cloud solutions, web services`,
        image: '/og-image.png',
        url: `https://server96.com/${key}`
      });
    });
  }

  ngOnInit(): void {}

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

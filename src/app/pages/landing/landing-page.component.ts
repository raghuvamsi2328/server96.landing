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
      title: 'Server96 - Web Engineering & Cloud Solutions',
      description:
        'Server96 delivers scalable web engineering and cloud solutions, from custom application architecture to reliable managed hosting and DevOps.',
      keywords:
        'web engineering, cloud solutions, managed hosting, full-stack development, Angular, Node.js, DevOps, scalable applications',
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

  caseStudyUrl(name: string): string {
    const map: Record<string, string> = {
      'Knowabt.me': 'https://knowabt.me',
      Linklocker: 'https://linklocker.server96.com'
    };

    return map[name] ?? '/work';
  }

  isExternalCaseStudy(name: string): boolean {
    const url = this.caseStudyUrl(name);
    return url.startsWith('http');
  }
}

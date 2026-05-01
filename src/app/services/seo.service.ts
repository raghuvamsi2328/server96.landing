import { Injectable, inject } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

export interface SeoConfig {
  title: string;
  description: string;
  keywords?: string;
  image?: string;
  url?: string;
}

@Injectable({
  providedIn: 'root'
})
export class SeoService {
  private meta = inject(Meta);
  private title = inject(Title);

  updateSeo(config: SeoConfig): void {
    // Update title
    this.title.setTitle(config.title);

    // Update meta description
    this.meta.updateTag({
      name: 'description',
      content: config.description
    });

    // Update meta keywords if provided
    if (config.keywords) {
      this.meta.updateTag({
        name: 'keywords',
        content: config.keywords
      });
    }

    // Update OG tags
    this.meta.updateTag({
      property: 'og:title',
      content: config.title
    });

    this.meta.updateTag({
      property: 'og:description',
      content: config.description
    });

    if (config.image) {
      this.meta.updateTag({
        property: 'og:image',
        content: config.image
      });
    }

    if (config.url) {
      this.meta.updateTag({
        property: 'og:url',
        content: config.url
      });
    }

    // Update Twitter tags
    this.meta.updateTag({
      name: 'twitter:title',
      content: config.title
    });

    this.meta.updateTag({
      name: 'twitter:description',
      content: config.description
    });
  }
}

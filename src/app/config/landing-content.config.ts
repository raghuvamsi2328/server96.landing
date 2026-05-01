import { LandingPageConfig } from '../models/landing-config.model';

export const LANDING_CONTENT: LandingPageConfig = {
  navItems: ['Home', 'About', 'Work', 'Pricing'],
  hero: {
    eyebrow: 'We take pride in pushing creative boundaries',
    titleLines: ['Driving digital', 'success together'],
    highlightWord: 'together',
    subtitle: 'Your trusted partner for all things digital. Let us transform your online presence.',
    primaryAction: 'Contact Us',
    secondaryAction: 'Book Meeting'
  },
  sectionLabels: {
    services: 'Our Services',
    whyChoose: 'Why Choose Server96',
    works: 'Awesome Works',
    testimonials: 'What Our Client Says'
  },
  metrics: [
    {
      label: 'Projects Completed',
      value: '350+',
      detail: 'Captivate, engage, and inspire.'
    },
    {
      label: 'Creative Team Members',
      value: '40+',
      detail: 'Ensuring your project stands out and makes an impact.'
    },
    {
      label: 'Years Of Excellence',
      value: '12',
      detail: 'Delivering transparent, innovative, and reliable value.'
    }
  ],
  services: [
    {
      name: 'Web Design',
      description:
        'Your website is your virtual storefront, and first impressions matter. Our web design experts craft visually appealing, user-friendly, and responsive websites.',
      tags: ['Web Design', 'UI', 'UX']
    },
    {
      name: 'Graphic Design',
      description:
        'Stand out from the crowd with our bespoke graphic design services. From eye-catching logos to engaging marketing materials.',
      tags: ['Brand', 'Visual', 'Print']
    },
    {
      name: 'Motion Graphic',
      description:
        'Bring your brand to life with dynamic and attention-grabbing motion graphics for digital channels.',
      tags: ['Motion', 'Animation', 'Story']
    },
    {
      name: 'Illustration',
      description:
        'Illustrations have the power to tell stories and evoke emotions. Our illustrators create visuals that complement your brand style.',
      tags: ['Custom Art', 'Concept', 'Creative']
    }
  ],
  whyChooseItems: [
    {
      title: 'Creative Excellence',
      description: 'We take pride in pushing creative boundaries to deliver solutions that are both innovative and aesthetically pleasing.'
    },
    {
      title: 'Collaborative Approach',
      description: 'Your vision is our inspiration. We collaborate closely with you throughout the process to ensure perfect alignment.'
    },
    {
      title: 'Cutting-Edge Technology',
      description: 'We stay ahead of industry trends and leverage modern technologies to provide future-proof solutions.'
    },
    {
      title: 'Client Satisfaction',
      description: 'Our success is measured by your satisfaction. We are committed to delivering projects on time and beyond expectations.'
    }
  ],
  portfolio: [
    {
      name: 'Betley Agency',
      category: 'Branding Design, UI/UX Design',
      summary: 'A refined digital identity and modern landing flow for a fast-growing agency.'
    },
    {
      name: 'Growthy',
      category: 'Finance, UI/UX, Website Design',
      summary: 'High-converting product pages and clear value communication.'
    },
    {
      name: 'Alfinance',
      category: 'Finance, UI/UX, App Design',
      summary: 'A polished financial product experience built for trust and clarity.'
    }
  ],
  testimonials: [
    {
      quote:
        "Working with Server96 was not just a service; it was a collaborative and enjoyable journey. Their team's dedication to understanding our goals and delivering beyond our expectations truly sets them apart.",
      author: 'Mochfata',
      role: 'CEO of Mocha Company'
    },
    {
      quote:
        'If you are looking for a creative partner that combines creativity with professionalism, look no further than Server96. Their commitment to excellence and collaboration is unmatched.',
      author: 'Zhofrana',
      role: 'PT. Meranti Citra Sejati'
    }
  ],
  tickerItems: [
    {
      title: 'Live Build Status',
      message: 'Sprint 12 is on track. 8/10 tasks completed this week.'
    },
    {
      title: 'Design Review',
      message: 'New onboarding variant approved with accessibility pass.'
    },
    {
      title: 'Performance Alert',
      message: 'Core Web Vitals improved after image pipeline update.'
    }
  ],
  estimator: {
    baselineHours: 80,
    ratePerHourUsd: 85,
    minScope: 1,
    maxScope: 5
  },
  cta: {
    title: 'Create New Innovation Together',
    description:
      'Our team of talented designers thrives on pushing the boundaries of creativity, ensuring your project stands out and makes an impact.',
    actionText: 'Contact Us'
  },
  footer: {
    brandLine: 'Your trusted partner for all things digital. Let us transform your online presence.',
    email: 'team@server96.com',
    phone: '+62 812 9112 4910',
    groups: [
      {
        title: 'Home',
        links: ['About Us', 'Our Works', 'Community']
      },
      {
        title: 'Features',
        links: ['Get Started', 'Privacy Policy']
      },
      {
        title: 'Social Media',
        links: ['Instagram', 'LinkedIn']
      }
    ]
  }
};

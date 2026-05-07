import { LandingPageConfig } from '../models/landing-config.model';

export const LANDING_CONTENT: LandingPageConfig = {
  navItems: ['Home', 'About', 'Work', 'Pricing'],
  hero: {
    eyebrow: 'Web Engineering & Hosting Excellence',
    titleLines: ['Engineering Scalable', 'Web', 'Solutions ✱ Together'],
    highlightWord: 'Together',
    subtitle: 'Your specialized partner for high-performance web engineering and reliable hosting. We build robust, custom web solutions designed to scale with your business.',
    primaryAction: 'Get Started',
    secondaryAction: 'View Our Stack'
  },
  sectionLabels: {
    services: 'Technical Excellence In Every Layer',
    whyChoose: 'Why Partner With Us',
    works: 'Technical Case Studies',
    testimonials: 'What Our Clients Say'
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
      name: 'Web Engineering',
      description:
        'We build complex, high-performance web applications using modern architectures like Micro-frontends and PWAs. Our expertise ensures scalability and maintainability.',
      tags: ['Angular', 'TypeScript', 'Architecture']
    },
    {
      name: 'Web Hosting',
      description:
        'Secure, high-uptime hosting solutions managed on enterprise-grade infrastructure to keep your business online 24/7 with dedicated support.',
      tags: ['Cloud', 'Security', 'DevOps']
    },
    {
      name: 'Custom Web Solutions',
      description:
        'From slot booking systems to specialized management tools, we engineer software tailored to your specific business logic and workflow requirements.',
      tags: ['Custom', 'Business Logic', 'Integration']
    },
    {
      name: 'Full-Stack Development',
      description:
        'End-to-end development covering responsive frontend architectures and robust backend systems using Node.js, .NET, and modern frameworks.',
      tags: ['Frontend', 'Backend', 'DevOps']
    }
  ],
  whyChooseItems: [
    {
      title: 'Performance First',
      description: 'We optimize every line of code to ensure your web services are lightning-fast and SEO-friendly for maximum conversion.'
    },
    {
      title: 'Modern Tech Stack',
      description: 'Our expertise lies in Angular, TypeScript, Node.js, and .NET to deliver future-proof digital assets that scale with your business.'
    },
    {
      title: 'Reliable Infrastructure',
      description: 'Whether it\'s a dedicated mail server or a cloud-hosted application, we prioritize stability, security, and 99.9% uptime.'
    },
    {
      title: 'Scalable Engineering',
      description: 'We build with growth in mind, ensuring your platform can handle increased traffic and complexity as you expand your operations.'
    }
  ],
  portfolio: [
    {
      name: 'Knowabt.me',
      category: 'Web Hosting, Custom Platform, DevOps',
      summary: 'A custom hosting service allowing users to deploy portfolios via GitHub with automated subdomains and serverless architecture.'
    },
    {
      name: 'Chats96',
      category: 'Real-Time Chat, .NET, WebSockets',
      summary: 'A high-concurrency chat application built with SignalR, .NET, and PostgreSQL handling thousands of concurrent connections.'
    },
    {
      name: 'Linklocker',
      category: 'PWA, Offline-First, Security',
      summary: 'A self-hosted PWA designed for secure, offline-capable link management with end-to-end encryption and local storage.'
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
    title: 'Ready to Architect Your Next Innovation',
    description:
      'Our team of senior engineers is ready to build the infrastructure your business deserves. Let\'s architect something stable and scalable together.',
    actionText: 'Consult An Engineer'
  },
  footer: {
    brandLine: 'Your specialized partner for high-performance web engineering and reliable hosting solutions.',
    email: 'team@server96.com',
    phone: '+91 9885358039',
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

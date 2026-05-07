export interface ClientPageSection {
  heading: string;
  body: string;
}

export interface ClientPageContent {
  title: string;
  eyebrow: string;
  subtitle: string;
  highlights: string[];
  sections: ClientPageSection[];
}

export const CLIENT_PAGES: Record<string, ClientPageContent> = {
  about: {
    title: 'About Server96',
    eyebrow: 'Who We Are',
    subtitle:
      'We are senior web engineers specializing in high-performance web applications and reliable hosting infrastructure. We build systems designed to scale.',
    highlights: ['12+ years of expertise', 'Full-stack capabilities', 'Enterprise-grade infrastructure'],
    sections: [
      {
        heading: 'Founded on reliability',
        body: 'Server96 exists because enterprises need partners who understand both frontend architecture and backend resilience. We combine Angular, TypeScript, Node.js, and .NET expertise with deep DevOps knowledge.'
      },
      {
        heading: 'How we operate',
        body: 'Weekly sprints with transparent milestones. Real-time communication. Regular performance audits. We maintain your infrastructure as if it were our own—99.9% uptime is non-negotiable.'
      },
      {
        heading: 'What we optimize for',
        body: 'Performance, security, and scalability. Every line of code is audited. Every infrastructure decision is made for long-term reliability. Your users deserve faster load times. Your business deserves uptime you can trust.'
      },
      {
        heading: 'Who we work with',
        body: 'Growing SaaS companies, fintech platforms, and enterprises rethinking their technical stack. If you need engineering partners who take ownership, we are a fit.'
      }
    ]
  },
  work: {
    title: 'Technical Case Studies',
    eyebrow: 'Projects We Have Shipped',
    subtitle:
      'Real examples of high-performance web applications and hosting solutions we have engineered. Each project demonstrates scalability, security, and reliability.',
    highlights: ['Custom hosting platforms', 'Real-time applications', 'High-concurrency systems'],
    sections: [
      {
        heading: 'Knowabt.me: Automated Portfolio Hosting',
        body: 'A custom hosting platform enabling GitHub-based portfolio deployments with automated subdomain provisioning. Built on Node.js and PostgreSQL with CI/CD pipelines for zero-downtime deployments.'
      },
      {
        heading: 'Chats96: Real-Time Communication',
        body: 'A high-concurrency chat application built with .NET SignalR and PostgreSQL handling 10,000+ concurrent connections. Features include message persistence, room management, and real-time presence updates.'
      },
      {
        heading: 'Linklocker: Offline-First PWA',
        body: 'A self-hosted progressive web app for secure link management with end-to-end encryption, offline capability, and local data storage. Built with Angular for desktop and mobile.'
      },
      {
        heading: 'Results delivered',
        body: 'Reduced infrastructure costs through optimization. Sub-second load times. Zero unplanned downtime. Systems our clients maintain with confidence and scale without rewriting.'
      }
    ]
  },
  pricing: {
    title: 'Pricing Models',
    eyebrow: 'How We Engage',
    subtitle:
      'Flexible engagement structures built for transparency. Fixed rates, clear scopes, and measurable outcomes. No surprises.',
    highlights: ['Sprint-based pricing', 'Retained partnerships', 'Infrastructure management'],
    sections: [
      {
        heading: 'Project-based work',
        body: 'Custom web applications, hosting platform setup, or full-stack modernization. Fixed timeline, defined scope, complete ownership from architecture through launch.'
      },
      {
        heading: 'Retained engineering partnership',
        body: 'Dedicated capacity for your roadmap. One team, your priorities. Ideal for scaling companies that need consistent engineering velocity and infrastructure management.'
      },
      {
        heading: 'Hosting & DevOps support',
        body: 'Managed hosting, CI/CD pipeline setup, monitoring, and on-call support. We handle the infrastructure so your team focuses on product.'
      },
      {
        heading: 'Custom arrangements',
        body: 'Equity partnerships, revenue-share models, or co-building opportunities. If you have a compelling technical challenge, let us discuss creative structures.'
      }
    ]
  },
  'contact-us': {
    title: 'Consult An Engineer',
    eyebrow: 'Tell Us About Your Project',
    subtitle:
      'Share your technical requirements, scaling challenges, or infrastructure concerns. We will provide honest feedback and a clear path forward within 48 hours.',
    highlights: ['Fast response', 'Technical honesty', 'No fluff'],
    sections: [
      {
        heading: 'Technical consultation',
        body: 'Describe your architecture challenges, performance goals, or hosting needs. We will ask clarifying questions and propose the most efficient technical approach.'
      },
      {
        heading: 'Engineering partnership models',
        body: 'Interested in project work, retained partnerships, or managed hosting? We are open to exploring engagement structures that align with your needs.'
      },
      {
        heading: 'Get started',
        body: 'Email team@server96.com with your technical requirements and current tech stack. Include timeline and budget constraints so we can respond with realistic recommendations.'
      }
    ]
  },
  'privacy-policy': {
    title: 'Privacy & Data',
    eyebrow: 'Your privacy matters',
    subtitle:
      'We collect minimal information and protect it with serious practices. Your trust is the foundation of our relationship.',
    highlights: ['Minimal collection', 'Transparent usage', 'Your control'],
    sections: [
      {
        heading: 'What we collect',
        body: 'Name, email, company information, and project details shared directly with us. Optional communication preferences to keep you informed.'
      },
      {
        heading: 'How it is used',
        body: 'To deliver services, communicate project updates, provide support, and (with permission) share insights about industry trends and best practices.'
      },
      {
        heading: 'Security',
        body: 'All data is encrypted in transit and at rest. Access is restricted to team members who need it. We never sell, rent, or share your information.'
      },
      {
        heading: 'Your rights',
        body: 'You can request updates, exports, or deletion of your information at any time. Contact us at hello@server96.com for privacy requests.'
      }
    ]
  },
  features: {
    title: 'Our Capabilities',
    eyebrow: 'What We Engineer',
    subtitle:
      'A complete technical stack for enterprise web applications: modern frontends, scalable backends, hosting infrastructure, and DevOps automation. Built to perform.',
    highlights: ['High-performance frontends', 'Scalable backends', 'Enterprise hosting'],
    sections: [
      {
        heading: 'Frontend engineering',
        body: 'Angular with TypeScript. Server-side rendering for SEO and performance. Micro-frontends for large-scale applications. Design systems built for maintainability. Progressive web apps for offline capability.'
      },
      {
        heading: 'Backend & infrastructure',
        body: 'Node.js and .NET backends. PostgreSQL and MongoDB for data persistence. Real-time capabilities with WebSockets and SignalR. REST and GraphQL APIs. Authentication, authorization, and security hardening.'
      },
      {
        heading: 'Web hosting & DevOps',
        body: 'Enterprise-grade hosting infrastructure. Docker containerization and Kubernetes orchestration. CI/CD pipelines for reliable deployments. Monitoring, logging, and alerting. 99.9% SLA guarantees.'
      },
      {
        heading: 'Performance optimization',
        body: 'Core Web Vitals optimization. Database query optimization. Caching strategies. CDN integration. Load testing and performance audits. SEO and accessibility compliance.'
      }
    ]
  },
  community: {
    title: 'Engineering Community',
    eyebrow: 'Join Our Community',
    subtitle:
      'We share technical insights, infrastructure best practices, and lessons from scaling systems. For engineers and technical founders building the next generation of web applications.',
    highlights: ['Technical talks', 'Architecture deep-dives', 'Infrastructure guidance'],
    sections: [
      {
        heading: 'Technical knowledge sharing',
        body: 'Real implementations from projects we have shipped. Angular patterns, Node.js best practices, .NET scaling strategies. Performance optimization techniques. Architecture decisions explained with trade-offs.'
      },
      {
        heading: 'Infrastructure guidance',
        body: 'Hosting decisions, DevOps automation, database scaling, security hardening. Technical founders and teams can reach out for architecture reviews and recommendations based on our experience.'
      },
      {
        heading: 'Community sessions',
        body: 'Regular workshops on Angular, Node.js, .NET, Kubernetes, and PostgreSQL. Live coding sessions demonstrating real-world solutions. Q&A with our senior engineers. Peer learning for technical teams.'
      },
      {
        heading: 'Resources & case studies',
        body: 'Architecture decision records, infrastructure templates, performance benchmarks, and reference implementations. Open-source tools we build for the community. Practical guides for modern web engineering.'
      }
    ]
  }
};

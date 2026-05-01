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
    eyebrow: 'Who we are',
    subtitle:
      'We partner with founders and product teams to build digital experiences that perform. Engineering, design, and strategy working in sync.',
    highlights: ['Full-stack capabilities', 'Product-obsessed approach', 'Proven shipping discipline'],
    sections: [
      {
        heading: 'Built on execution',
        body: 'Server96 exists because great products need teams that can hold a vision end-to-end. We combine frontend, backend, and design—no handoffs, no gaps.'
      },
      {
        heading: 'How we operate',
        body: 'Weekly sprints. Clear milestones. Real feedback loops. We build in public checkpoints so you understand progress and can adjust direction fast.'
      },
      {
        heading: 'What we optimize for',
        body: 'Speed to market, long-term maintainability, and user outcomes. We ship code that ships reliably and scales with your team.'
      },
      {
        heading: 'Who we work with',
        body: 'Seed-stage startups, scaling product teams, and established companies rethinking their technical foundations. If you care about quality and speed, we are a good fit.'
      }
    ]
  },
  work: {
    title: 'Our Work',
    eyebrow: 'Selected projects',
    subtitle:
      'A sample of digital products and web experiences that improved performance, retention, and conversion. Focused on outcomes that matter.',
    highlights: ['SaaS products', 'Fintech platforms', 'Marketing & commerce sites'],
    sections: [
      {
        heading: 'SaaS & product design',
        body: 'End-to-end product builds: databases, APIs, real-time features, and dashboards. We structure products for growth from day one.'
      },
      {
        heading: 'Fintech & trading',
        body: 'Secure, low-latency interfaces for financial platforms. Complex state management, high-frequency updates, and user trust built into every detail.'
      },
      {
        heading: 'Web experiences',
        body: 'High-converting marketing sites and web apps with fast Core Web Vitals, strong SEO, and clean handoff to teams who maintain them.'
      },
      {
        heading: 'Results',
        body: 'Faster time to market. Reduced technical debt. Teams that can iterate confidently. Measurable improvements in engagement and conversion.'
      }
    ]
  },
  pricing: {
    title: 'Pricing',
    eyebrow: 'How we engage',
    subtitle:
      'Flexible structures designed for transparency and alignment. Every engagement is scoped clearly, priced fairly, and focused on measurable outcomes.',
    highlights: ['Fixed sprint rates', 'Outcome-based pricing', 'Flexible commitment models'],
    sections: [
      {
        heading: 'Sprint & scoped work',
        body: 'For focused deliverables: landing redesigns, feature builds, or technical architecture. Fixed timeline, clear scope, full ownership.'
      },
      {
        heading: 'Retained partnership',
        body: 'Dedicated capacity for ongoing roadmap execution. One team, your priorities. Best for scaling startups that need consistent velocity.'
      },
      {
        heading: 'Project delivery',
        body: 'Full product builds from concept through launch. Strategy, design, engineering, and launch support in one aligned engagement.'
      },
      {
        heading: 'Custom arrangements',
        body: 'Revenue-share opportunities. Equity partnerships. Co-building models. If you have a compelling idea, let us talk about creative structures.'
      }
    ]
  },
  'contact-us': {
    title: 'Get in touch',
    eyebrow: 'Let us know what you are building',
    subtitle:
      "Send us a brief overview of your goals, timeline, and constraints. We'll respond within 48 hours with a realistic scope and next steps.",
    highlights: ['Fast response', 'Honest feedback', 'No obligation'],
    sections: [
      {
        heading: 'Project inquiry',
        body: 'Describe your vision, audience, and success metric. We will ask clarifying questions and propose the most efficient path forward.'
      },
      {
        heading: 'Collaboration format',
        body: 'Interested in a retained partnership, co-building arrangement, or advisory role? We are open to exploring ways to work together.'
      },
      {
        heading: 'Get started',
        body: 'Email us at hello@server96.com with your project details, or book a brief conversation to discuss timing and approach.'
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
    eyebrow: 'What we build',
    subtitle:
      'A complete toolkit for digital product work: strategy, design systems, modern frontends, scalable backends, and deployment infrastructure.',
    highlights: ['Product design', 'Modern stacks', 'Infrastructure & deployment'],
    sections: [
      {
        heading: 'Frontend architecture',
        body: 'React, Angular, Vue—frameworks chosen for your constraints. SSR for performance. Type-safe code. Design systems that ship fast.'
      },
      {
        heading: 'Backend & APIs',
        body: "Node.js, Python, Go. Databases from PostgreSQL to NoSQL. Real-time capabilities. Authentication and authorization patterns that scale."
      },
      {
        heading: 'Design systems',
        body: 'Reusable component libraries. Token-driven styling. Clear patterns for consistency across products. Built for teams to maintain and extend.'
      },
      {
        heading: 'DevOps & deployment',
        body: 'CI/CD pipelines. Container orchestration. Observability and monitoring. Databases that perform. Infrastructure you can hand off confidently.'
      }
    ]
  },
  community: {
    title: 'Community',
    eyebrow: 'Building together',
    subtitle:
      'We share practical knowledge from product work. Breakdowns, walkthroughs, and collaborative sessions for founders and engineering teams.',
    highlights: ['Product talks', 'Technical deep-dives', 'Open collaboration'],
    sections: [
      {
        heading: 'Knowledge sharing',
        body: 'Real breakdowns of design and implementation decisions from projects we have shipped. Framework comparisons, performance optimizations, architecture patterns.'
      },
      {
        heading: 'Open doors',
        body: 'Founders and teams can reach out for advice on product direction, technical decisions, or fundraising strategy. We give candid feedback and practical guidance.'
      },
      {
        heading: 'Collaborative sessions',
        body: 'Regular meetups and workshops focused on modern stack decisions, shipping discipline, and product outcomes. Peer learning for builders.'
      },
      {
        heading: 'Resources',
        body: 'Case studies, templates, and reference implementations that help you understand our approach and apply it to your own work.'
      }
    ]
  }
};

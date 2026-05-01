export interface HeroConfig {
  eyebrow: string;
  titleLines: string[];
  highlightWord: string;
  subtitle: string;
  primaryAction: string;
  secondaryAction: string;
}

export interface MetricConfig {
  label: string;
  value: string;
  detail: string;
}

export interface ServiceConfig {
  name: string;
  description: string;
  tags: string[];
}

export interface WhyChooseItemConfig {
  title: string;
  description: string;
}

export interface PortfolioConfig {
  name: string;
  category: string;
  summary: string;
}

export interface TestimonialConfig {
  quote: string;
  author: string;
  role: string;
}

export interface TickerItemConfig {
  title: string;
  message: string;
}

export interface EstimatorConfig {
  baselineHours: number;
  ratePerHourUsd: number;
  minScope: number;
  maxScope: number;
}

export interface CtaConfig {
  title: string;
  description: string;
  actionText: string;
}

export interface FooterLinkGroupConfig {
  title: string;
  links: string[];
}

export interface FooterConfig {
  brandLine: string;
  email: string;
  phone: string;
  groups: FooterLinkGroupConfig[];
}

export interface LandingPageConfig {
  navItems: string[];
  hero: HeroConfig;
  sectionLabels: {
    services: string;
    whyChoose: string;
    works: string;
    testimonials: string;
  };
  metrics: MetricConfig[];
  services: ServiceConfig[];
  whyChooseItems: WhyChooseItemConfig[];
  portfolio: PortfolioConfig[];
  testimonials: TestimonialConfig[];
  tickerItems: TickerItemConfig[];
  estimator: EstimatorConfig;
  cta: CtaConfig;
  footer: FooterConfig;
}

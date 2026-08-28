export interface StatItem {
  num: string;
  label: string;
}

export const stats: StatItem[] = [
  { num: '70%', label: 'faster search response times' },
  { num: '500K+', label: 'pages indexed via SEO architecture' },
  { num: '15%', label: 'YoY sales growth contribution' },
  { num: '40%', label: 'improvement in resource allocation' },
];

export type DotColor = 'coral' | 'green' | 'amber';

export interface ChangelogEntry {
  dotColor: DotColor;
  version: string;
  role: string;
  description: string;
}

export const changelog: ChangelogEntry[] = [
  {
    dotColor: 'coral',
    version: 'v2025.07 — present',
    role: 'Associate Manager Software Engineering, DXC Australia',
    description:
      'Leading greenfield builds, platform modernization, and system integrations — delivered through small, incremental changes that never interrupt the live platform.',
  },
  {
    dotColor: 'amber',
    version: 'v2025.03 – v2025.06',
    role: 'Software Engineer, ASC Australia',
    description:
      "Kicked off a front-end modernization effort, decoupling a Java-based framework's UI so frontend and backend could evolve independently.",
  },
  {
    dotColor: 'green',
    version: 'v2021.08 – v2024.09',
    role: 'Software Engineer, InfoTrack AU',
    description:
      'Cut search response times by 70%, helped index 500K+ pages through SEO architecture, and led security overhauls protecting the platform from fraud and abuse.',
  },
  {
    dotColor: 'coral',
    version: 'v2019.02 – v2021.08',
    role: 'Full-Stack Developer, Micway Transport',
    description:
      'Improved resource allocation by 40% through a new roster system, and led the migration from .NET 4.8 to .NET Core 3.1.',
  },
  {
    dotColor: 'amber',
    version: 'v2011.02 – v2013.09',
    role: 'Software Engineer, Accenture / Avanade Brazil',
    description:
      'Built systems spanning machinery allocation for mining clients and insurance quoting platforms for Mapfre.',
  },
];

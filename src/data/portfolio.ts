import expenseTrackerImage from '../assets/projects/expense-tracker.svg?url';
import managerImage from '../assets/projects/manager.svg?url';
import messageAppImage from '../assets/projects/message-app.svg?url';
import inventoryImage from '../assets/projects/inventory.svg?url';
import faceDetectorImage from '../assets/projects/face-detector.svg?url';
import eshopStarterImage from '../assets/projects/eshop-starter.svg?url';

export type SocialPlatform = 'github' | 'linkedin' | 'gitlab';

export interface SocialLink {
  label: string;
  platform: SocialPlatform;
  url: string;
}

export interface Project {
  title: string;
  description: string;
  repositoryUrl: string;
  repositoryHost: 'GitHub' | 'GitLab';
  image: string;
  technologies: string[];
}

export interface Service {
  title: string;
  description: string;
}

export interface TechnologyGroup {
  category: string;
  technologies: string[];
}

export const socialLinks: SocialLink[] = [
  {
    label: 'GitHub profile',
    platform: 'github',
    url: 'https://github.com/harris-salimo',
  },
  {
    label: 'Contact Harris on LinkedIn',
    platform: 'linkedin',
    url: 'https://www.linkedin.com/in/harris-ma%C3%AFla-salimo/',
  },
  {
    label: 'GitLab profile',
    platform: 'gitlab',
    url: 'https://gitlab.com/HarrisSalimo',
  },
];

export const projects: Project[] = [
  {
    title: 'Expense Tracker',
    description:
      'A full-stack expense management app built with AdonisJS, React, Inertia, and TypeScript, with database migrations, tests, and deployment configuration.',
    repositoryUrl: 'https://gitlab.com/HarrisSalimo/expense-tracker',
    repositoryHost: 'GitLab',
    image: expenseTrackerImage,
    technologies: ['TypeScript', 'AdonisJS', 'React', 'Inertia'],
  },
  {
    title: 'Manager',
    description:
      'A project management platform for clients, projects, tasks, roles, and permissions, built with Laravel, React, and Inertia.',
    repositoryUrl: 'https://gitlab.com/HarrisSalimo/manager',
    repositoryHost: 'GitLab',
    image: managerImage,
    technologies: ['PHP', 'Laravel', 'React', 'Inertia'],
  },
  {
    title: 'Message App',
    description:
      'A real-time messaging application built with AdonisJS and React in a type-safe TypeScript monorepo.',
    repositoryUrl: 'https://gitlab.com/HarrisSalimo/message-app',
    repositoryHost: 'GitLab',
    image: messageAppImage,
    technologies: ['TypeScript', 'AdonisJS', 'React', 'SSE'],
  },
  {
    title: 'Inventory',
    description:
      'A type-safe inventory management application built as an AdonisJS monorepo with a React frontend.',
    repositoryUrl: 'https://gitlab.com/HarrisSalimo/inventory',
    repositoryHost: 'GitLab',
    image: inventoryImage,
    technologies: ['TypeScript', 'AdonisJS', 'React', 'Monorepo'],
  },
  {
    title: 'Face Detector',
    description:
      'A configurable Python and OpenCV toolkit for face detection, recognition, training, and camera or CLI workflows.',
    repositoryUrl: 'https://github.com/harris-salimo/face-detector',
    repositoryHost: 'GitHub',
    image: faceDetectorImage,
    technologies: ['Python', 'OpenCV', 'CLI', 'Pytest'],
  },
  {
    title: 'eShop Starter',
    description:
      'An AdonisJS monorepo starter with an authenticated API backend, type-safe client generation, and a frontend workspace.',
    repositoryUrl: 'https://github.com/harris-salimo/eshop-starter',
    repositoryHost: 'GitHub',
    image: eshopStarterImage,
    technologies: ['TypeScript', 'AdonisJS', 'React', 'TanStack'],
  },
];

export const services: Service[] = [
  {
    title: 'Web Application Development',
    description: 'Full-stack applications built from product requirements to production-ready code.',
  },
  {
    title: 'API & Backend Engineering',
    description: 'Secure APIs, business logic, authentication, database design, and integrations.',
  },
  {
    title: 'Application Modernization',
    description: 'Refactoring, migrations, reliability improvements, testing, and developer tooling.',
  },
];

export const technologyGroups: TechnologyGroup[] = [
  {
    category: 'Frontend',
    technologies: ['TypeScript', 'React'],
  },
  {
    category: 'Backend',
    technologies: ['Node.js', 'AdonisJS', 'PHP', 'Laravel', 'Python'],
  },
  {
    category: 'Data',
    technologies: ['PostgreSQL', 'MySQL'],
  },
  {
    category: 'Systems',
    technologies: ['Linux', 'Bash'],
  },
];

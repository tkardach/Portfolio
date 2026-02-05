import { Component, signal, computed, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

// --- Interfaces ---
interface Skill {
  name: string;
  stars: number; // 1 to 5
}

interface Project {
  id: number;
  company: string;
  location: string;
  role: string;
  dates: string;
  summaryBullets: string[];
  detailedDescription: string; // HTML allowed
  tags: string[];
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  // State Signals
  selectedFilter = signal<string>('All');
  activeProject = signal<Project | null>(null);

  // --- DATA: SKILLS ---
  skills: Skill[] = [
    { name: 'Angular', stars: 5 },
    { name: 'TypeScript', stars: 5 },
    { name: 'Node.js', stars: 4 },
    { name: 'Tailwind CSS', stars: 5 },
    { name: 'React', stars: 3 },
    { name: 'SQL / Postgres', stars: 4 },
    { name: 'AWS', stars: 3 },
    { name: 'UI/UX Design', stars: 4 },
  ];

  // --- DATA: PROJECTS ---
  allProjects: Project[] = [
    {
      id: 1,
      role: 'Senior Frontend Engineer',
      company: 'TechFlow Solutions',
      location: 'San Francisco, CA',
      dates: '2022 - Present',
      summaryBullets: [
        'Led migration of legacy monolith to Angular 17+ Micro-frontends.',
        'Improved Core Web Vitals LCP score by 40% through lazy loading strategies.',
        'Mentored 3 junior developers and established code review guidelines.'
      ],
      detailedDescription: `
        <p>At TechFlow, I spearheaded the frontend architecture modernization. The original system was a JSP-based monolith that was becoming impossible to maintain.</p>
        <p class="mt-2"><strong>Key Achievements:</strong></p>
        <ul class="list-disc pl-5 mt-1 space-y-1">
          <li>Architected a micro-frontend solution using Module Federation.</li>
          <li>Implemented a custom component library using Tailwind CSS and Angular CDK.</li>
          <li>Reduced build times from 15 minutes to 3 minutes by implementing Nx workspaces.</li>
        </ul>
        <p class="mt-4">This role requires heavy cross-functional collaboration with the backend team to define GraphQL schemas.</p>
      `,
      tags: ['Angular', 'Frontend', 'Architecture', 'Tailwind']
    },
    {
      id: 2,
      role: 'Full Stack Developer',
      company: 'Creative Agency X',
      location: 'Remote',
      dates: '2020 - 2022',
      summaryBullets: [
        'Built 15+ custom e-commerce sites using Node.js and React.',
        'Integrated Stripe and PayPal APIs for secure payment processing.',
        'Developed a custom CMS for internal content management.'
      ],
      detailedDescription: `
        <p>Working at a fast-paced agency environment, I was responsible for the full lifecycle of client projects, from initial scoping to deployment.</p>
        <p class="mt-2">I focused heavily on <strong>Headless CMS</strong> integrations, allowing marketing teams to update content without developer intervention.</p>
        <p class="mt-2">I also built a reusable backend boilerplate in Node.js/Express that saved the team approximately 20 hours per new project kick-off.</p>
      `,
      tags: ['Full Stack', 'Node.js', 'React', 'Backend', 'E-Commerce']
    },
    {
      id: 3,
      role: 'Backend Engineer',
      company: 'DataStream Corp',
      location: 'Austin, TX',
      dates: '2018 - 2020',
      summaryBullets: [
        'Optimized database queries reducing report generation time by 60%.',
        'Built RESTful APIs consumed by mobile and web clients.',
        'Managed AWS EC2 instances and RDS databases.'
      ],
      detailedDescription: `
        <p>My primary focus was data integrity and API performance. I worked with a massive PostgreSQL dataset containing over 50 million records.</p>
        <p class="mt-2">I implemented a Redis caching layer which offloaded 40% of read operations from the primary database, significantly stabilizing the system during peak traffic hours.</p>
      `,
      tags: ['Backend', 'SQL', 'AWS', 'Node.js']
    },
    {
      id: 4,
      role: 'Mobile App Developer',
      company: 'Freelance',
      location: 'Remote',
      dates: '2017 - 2018',
      summaryBullets: [
        'Developed a fitness tracking app using Ionic/Angular.',
        'Published apps to both App Store and Google Play Store.',
        'Implemented push notifications and offline data sync.'
      ],
      detailedDescription: `
        <p>As a freelancer, I built "FitTrack", a hybrid mobile application. I utilized <strong>Ionic</strong> to share 95% of the code between iOS and Android platforms.</p>
        <p class="mt-2">The app features real-time graph rendering for heart rate data and syncs with local SQLite storage when the user is offline.</p>
      `,
      tags: ['Mobile', 'Angular', 'Frontend']
    }
  ];

  // --- COMPUTED VALUES ---

  // Get unique tags for the dropdown
  uniqueTags = computed(() => {
    const tags = new Set<string>();
    this.allProjects.forEach(p => p.tags.forEach(t => tags.add(t)));
    return Array.from(tags).sort();
  });

  // Filter projects based on selection
  filteredProjects = computed(() => {
    const filter = this.selectedFilter();
    if (filter === 'All') {
      return this.allProjects;
    }
    return this.allProjects.filter(p => p.tags.includes(filter));
  });

  // --- ACTIONS ---

  openModal(project: Project) {
    this.activeProject.set(project);
    // Prevent background scrolling
    document.body.style.overflow = 'hidden';
  }

  closeModal() {
    this.activeProject.set(null);
    // Restore scrolling
    document.body.style.overflow = '';
  }
}
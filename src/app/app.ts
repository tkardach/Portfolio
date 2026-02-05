import { Component, signal, computed, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

// --- Interfaces ---

/**
 * Defines a skill with a name and proficiency level.
 */
interface Skill {
  name: string;
  experience: string;
}

/**
 * Defines a project with various attributes including role, company,
 * dates, and detailed description.
 */
interface Project {
  id: number;
  title: string;
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
  protected readonly selectedFilter = signal<string>('All');
  protected readonly activeProject = signal<Project | null>(null);

  // --- DATA: SKILLS ---
  protected readonly skills: Skill[] = [
    { name: 'C++', experience: "Expert" },
    { name: 'Python', experience: "Advanced" },
    { name: 'Rust', experience: "Advanced" },
    { name: 'C#', experience: "Advanced" },
    { name: 'SQL', experience: "Advanced" },
    { name: 'Linux Kernel', experience: "Advanced" },
  ];

  // --- DATA: PROJECTS ---
  protected readonly allProjects: Project[] = [
    {
      id: 1,
      title: 'Camera ISP Register Generation Toolchain',
      role: 'Software Engineer - L5',
      company: 'Google',
      location: 'Mountain View, CA',
      dates: '2021 - Present',
      summaryBullets: [
        'Spearheaded a complete overhaul of the ISP register generation codebase, reducing SOC engineering hours from months to days via automated IP-XACT parsing.',
        'Orchestrated a year-long cross-functional migration roadmap, managing stakeholder expectations and ensuring 100% on-time delivery for critical SOC milestones.',
        'Engineered a full-stack register visualization and diagnostic suite, automating the identification of duplicate registers and reducing the time it takes to debug register issues from hours to minutes.',
        'Developed a high-performance C++ code generator that outputs packed memory structures and automated default-value population methods, eliminating manual programming errors and automating a process that takes months of engineering hours.'
      ],
      detailedDescription: `
    <p>I owned the end-to-end lifecycle of the Pixel Camera ISP register generation toolchain. Identifying critical scalability flaws in the legacy automation pipeline, I spearheaded a complete re-architecture of the register generation toolchain. The new system streamlined the translation of IP-XACT metadata into C++ packed structures, reducing the SOC register generation timeline from months to days.</p>
    <p class="mt-2"><strong>Key Achievements:</strong></p>
    <ul class="list-disc pl-5 mt-1 space-y-1">
      <li><strong>Architectural Modernization:</strong> Designed a new generator that eliminated core implementation flaws in the legacy system, accelerating the delivery pipeline by over 60x and shrinking a multi-month SOC integration cycle into just a few days.</li>
      <li><strong>Full-Stack Tooling:</strong> Developed a web-based register database using a JSONL-to-SQL pipeline, featuring an advanced search index, a register-merging tool for memory optimization, and a device register dump parser.</li>
      <li><strong>Process Automation:</strong> Created automated methods for populating register default values, saving downstream driver teams significant manual effort during initial hardware integration.</li>
      <li><strong>Project Leadership:</strong> Managed the deprecation of legacy systems while maintaining parallel support for active SOC cycles, ensuring zero downtime for dependent engineering teams.</li>
    </ul>
    <p class="mt-4">This project involved deep-level hardware abstraction, complex file parsing, and extensive collaboration with camera driver programmer teams.</p>
  `,
      tags: ['C++', 'Rust', 'Python', 'Angular', 'Kotlin']
    }, {
      id: 2,
      title: 'Secure Camera Pipeline Lead',
      role: 'Software Engineer - L5',
      company: 'Google',
      location: 'Mountain View, CA',
      dates: '2021 – Present',
      summaryBullets: [
        'Optimized the Camera HAL secure pipeline, reducing the permanent secure memory heap carveout by 50% through aggressive resource management.',
        'Reduced end-to-end Face Authentication latency by 10% by optimizing ISP hardware utilization and streamlining cross-processor communication.',
        'Lead cross-functional bring-up of the secure camera stack for annual SOC cycles, collaborating with Face Auth, Secure Realm (TEE), and Image Quality (IQ) teams.',
        'Sustained 99.9% reliability for the device’s most frequent camera use-case by resolving complex race conditions and secure-buffer synchronization issues.'
      ],
      detailedDescription: `
    <p>As the owner of the Secure Camera Pipeline, I manage the critical path between the Camera HAL and the Secure Realm (TEE). My work ensures that sensitive biometric data is processed with maximum security while maintaining the high performance required for seamless Face Authentication.</p>
    <p class="mt-2"><strong>Key Achievements:</strong></p>
    <ul class="list-disc pl-5 mt-1 space-y-1">
      <li><strong>Memory Optimization:</strong> Successfully halved the secure memory heap footprint, freeing up significant SOC resources for other system-critical processes without compromising image throughput.</li>
      <li><strong>Latency Reduction:</strong> Identified bottlenecks in the ISP-to-Secure-Realm handoff, implementing hardware-level optimizations that shaved 10% off the total authentication time.</li>
      <li><strong>Cross-Functional Leadership:</strong> Acted as the primary point of contact for the Secure Realm and Face Auth teams, translating high-level biometric requirements into low-level driver and HAL implementations.</li>
      <li><strong>Annual SOC Bring-up:</strong> Directed the end-to-end integration of the secure pipeline for new silicon, ensuring all security audits and performance benchmarks were met ahead of production.</li>
    </ul>
    <p class="mt-4">This role requires a deep understanding of Trusted Execution Environments (TEE), secure buffer sharing (dmabuf/Ion), and hardware-enforced memory protection units.</p>
  `,
      tags: ['C++']
    }, {
      id: 3,
      title: 'Kernel Abstraction Layer Lead',
      role: 'Software Engineer',
      company: 'Google (Pixel Camera)',
      location: 'Mountain View, CA',
      dates: '20XX – Present',
      summaryBullets: [
        'Direct the ownership and evolution of the Pixel Camera HAL’s Linux Kernel Abstraction Layer, overseeing the software-to-hardware interface for high-performance camera systems.',
        'Optimized system resource utilization by 66%, consolidating 15 dedicated threads into a unified shared event system capable of multiplexing hardware interrupts.',
        'Reduced IOCTL syscall overhead by 66%–80% by architecting a logical expression interface (AND/OR) for atomic hardware trigger programming.',
        'Designed a multi-status Kernel Fence mechanism (OK/ERROR) to replace legacy binary signals, enabling robust error handling and complex transaction chaining.'
      ],
      detailedDescription: `
    <p>As a Team Lead for the Machine Abstraction layer, I am an owner of the critical interface between the Pixel Camera HAL (Userspace) and the Linux Kernel. I manage a suite of low-level tools that abstract hardware register programming into an object-oriented framework, ensuring high-concurrency safety and minimal syscall latency.</p>
    <p class="mt-2"><strong>Key Achievements:</strong></p>
    <ul class="list-disc pl-5 mt-1 space-y-1">
      <li><strong>Thread & Resource Optimization:</strong> Re-engineered the interrupt handling architecture to use a shared event thread model. This reduction from 15 threads to 5 significantly lowered the system’s memory footprint and context-switching overhead without impacting device responsiveness.</li>
      <li><strong>Sycall Performance:</strong> Introduced a user-friendly logical operation interface that allows developers to combine multiple hardware triggers (interrupts/fences) into a single IO transaction, cutting required IOCTL calls by up to 80% per operation.</li>
      <li><strong>Advanced Synchronization:</strong> Spearheaded the development of multi-status fences, allowing userspace drivers to receive granular feedback from the kernel and enabling the implementation of complex, asynchronous transaction chains.</li>
    </ul>
    <p class="mt-4">This role requires expertise in Linux kernel drivers, Android HAL architecture, and optimizing high-frequency asynchronous IO systems.</p>
  `,
      tags: ['C++', 'C', 'Linux Kernel', 'Android HAL', 'Systems Architecture']
    },
    {
      id: 4,
      title: 'Focused Ion Beam (FIB) Control Software',
      role: 'Software Engineer',
      company: 'Thermo Fisher Scientific',
      location: 'Fremont, CA',
      dates: '2018 – 2021', summaryBullets: [
        'Redesigned the real-time rendering engine for Focused Ion Beam (FIB) circuitry editing, increasing visual resolution accuracy to 99.9% and doubling the frame rate.',
        'Optimized image processing and post-processing efficiency by over 100% through a comprehensive architectural overhaul of the C++/C# visualization pipeline.',
        'Developed a full-stack CI/CD dashboard (Node.js/Angular), reducing manual build overhead by 3 hours per week and eliminating "tribal knowledge" bottlenecks.',
      ],
      detailedDescription: `
    <p>In this role, I was responsible for the software suite used to operate high-precision Focused Ion Beam (FIB) equipment. While my daily responsibilities covered the full breadth of the control system, my most significant technical contributions centered on modernizing the visualization and build-release infrastructure.</p>
    <p class="mt-2"><strong>Key Achievements:</strong></p>
    <ul class="list-disc pl-5 mt-1 space-y-1">
      <li><strong>Visualization Optimization:</strong> Identified and rectified fundamental flaws in the legacy rendering algorithms. By optimizing how scanning data was processed for display, I achieved a 99.9% visual accuracy and significantly higher frame rates, providing operators with the clarity needed for complex edits.</li>
      <li><strong>Architectural Redesign:</strong> Led a massive redesign of the image processing codebase, leveraging optimized C++ routines to double the efficiency of real-time post-processing tasks.</li>
      <li><strong>Internal Tooling:</strong> Proactively built a centralized build-and-release web application using Node.js and Angular. This automated a previously manual process, saving the team ~3 hours per week and allowing remote monitoring of build progress across the secure LAN.</li>
    </ul>
    <p class="mt-4">This role required bridging the gap between low-level C++ data acquisition and a high-level C# user interface, ensuring high-throughput data visualization without dropped frames.</p>
  `,
      tags: ['C++', 'C#', 'Node.js', 'Angular', 'Image Processing']
    },
    {
      id: 5,
      title: 'COVID-19 Reservation System for Community Pool',
      role: 'Full-Stack Developer (Volunteer)',
      company: 'Community Pool Club',
      location: 'Remote / Local',
      dates: '2020 – 2021',
      summaryBullets: [
        'Engineered and deployed a full-stack reservation system to enforce COVID-19 safety compliance, supporting over 700 weekly reservations for 40+ families.',
        'Developed a custom Node.js backend integrated with Google Sheets API, enabling non-technical staff to manage the database via a familiar spreadsheet interface.',
        'Hosted the entire production environment on a Raspberry Pi, providing a low-cost, high-uptime solution for community members during government mandates.',
        'Rapidly prototyped and launched the MVP within weeks to meet urgent regulatory deadlines, ensuring the facility could remain open to the public.'
      ],
      detailedDescription: `
    <p>During the COVID-19 pandemic, I volunteered to solve a critical operational challenge for a local community organization. To comply with social distancing mandates, the club required a system to strictly manage capacity and track attendance.</p>
    <p class="mt-2"><strong>Key Achievements:</strong></p>
    <ul class="list-disc pl-5 mt-1 space-y-1">
      <li><strong>Pragmatic Architecture:</strong> Built a lightweight web application using HTML and Node.js. I utilized the Google Sheets API as a real-time database, allowing the club’s board members to manually adjust reservations and view capacity without requiring SQL knowledge.</li>
      <li><strong>System Reliability:</strong> Configured a Raspberry Pi as a local server to host the application, maintaining high availability for over 80 active users during peak summer months.</li>
      <li><strong>Operational Impact:</strong> Automated a complex scheduling process that previously relied on manual communication, successfully processing over 700 reservations per week and ensuring 100% compliance with government safety regulations.</li>
    </ul>
    <p class="mt-4">This project highlighted my ability to deliver end-to-end technical solutions while prioritizing stakeholder accessibility and rapid deployment.</p>
  `,
      tags: ['HTML / CSS', 'Node.js', 'Raspberry Pi']
    },
  ];

  // --- COMPUTED VALUES ---

  // Get unique tags for the dropdown
  protected readonly uniqueTags = computed(() => {
    const tags = new Set<string>();
    this.allProjects.forEach(p => p.tags.forEach(t => tags.add(t)));
    return Array.from(tags).sort();
  });

  // Filter projects based on selection
  protected readonly filteredProjects = computed(() => {
    const filter = this.selectedFilter();
    if (filter === 'All') {
      return this.allProjects;
    }
    return this.allProjects.filter(p => p.tags.includes(filter));
  });

  // --- ACTIONS ---

  protected openModal(project: Project) {
    this.activeProject.set(project);
    // Prevent background scrolling
    document.body.style.overflow = 'hidden';
  }

  protected closeModal() {
    this.activeProject.set(null);
    // Restore scrolling
    document.body.style.overflow = '';
  }
}
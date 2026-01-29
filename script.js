// ===== Data =====
const skillsData = [
    {
        icon: 'fa-shopping-cart',
        title: 'E-Commerce Platforms',
        skills: [
            { name: 'Magento 2', level: 'Expert', progress: 95, desc: 'Custom modules, GraphQL APIs, PWA Studio, REST APIs, Payment integrations' },
            { name: 'Odoo ERP', level: 'Intermediate', progress: 70, desc: 'Setup, configuration, custom addons, apps development, module customization' }
        ]
    },
    {
        icon: 'fa-palette',
        title: 'Frontend Development',
        skills: [
            { name: 'Next.js', level: 'Advanced', progress: 90, desc: 'App Router, Server Components, API Routes, SSR/SSG, Headless Commerce' },
            { name: 'React.js', level: 'Advanced', progress: 88, desc: 'Hooks, Context API, Redux, Component architecture, Performance optimization' },
            { name: 'TypeScript', level: 'Advanced', progress: 85, desc: 'Type safety, Interfaces, Generics, Advanced types' }
        ]
    },
    {
        icon: 'fa-server',
        title: 'Backend Development',
        skills: [
            { name: 'Spring Boot', level: 'Advanced', progress: 85, desc: 'REST APIs, Microservices, JPA, Spring Security, Batch processing' },
            { name: 'PHP', level: 'Advanced', progress: 88, desc: 'Magento framework, Custom extensions, OOP, Dependency Injection' },
            { name: 'Java', level: 'Advanced', progress: 82, desc: 'Core Java, Collections, Multithreading, Stream API' }
        ]
    },
    {
        icon: 'fa-tools',
        title: 'DevOps & Tools',
        skills: [
            { name: 'Docker', level: 'Intermediate', progress: 70, desc: 'Containerization, Docker Compose, Multi-stage builds' },
            { name: 'Git / GitHub', level: 'Advanced', progress: 90, desc: 'Version control, Branching strategies, CI/CD, Code reviews' },
            { name: 'PostgreSQL / MySQL', level: 'Advanced', progress: 85, desc: 'Database design, Query optimization, Migrations' }
        ]
    }
];

const experienceData = [
    {
        title: 'Senior Software Engineer',
        date: 'Present',
        company: 'Full Stack Development',
        details: [
            'Leading development of headless e-commerce solutions using Next.js and Magento 2',
            'Building custom Magento 2 modules and GraphQL APIs for enhanced functionality',
            'Implementing Odoo ERP solutions for business process automation',
            'Developing microservices with Spring Boot for enterprise applications'
        ],
        tags: ['Magento 2', 'Next.js', 'Spring Boot', 'Odoo']
    },
    {
        title: 'Magento 2 Developer',
        date: 'Previous',
        company: 'E-Commerce Specialist',
        details: [
            'Enhanced catalog flexibility and admin usability through custom modules',
            'Developed customized payment and shipping integrations',
            'Optimized storefront performance and SEO',
            'Implemented PWA Studio for progressive web applications'
        ],
        tags: ['PHP', 'Magento 2', 'PWA Studio', 'GraphQL']
    }
];

const projectsData = [
    {
        title: 'Tour With Alpha',
        icon: 'fa-plane-departure',
        description: 'A full-featured tour booking platform built with Next.js frontend and Magento 2 backend. Features include booking management, payment integration, and GraphQL APIs.',
        tech: ['Next.js', 'TypeScript', 'Magento 2', 'GraphQL'],
        link: 'https://github.com/vishnuprasad871/tourwithalpha-frontend',
        featured: true
    },
    {
        title: 'Magento PWA Studio',
        icon: 'fa-store',
        description: 'Fork of Magento PWA Studio with custom optimizations. Development tools to build, optimize and deploy Progressive Web Applications.',
        tech: ['JavaScript', 'React', 'GraphQL', 'PWA'],
        link: 'https://github.com/vishnuprasad871/pwa-studio'
    },
    {
        title: 'B2B Kochi',
        icon: 'fa-building',
        description: 'A B2B platform built with Java and Spring Boot. Features include SAP integration, order synchronization, and enterprise-grade data management.',
        tech: ['Java', 'Spring Boot', 'PostgreSQL', 'REST API'],
        link: 'https://github.com/vishnuprasad871/b2bkochi'
    },
    {
        title: 'Niram Website',
        icon: 'fa-paint-brush',
        description: 'A beautifully designed website showcasing modern frontend development practices with clean HTML structure and responsive design.',
        tech: ['HTML5', 'CSS3', 'JavaScript', 'Responsive'],
        link: 'https://github.com/vishnuprasad871/niram-website'
    }
];

const typingPhrases = [
    'Building scalable e-commerce solutions',
    'Magento 2 Expert & PWA Developer',
    'Next.js & React Specialist',
    'Odoo ERP & Custom Addons',
    'Spring Boot Microservices'
];

// ===== DOM Elements =====
const navbar = document.getElementById('navbar');
const navMenu = document.getElementById('nav-menu');
const navToggle = document.getElementById('nav-toggle');
const navLinks = document.querySelectorAll('.nav-link');
const typingText = document.getElementById('typing-text');
const skillsContainer = document.getElementById('skills-container');
const timelineContainer = document.getElementById('timeline-container');
const projectsContainer = document.getElementById('projects-container');
const contactForm = document.getElementById('contact-form');

// ===== Navbar Scroll Effect =====
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
    updateActiveNavLink();
});

// ===== Mobile Menu Toggle =====
navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    const icon = navToggle.querySelector('i');
    icon.classList.toggle('fa-bars');
    icon.classList.toggle('fa-times');
});

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        const icon = navToggle.querySelector('i');
        icon.classList.add('fa-bars');
        icon.classList.remove('fa-times');
    });
});

// ===== Active Nav Link Update =====
function updateActiveNavLink() {
    const sections = document.querySelectorAll('section[id]');
    const scrollY = window.pageYOffset;
    
    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 100;
        const sectionId = section.getAttribute('id');
        const navLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);
        
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            navLinks.forEach(link => link.classList.remove('active'));
            if (navLink) navLink.classList.add('active');
        }
    });
}

// ===== Typing Effect =====
let phraseIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {
    const currentPhrase = typingPhrases[phraseIndex];
    
    if (isDeleting) {
        typingText.textContent = currentPhrase.substring(0, charIndex - 1);
        charIndex--;
    } else {
        typingText.textContent = currentPhrase.substring(0, charIndex + 1);
        charIndex++;
    }
    
    let typeSpeed = isDeleting ? 30 : 80;
    
    if (!isDeleting && charIndex === currentPhrase.length) {
        typeSpeed = 2000;
        isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        phraseIndex = (phraseIndex + 1) % typingPhrases.length;
        typeSpeed = 500;
    }
    
    setTimeout(typeEffect, typeSpeed);
}

// ===== Render Skills =====
function renderSkills() {
    skillsContainer.innerHTML = skillsData.map(category => `
        <div class="skill-category reveal">
            <div class="category-header">
                <i class="fas ${category.icon}"></i>
                <h3>${category.title}</h3>
            </div>
            <div class="skill-items">
                ${category.skills.map(skill => `
                    <div class="skill-item">
                        <div class="skill-info">
                            <span class="skill-name">${skill.name}</span>
                            <span class="skill-level">${skill.level}</span>
                        </div>
                        <div class="skill-bar">
                            <div class="skill-progress" data-progress="${skill.progress}"></div>
                        </div>
                        <p class="skill-desc">${skill.desc}</p>
                    </div>
                `).join('')}
            </div>
        </div>
    `).join('');
}

// ===== Render Timeline =====
function renderTimeline() {
    timelineContainer.innerHTML = experienceData.map(exp => `
        <div class="timeline-item reveal">
            <div class="timeline-marker"></div>
            <div class="timeline-content">
                <div class="timeline-header">
                    <h3>${exp.title}</h3>
                    <span class="timeline-date">${exp.date}</span>
                </div>
                <p class="timeline-company">${exp.company}</p>
                <ul class="timeline-details">
                    ${exp.details.map(detail => `<li>${detail}</li>`).join('')}
                </ul>
                <div class="timeline-tags">
                    ${exp.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
                </div>
            </div>
        </div>
    `).join('');
}

// ===== Render Projects =====
function renderProjects() {
    projectsContainer.innerHTML = projectsData.map(project => `
        <article class="project-card${project.featured ? ' featured' : ''} reveal">
            <div class="project-image">
                <div class="project-placeholder">
                    <i class="fas ${project.icon}"></i>
                </div>
                <div class="project-overlay">
                    <a href="${project.link}" target="_blank" class="project-link">
                        <i class="fab fa-github"></i>
                    </a>
                </div>
            </div>
            <div class="project-content">
                <h3 class="project-title">${project.title}</h3>
                <p class="project-description">${project.description}</p>
                <div class="project-tech">
                    ${project.tech.map(t => `<span>${t}</span>`).join('')}
                </div>
            </div>
        </article>
    `).join('');
}

// ===== Scroll Reveal Animation =====
function revealOnScroll() {
    const reveals = document.querySelectorAll('.reveal');
    
    reveals.forEach(element => {
        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;
        const revealPoint = 150;
        
        if (elementTop < windowHeight - revealPoint) {
            element.classList.add('active');
            
            // Animate skill bars
            const skillBars = element.querySelectorAll('.skill-progress');
            skillBars.forEach(bar => {
                const progress = bar.getAttribute('data-progress');
                bar.style.width = progress + '%';
            });
        }
    });
}

// ===== Contact Form =====
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(contactForm);
    const data = Object.fromEntries(formData.entries());
    
    // Show success message (in a real app, you'd send this to a server)
    alert(`Thank you, ${data.name}! Your message has been received. I'll get back to you soon.`);
    contactForm.reset();
});

// ===== Smooth Scroll for anchor links =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// ===== Initialize =====
document.addEventListener('DOMContentLoaded', () => {
    renderSkills();
    renderTimeline();
    renderProjects();
    typeEffect();
    revealOnScroll();
    
    // Add reveal class to other sections
    document.querySelectorAll('.about-content, .contact-content').forEach(el => {
        el.classList.add('reveal');
    });
});

window.addEventListener('scroll', revealOnScroll);

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
        title: 'Frontend Development',
        icon: 'fa-palette',
        skills: [
            { name: 'Next.js', level: 'Intermediate', progress: 70, desc: 'App Router, Server Components, API Routes, SSR/SSG, Headless Commerce' },
            { name: 'React.js', level: 'Intermediate', progress: 70, desc: 'Hooks, Context API, Redux, Component architecture, Performance optimization' },
            { name: 'TypeScript', level: 'Intermediate', progress: 70, desc: 'Type safety, Interfaces, Generics, Advanced types' }
        ]
    },
    {
        title: 'Backend Development',
        icon: 'fa-server',
        skills: [
            { name: 'Spring Boot', level: 'Advanced', progress: 85, desc: 'REST APIs, Microservices, JPA, Spring Security, Batch processing' },
            { name: 'PHP', level: 'Advanced', progress: 88, desc: 'Magento framework, Custom extensions, OOP, Dependency Injection' },
            { name: 'Java', level: 'Advanced', progress: 82, desc: 'Core Java, Collections, Multithreading, Stream API' }
        ]
    },
    {
        title: 'DevOps & Tools',
        icon: 'fa-tools',
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
        subtitle: 'Tour Booking Platform',
        details: [
            'Full-featured tour booking platform with Next.js & Magento 2',
            'Implemented booking management and payment integration',
            'Developed GraphQL APIs for headless commerce experience',
            'Deployed and hosted on GitHub'
        ],
        tech: ['Next.js', 'Magento 2', 'GraphQL', 'TypeScript'],
        link: 'https://github.com/vishnuprasad871/tourwithalpha-frontend',
        featured: true
    },
    {
        title: 'IKEA – Swedish Food Market',
        icon: 'fa-utensils',
        subtitle: 'Online Food Delivery Platform',
        details: [
            'Developed and maintained an online food delivery application',
            'Integrated multiple delivery partners for order fulfilment',
            'Implemented Single Sign-On (SSO) for secure user authentication',
            'Integrated Mastercard payment, Apple Pay, and checkout workflows'
        ],
        tech: ['Java', 'Spring Boot', 'SSO', 'Payment Gateways']
    },
    {
        title: 'EDOC',
        icon: 'fa-database',
        subtitle: 'Spring Boot Application',
        details: [
            'Built a Spring Boot application to store and process data from SAP APIs',
            'Implemented Spring Batch for large-scale data ingestion and processing',
            'Designed efficient database structures for SAP data storage',
            'Ensured reliability with proper logging and error handling'
        ],
        tech: ['Java', 'Spring Boot', 'Spring Batch', 'MySQL', 'SAP APIs']
    },
    {
        title: 'BFab / Matalan',
        icon: 'fa-shirt',
        subtitle: 'Fashion E-commerce Platform',
        details: [
            'Developed brand-based store architecture on Magento 2',
            'Integrated multiple payment gateways (Apple Pay, Checkout.com, Tabby, etc.)',
            'Implemented backend services using Python FastAPI with MongoDB',
            'Optimized checkout and payment workflows'
        ],
        tech: ['Magento 2', 'Python FastAPI', 'MongoDB', 'Payment Integration']
    },
    {
        title: 'WireAndSwitch',
        icon: 'fa-network-wired',
        subtitle: 'Electrical E-commerce Platform',
        details: [
            'Built a multi-vendor e-commerce platform using Webkul Marketplace',
            'Integrated Shiprocket for shipping and logistics',
            'Developed a Magento PWA application for retail customers',
            'Implemented separate catalogs, sales, and CMS features for vendors'
        ],
        tech: ['Magento 2', 'PWA', 'Webkul', 'Shiprocket']
    },
    {
        title: 'YallaToys',
        icon: 'fa-gamepad',
        subtitle: 'Online Toy Store',
        details: [
            'Performed Magento website migration and version upgrades',
            'Integrated Tagalys for advanced product search and merchandising',
            'Implemented MyFatoorah payment gateway and Referral modules',
            'Optimized catalog and checkout performance'
        ],
        tech: ['Magento 2', 'Tagalys', 'MyFatoorah', 'PHP']
    },
    {
        title: 'GoPayNet',
        icon: 'fa-credit-card',
        subtitle: 'Payment Gateway Platform',
        details: [
            'Worked on a payment gateway platform supporting online and POS transactions',
            'Enabled sellers to integrate GoPayNet across multiple platforms',
            'Performed performance optimization for high-volume transactions'
        ],
        tech: ['FinTech', 'Payment Gateway', 'POS', 'High Performance']
    },
    {
        title: 'VSTAR',
        icon: 'fa-vest',
        subtitle: 'Online Clothing Store',
        details: [
            'Handled Magento website migration and version updates',
            'Integrated Shiprocket for shipping and order tracking',
            'Improved store stability and performance post-migration'
        ],
        tech: ['Magento 2', 'Shiprocket', 'Migration', 'Performance']
    },
    {
        title: 'Agappe Diagnostics Ltd',
        icon: 'fa-heartbeat',
        subtitle: 'Healthcare / Diagnostics',
        details: [
            'Integrated ZOHO with Magento for CRM and business workflows',
            'Implemented ERP catalog management integration',
            'Automated product and inventory synchronization between ERP and Magento'
        ],
        tech: ['Magento 2', 'ZOHO', 'ERP Integration', 'Automation']
    },
    {
        title: 'Al Bahar',
        icon: 'fa-tv',
        subtitle: 'Electronics Store (Kuwait)',
        details: [
            'Provided POS integration and support',
            'Implemented advanced search functionality',
            'Enhanced system stability for high-traffic operations'
        ],
        tech: ['Magento 2', 'POS', 'Search', 'High Traffic']
    },
    {
        title: 'Electronyat / Hail Security',
        icon: 'fa-bolt',
        subtitle: 'Electronics Store (Qatar)',
        details: [
            'Developed customized reports for business insights',
            'Implemented dynamic product attribute management',
            'Enhanced catalog flexibility and admin usability'
        ],
        tech: ['Magento 2', 'Reporting', 'Admin Customization']
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
        <article class="project-card reveal">
            <div class="project-content full-height">
                <div class="project-header">
                    <div class="project-icon">
                        <i class="fas ${project.icon}"></i>
                    </div>
                    <div class="project-title-group">
                        <h3 class="project-title">${project.title}</h3>
                        <span class="project-subtitle">${project.subtitle}</span>
                    </div>
                    ${project.link ? `
                    <a href="${project.link}" target="_blank" class="project-github-link" aria-label="View on GitHub">
                        <i class="fab fa-github"></i>
                    </a>
                    ` : ''}
                </div>
                <div class="project-body">
                    <ul class="project-details">
                        ${project.details.map(detail => `<li>${detail}</li>`).join('')}
                    </ul>
                </div>
                <div class="project-footer">
                    <div class="project-tech">
                        ${project.tech.map(t => `<span>${t}</span>`).join('')}
                    </div>
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
    anchor.addEventListener('click', function (e) {
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

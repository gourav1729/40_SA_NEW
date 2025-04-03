// Project data
const projects = [
    {
        title: "Project 1",
        description: "Description of project 1",
        image: "https://via.placeholder.com/300x200",
        technologies: ["HTML", "CSS", "JavaScript"]
    },
    {
        title: "Project 2",
        description: "Description of project 2",
        image: "https://via.placeholder.com/300x200",
        technologies: ["HTML", "CSS", "JavaScript"]
    }
];

// Load projects
function loadProjects() {
    const projectsGrid = document.querySelector('.projects-grid');
    
    projects.forEach(project => {
        const projectCard = `
            <div class="project-card">
                <img src="${project.image}" alt="${project.title}">
                <div class="project-info">
                    <h3>${project.title}</h3>
                    <p>${project.description}</p>
                    <div class="technologies">
                        ${project.technologies.join(', ')}
                    </div>
                </div>
            </div>
        `;
        projectsGrid.innerHTML += projectCard;
    });
}

// Smooth scrolling for navigation
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        document.querySelector(targetId).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Form submission
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Thank you for your message! I will get back to you soon.');
    this.reset();
});

// Load projects when DOM is ready
document.addEventListener('DOMContentLoaded', loadProjects);

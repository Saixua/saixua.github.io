// Dynamically detects "https://saixua.github.io" (or localhost when working offline)
const BASE_URL = window.location.origin;

// Fetch the repository project nodes from our json configuration file
fetch('./projects.json')
    .then(response => {
        if (!response.ok) {
            throw new Error('Failed to parse system project configuration file');
        }
        return response.json();
    })
    .then(projects => {
        const gridElement = document.getElementById('project-grid');
        gridElement.innerHTML = '';

        // Dynamically build and map out the portfolio structure using our base variable
        projects.forEach(project => {
            const card = document.createElement('a');
            
            // Constructs the full URL dynamically based on where the site is currently hosted
            card.href = `${BASE_URL}/${project.path}`;
            card.className = 'card';

            card.innerHTML = `
                <h3>[ ${project.title} ]</h3>
                <p>${project.description}</p>
            `;

            gridElement.appendChild(card);
        });
    })
    .catch(error => {
        console.error('System Runtime Error:', error);
        document.getElementById('project-grid').innerHTML = '<p style="color: #ef4444;">CRITICAL: Failed to initialize project nodes.</p>';
    });
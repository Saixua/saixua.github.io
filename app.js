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
        
        // Clear out any placeholder nodes
        gridElement.innerHTML = '';

        // Dynamically build and map out the portfolio structure
        projects.forEach(project => {
            const card = document.createElement('a');
            card.href = project.url;
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
// Automatically handles BOTH local servers (localhost) and subfolder deployments (GitHub Pages)
const BASE_URL = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1'
  ? window.location.origin 
  : `${window.location.origin}${window.location.pathname.replace(/\/$/, '')}`;

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
      
      // Clean up any double-slashes by ensuring a single clean divider
      const cleanPath = project.path.startsWith('/') ? project.path.substring(1) : project.path;
      
      // Constructs the full URL dynamically based on where the site is currently hosted
      card.href = `${BASE_URL}/${cleanPath}`;
      card.className = 'card';
      card.innerHTML = `
        <h3>[ ${project.title} ]</h3>
        <p>${project.description}</p>
      `;
      gridElement.appendChild(card);
    });
  });
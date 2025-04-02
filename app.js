// app.js - Simple Vanilla JS SPA Router and Renderer

// --- Data ---
// Replace with your actual project and publication data
const portfolioData = {
    projects: [
        {
            id: 'project-1', // Unique slug/ID for routing
            title: 'Portfolio Website V1',
            shortDescription: 'The initial version of this portfolio site.',
            longDescription: 'Built using HTML, Tailwind CSS, and vanilla JavaScript with a modal view for project details.',
            technologies: ['HTML', 'CSS', 'TailwindCSS', 'JavaScript'],
            imageUrl: 'https://placehold.co/600x400/bfdbfe/1e40af?text=Project+1', // Use your actual project image URL
            githubUrl: '#', // Link to your GitHub repo
            liveUrl: '#', // Link to live demo if available
            readme: `### Features\n* Single Page Layout\n* Modal view for details\n* Hosted on GitHub Pages\n\n### Tech Stack\n* HTML\n* Tailwind CSS (CDN)\n* Vanilla JavaScript`
        },
        {
            id: 'project-2',
            title: 'Data Visualization Dashboard',
            shortDescription: 'A dashboard displaying complex data insights.',
            longDescription: 'Created using D3.js to render interactive charts and graphs based on sample datasets. Focused on performance and clarity.',
            technologies: ['HTML', 'CSS', 'JavaScript', 'D3.js'],
            imageUrl: 'https://placehold.co/600x400/bbf7d0/166534?text=Project+2',
            githubUrl: '#',
            liveUrl: '#',
            readme: `### Overview\nThis project demonstrates data visualization techniques using the D3.js library.\n\n* Interactive bar charts\n* Line graphs with tooltips\n* Data loaded from JSON`
        },
        {
            id: 'project-3',
            title: 'Algorithm Visualizer',
            shortDescription: 'Visualizes common sorting algorithms.',
            longDescription: 'An educational tool built with JavaScript to help understand how algorithms like Bubble Sort, Merge Sort, etc., work step-by-step.',
            technologies: ['HTML', 'CSS', 'JavaScript'],
            imageUrl: 'https://placehold.co/600x400/fecdd3/881337?text=Project+3',
            githubUrl: '#',
            liveUrl: null, // Set to null or omit if no live link
            readme: `### Algorithms Included\n* Bubble Sort\n* Selection Sort\n* Merge Sort (Conceptual)\n\nUsers can control the speed and step through the visualization.`
        },
        // Add more projects...
    ],
    publications: [
        {
            id: 'pub-1',
            title: 'Research Paper on AI Ethics',
            shortDescription: 'Exploring ethical considerations in modern AI.',
            longDescription: 'Published in the proceedings of the Fictional Conference on Technology Ethics (FCTE 2024). Discusses bias in algorithms and mitigation strategies.',
            authors: 'Krish [Your Last Name], Prof. Jane Doe',
            venue: 'FCTE 2024',
            year: 2024,
            imageUrl: 'https://placehold.co/600x400/ede9fe/5b21b6?text=Pub+1', // Optional image
            paperUrl: '#', // Link to PDF or publication page
            readme: `### Abstract\nThis paper examines the growing ethical challenges posed by artificial intelligence... \n\n### Key Contributions\n* Analysis of bias sources.\n* Proposed framework for ethical AI development.`
        },
        // Add more publications...
    ],
    about: {
        name: "Krish [Your Last Name]",
        headline: "Passionate Computer Science student exploring the world of technology.",
        bio: `Hello! I'm Krish, currently pursuing a degree in Computer Science at [Your University Name]. I'm deeply interested in [mention 1-2 specific areas like AI, Web Development, Cybersecurity, etc.].

I enjoy tackling challenging problems, learning new technologies, and collaborating on exciting projects. My goal is to leverage my skills to create innovative and impactful solutions. Feel free to explore my work and get in touch!`,
        skills: ['Python', 'Java', 'JavaScript', 'React', 'SQL', 'Git', 'Docker', 'Cloud Platforms'],
        imageUrl: 'https://placehold.co/400x400/dbeafe/1e3a8a?text=About+Graphic', // Optional graphic
        resumeUrl: '[YOUR_RESUME_LINK_HERE].pdf',
        contact: {
            github: 'https://github.com/krish1375',
            linkedin: '[YOUR_LINKEDIN_URL_HERE]',
            email: 'mailto:[YOUR_EMAIL_HERE]'
        }
    }
};

// --- DOM Elements ---
const appContainer = document.getElementById('app');

// --- Templates / View Renderers ---

// Function to create HTML for a single item card
function createItemCard(item, type) {
    const link = type === 'project' ? `#/project/${item.id}` : `#/publication/${item.id}`;
    return `
        <a href="${link}" class="item-card block group" data-id="${item.id}">
            <img src="${item.imageUrl || 'https://placehold.co/600x400/7f1d1d/fecaca?text=No+Image'}" alt="${item.title}" class="w-full h-32 md:h-40 object-cover transition-opacity duration-300 group-hover:opacity-80" onerror="this.onerror=null; this.src='https://placehold.co/600x400/7f1d1d/fecaca?text=Load+Error';">
            <div class="item-card__content">
                <h3 class="item-card__title">${item.title}</h3>
                <p class="item-card__description">${item.shortDescription || ''}</p>
            </div>
        </a>
    `;
}

// Function to create HTML for a content row (like Netflix genres)
function createContentRow(title, items, type, seeAllLink = null) {
    if (!items || items.length === 0) return ''; // Don't render empty rows
    const seeAllButton = seeAllLink ? `<a href="${seeAllLink}" class="text-sm text-blue-400 hover:text-blue-300 ml-auto">See All</a>` : '';
    return `
        <div class="content-row">
            <div class="flex items-baseline mb-3">
                 <h2 class="content-row__title">${title}</h2>
                 ${seeAllButton}
            </div>
            <div class="content-row__items">
                ${items.map(item => createItemCard(item, type)).join('')}
            </div>
        </div>
    `;
}

// Render the Homepage View
function renderHomepage() {
    console.log("Rendering Homepage");
    appContainer.innerHTML = `
        ${createContentRow('Featured Projects', portfolioData.projects.slice(0, 5), 'project', '#/projects')}
        ${createContentRow('Recent Publications', portfolioData.publications.slice(0, 5), 'publication', '#/publications')}
        `;
}

// Render the Category Page View (e.g., All Projects)
function renderCategoryPage(type) {
    console.log(`Rendering Category Page: ${type}`);
    const items = portfolioData[type] || []; // e.g., portfolioData.projects
    const title = type.charAt(0).toUpperCase() + type.slice(1); // Capitalize type name

    if (items.length === 0) {
        appContainer.innerHTML = `<h1 class="text-3xl font-bold mb-6 text-white">All ${title}</h1><p class="text-gray-400">No ${type} found.</p>`;
        return;
    }

    appContainer.innerHTML = `
        <h1 class="text-3xl font-bold mb-6 text-white">All ${title}</h1>
        <div class="item-grid">
            ${items.map(item => createItemCard(item, type)).join('')}
        </div>
    `;
}

// Render the Detail Page View (e.g., Single Project)
function renderDetailPage(type, id) {
    console.log(`Rendering Detail Page: ${type}, ID: ${id}`);
    const item = (portfolioData[type] || []).find(p => p.id === id);

    if (!item) {
        appContainer.innerHTML = `<p class="text-center text-red-400">Error: ${type} with ID '${id}' not found.</p><p class="text-center mt-4"><a href="#/" class="text-blue-400 hover:underline">Go Home</a></p>`;
        return;
    }

    // Basic Markdown to HTML conversion (very simple)
    const readmeHtml = item.readme
        ? item.readme
              .replace(/^### (.*$)/gim, '<h3 class="text-lg font-semibold mt-3 mb-1">$1</h3>') // ### headers
              .replace(/^## (.*$)/gim, '<h2 class="text-xl font-semibold mt-4 mb-2">$1</h2>')   // ## headers
              .replace(/^\* (.*$)/gim, '<li class="ml-4 list-disc">$1</li>') // List items
              // Handle potential code blocks (simple approach)
              .replace(/```(\w*)\n([\s\S]*?)\n```/g, (match, lang, code) => `<pre><code class="language-${lang || ''}">${code.trim().replace(/</g, "&lt;").replace(/>/g, "&gt;")}</code></pre>`)
              .replace(/`([^`]+)`/g, '<code>$1</code>') // Inline code
              .replace(/\n/g, '<br>') // Newlines (use cautiously) - might be better handled by CSS whitespace
              .replace(/<br><li/g, '<li') // Fix extra breaks before list items
              .replace(/<br><h[23]/g, (match) => match.replace('<br>', '')) // Fix extra breaks before headers
              .replace(/<br><pre/g, '<pre') // Fix extra breaks before pre
        : '<p>No details available.</p>';


    appContainer.innerHTML = `
        <div class="detail-page max-w-5xl mx-auto">
            <div class="detail-header">
                <img src="${item.imageUrl || ''}" alt="" class="detail-backdrop" onerror="this.style.display='none'">

                <div class="detail-content">
                    <div class="detail-poster">
                         <img src="${item.imageUrl || 'https://placehold.co/400x600/7f1d1d/fecaca?text=No+Image'}" alt="${item.title}" onerror="this.onerror=null; this.src='https://placehold.co/400x600/7f1d1d/fecaca?text=Load+Error';">
                    </div>
                    <div class="detail-info flex-grow">
                        <h1>${item.title}</h1>
                        ${type === 'publication' ? `<p class="text-sm text-gray-400 -mt-2 mb-2">By ${item.authors || 'N/A'} | ${item.venue || ''} (${item.year || 'N/A'})</p>` : ''}
                        <p>${item.longDescription || item.shortDescription || ''}</p>
                        <div class="detail-meta mb-4">
                            ${(item.technologies || []).map(tech => `<span>${tech}</span>`).join('')}
                        </div>
                        <div class="detail-links">
                            ${item.liveUrl ? `<a href="${item.liveUrl}" target="_blank" rel="noopener noreferrer"><span class="lucide">&#xea3f;</span> Live Demo</a>` : ''}
                            ${item.githubUrl ? `<a href="${item.githubUrl}" target="_blank" rel="noopener noreferrer"><span class="lucide">&#xe9c9;</span> GitHub</a>` : ''}
                            ${item.paperUrl ? `<a href="${item.paperUrl}" target="_blank" rel="noopener noreferrer"><span class="lucide">&#xea76;</span> Read Paper</a>` : ''}
                        </div>
                    </div>
                </div>
            </div>

            ${item.readme ? `
            <div class="detail-readme">
                <h2 class="text-xl font-semibold mb-3 text-white">Details</h2>
                <div class="prose prose-invert max-w-none text-gray-300">${readmeHtml}</div>
            </div>
            ` : ''}
        </div>
    `;
     // Add prose-invert for Tailwind typography plugin dark mode compatibility if using it
     // Basic manual styling for prose elements is in the CSS
}

// Render About Page
function renderAboutPage() {
    console.log("Rendering About Page");
    const about = portfolioData.about;
    appContainer.innerHTML = `
        <div class="max-w-4xl mx-auto bg-gray-800 p-6 md:p-8 rounded-lg shadow-lg">
             <h1 class="text-3xl md:text-4xl font-bold text-center mb-8 text-white">About Me</h1>
             <div class="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
                 <div class="md:col-span-1 text-center">
                      <img src="${about.imageUrl || 'https://placehold.co/400x400/dbeafe/1e3a8a?text=About+Graphic'}" alt="About Graphic" class="rounded-lg shadow-md mx-auto mb-4" onerror="this.onerror=null; this.src='https://placehold.co/400x400/dbeafe/1e3a8a?text=Image+Error';">
                      <h2 class="text-2xl font-semibold text-white">${about.name}</h2>
                      <p class="text-blue-300 mt-1">${about.headline}</p>
                      <div class="flex justify-center space-x-4 mt-4">
                           <a href="${about.contact.github}" target="_blank" rel="noopener noreferrer" class="text-gray-400 hover:text-white transition duration-300" aria-label="GitHub Profile">
                               <span class="lucide text-2xl">&#xe9c9;</span>
                           </a>
                           <a href="${about.contact.linkedin}" target="_blank" rel="noopener noreferrer" class="text-gray-400 hover:text-white transition duration-300" aria-label="LinkedIn Profile">
                              <span class="lucide text-2xl">&#xe9cb;</span>
                           </a>
                           <a href="${about.contact.email}" class="text-gray-400 hover:text-white transition duration-300" aria-label="Email">
                               <span class="lucide text-2xl">&#xe94e;</span>
                           </a>
                       </div>
                       ${about.resumeUrl ? `
                       <a href="${about.resumeUrl}" target="_blank" rel="noopener noreferrer" class="mt-6 inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-5 rounded-lg shadow-md transition duration-300">
                           <span class="lucide mr-2">&#xe94a;</span>
                           Download Resume
                       </a>` : ''}

                 </div>
                 <div class="md:col-span-2">
                     <h3 class="text-xl font-semibold mb-3 text-white border-b border-gray-700 pb-2">Bio</h3>
                     <p class="text-gray-300 mb-6 whitespace-pre-line">${about.bio}</p>

                     <h3 class="text-xl font-semibold mb-3 text-white border-b border-gray-700 pb-2">Key Skills</h3>
                     <div class="flex flex-wrap gap-2">
                         ${about.skills.map(skill => `<span class="bg-gray-700 text-gray-300 text-sm font-medium px-3 py-1 rounded-full">${skill}</span>`).join('')}
                     </div>
                 </div>
             </div>
        </div>
    `;
}


// --- Router ---
function handleRouteChange() {
    const hash = window.location.hash || '#/';
    console.log(`Route changed to: ${hash}`);
    appContainer.innerHTML = '<p class="text-center text-gray-500">Loading...</p>'; // Clear previous content

    // Simple Routing Logic
    if (hash === '#/' || hash === '#') {
        renderHomepage();
    } else if (hash === '#/projects') {
        renderCategoryPage('projects');
    } else if (hash === '#/publications') {
        renderCategoryPage('publications');
    } else if (hash === '#/about') {
         renderAboutPage();
    } else if (hash.startsWith('#/project/')) {
        const projectId = hash.substring('#/project/'.length);
        renderDetailPage('projects', projectId);
    } else if (hash.startsWith('#/publication/')) {
        const pubId = hash.substring('#/publication/'.length);
        renderDetailPage('publications', pubId);
    } else {
        // Handle 404 Not Found
        appContainer.innerHTML = `<p class="text-center text-red-400">404 - Page Not Found</p><p class="text-center mt-4"><a href="#/" class="text-blue-400 hover:underline">Go Home</a></p>`;
    }

    // Scroll to top on page change
    window.scrollTo(0, 0);
}

// --- Initialization ---
document.addEventListener('DOMContentLoaded', () => {
    // Listen for hash changes
    window.addEventListener('hashchange', handleRouteChange);

    // Initial route handling
    handleRouteChange();

    // Add event listeners to nav links if needed (though href handles hash change)
    // Example: document.querySelectorAll('header nav a').forEach(link => link.addEventListener('click', handleRouteChange));
});


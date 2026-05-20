const myProjects = [
  { title: "Site de Yoga", tag: "Web", desc: "Un site zen en HTML/CSS." },
  { title: "Logo UCA", tag: "Design", desc: "Refonte de l'identitÃ© visuelle." },
  { title: "App MÃ©tÃ©o", tag: "Web", desc: "Interface connectÃ©e Ã  une API." }
];

const grid = document.querySelector('#project-grid');
const modal = document.querySelector('#project-modal');
const modalData = document.querySelector('#modal-data');

// 1. Rendu des projets
function renderProjects(data) {
  grid.innerHTML = "";
  data.forEach(p => {
    const card = document.createElement('article');
    card.innerHTML = `
      <h3>${p.title}</h3>
      <p>CatÃ©gorie : <strong>${p.tag}</strong></p>
      <button class="view-details">En savoir plus</button>
    `;
    
    // Interaction Modale
    card.querySelector('button').addEventListener('click', () => {
      modalData.innerHTML = `<h2>${p.title}</h2><p>${p.desc}</p>`;
      modal.showModal(); 
    });

    grid.appendChild(card);
  });
}

// 2. SystÃ¨me de filtrage avec AccessibilitÃ© (ARIA)
document.querySelectorAll('.filter-btn').forEach(btn => {
  // Initialisation de l'Ã©tat ARIA
  btn.setAttribute('aria-pressed', btn.classList.contains('active'));

  btn.addEventListener('click', (e) => {
    // UI : Gestion de la classe active
    const currentActive = document.querySelector('.filter-btn.active');
    if (currentActive) currentActive.classList.remove('active');
    e.target.classList.add('active');

    // AccessibilitÃ© : Mise Ã  jour de l'Ã©tat ARIA pour tous les boutons
    document.querySelectorAll('.filter-btn').forEach(b => {
      b.setAttribute('aria-pressed', b === e.target);
    });

    // Logique de filtrage
    const tag = e.target.dataset.tag;
    const filtered = tag === "all" ? myProjects : myProjects.filter(p => p.tag === tag);
    renderProjects(filtered);
  });
});

// Fermeture modale
document.querySelector('#close-modal').addEventListener('click', () => modal.close());

// Initialisation au chargement
renderProjects(myProjects);

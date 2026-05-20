// TP4 â€” Fetch & API
// ComplÃ©tez ce fichier en suivant les exercices du sujet.

// ===========================================
// TEMPS 1 â€” JSON local (exercices 1.1 Ã  1.3)
// ===========================================

const conteneur = document.querySelector('#projets-liste');

async function chargerEtAfficher() {
  // Ã‰tat : chargement
  conteneur.innerHTML = '<p class="loading">Chargement...</p>';

  try {
    const reponse = await fetch('./data.json');

    if (!reponse.ok) {
      throw new Error(`Erreur HTTP : ${reponse.status}`);
    }

    const donnees = await reponse.json();

    // Ã‰tat : succÃ¨s
    afficherProjets(donnees.projets);

  } catch (erreur) {
    // Ã‰tat : erreur
    conteneur.innerHTML = `<p class="error">Impossible de charger les donnÃ©es : ${erreur.message}</p>`;
    console.error(erreur);
  }
}

function afficherProjets(projets) {
  conteneur.innerHTML = '';
  projets.forEach((projet) => {
    const carte = document.createElement('article');
    carte.classList.add('carte');
    carte.innerHTML = `
      <h3>${projet.titre}</h3>
      <p>${projet.description}</p>
      <p class="annee">${projet.annee}</p>
      <div class="tags">
        ${projet.tags.map(t => `<span class="tag">${t}</span>`).join('')}
      </div>
    `;
    conteneur.append(carte);
  });
}

// Lancer au chargement
chargerEtAfficher();

// ===========================================
// TEMPS 2 â€” API distante (exercices 2.1 Ã  2.3)
// ===========================================

const conteneurAPI = document.querySelector('#api-liste');

async function chargerPays() {
  // Ã‰tat : chargement
  conteneurAPI.innerHTML = '<p class="loading">Chargement des pays...</p>';

  try {
    const reponse = await fetch('https://restcountries.com/v3.1/region/europe');

    if (!reponse.ok) {
      throw new Error('Erreur API');
    }

    const pays = await reponse.json();

    // Ã‰tat : succÃ¨s
    afficherPays(pays);

  } catch (erreur) {
    // Ã‰tat : erreur
    conteneurAPI.innerHTML = '<p class="error">Impossible de charger les pays.</p>';
  }
}

function afficherPays(pays) {
  conteneurAPI.innerHTML = '';
  pays.forEach((p) => {
    const carte = document.createElement('article');
    carte.classList.add('carte');
    carte.innerHTML = `
      <h3>${p.flag} ${p.name.common}</h3>
      <p>Capitale : ${p.capital ? p.capital[0] : 'Inconnue'}</p>
      <p>Population : ${p.population.toLocaleString()}</p>
    `;
    conteneurAPI.append(carte);
  });
}

// Lancer au chargement
chargerPays();

// ===========================================
// TEMPS 3 â€” Recherche + API (exercices 3.1 et 3.2)
// ===========================================

const conteneurRecherche = document.querySelector('#recherche-resultats');
const input = document.querySelector('#recherche');

input.addEventListener('input', async () => {
  const terme = input.value.trim();

  if (terme.length < 2) {
    conteneurRecherche.innerHTML = '<p>Tapez au moins 2 caractÃ¨res.</p>';
    return;
  }

  conteneurRecherche.innerHTML = '<p class="loading">Recherche...</p>';

  try {
    const reponse = await fetch(`https://restcountries.com/v3.1/name/${terme}`);

    if (!reponse.ok) {
      conteneurRecherche.innerHTML = '<p>Aucun rÃ©sultat.</p>';
      return;
    }

    const pays = await reponse.json();
    afficherRecherche(pays);
    // ... afficher les rÃ©sultats (rÃ©utiliser le pattern d'affichage)

  } catch (erreur) {
    conteneurRecherche.innerHTML = '<p class="error">Erreur de recherche.</p>';
  }
});

function afficherRecherche(pays) {
  conteneurRecherche.innerHTML = '';
  pays.forEach((p) => {
    const carte = document.createElement('article');
    carte.classList.add('carte');
    carte.innerHTML = `
      <h3>${p.flag} ${p.name.common}</h3>
      <p>Capitale : ${p.capital ? p.capital[0] : 'Inconnue'}</p>
      <p>Population : ${p.population.toLocaleString()}</p>
    `;
  conteneurRecherche.append(carte);
  });
}

// ===========================================
// TEMPS 4 â€” Bonus (exercices 4.1 Ã  4.3)
// ===========================================

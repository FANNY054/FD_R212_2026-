# Rapport — TP1 

## Points clés

### 1. Création d'une page (Flexbox et Grid)
J'ai appris à créer une vraie page complète et responsive, en utilisant Flexbox et Grid chacun au bon moment pour organiser ma page.

### 2. CSS
J'ai compris le but d'utiliser des variables CSS et d'un code propre et structuré, pour faciliter les modifications, garder de la cohérence et rendre le site plus utilisable.

 
## Utilisation de l'IA

### Démarche

J'ai utilisé Claude.ai version sonnet 4.6, il m'a servi la ou je n'arrivais pas à finir mon code. Il m'a aussi permis de comprendre pourquoi certaines choses ne marchent sur mon code CSS.

### Apports et limites

Je n'arrivais pas à faire fonctionner le footer de mon site, car le code était défaillant, j'ai donc utilisé Claude pour m'aider à le faire. Il m'a aussi aidé à faire la partie media query car je n'ai jamais ça.

### Prompts significatifs

1. "J'ai un site en html et je dois le changer avec CSS. J'aimerais que tu m'aides à comprendre ce qu'il ne va pas et ce que je dois changer." → Le bug du footer : Tu ciblais .contact ul (une classe) alors que dans ton HTML c'est un <footer id="contact">. CSS ne trouvait donc pas l'élément. De plus, position: fixed clouait le footer en bas de l'écran en permanence, ce qui est rarement ce qu'on veut.
Ce que j'ai corrigé/amélioré :
footer est maintenant ciblé directement 
Le position: fixed est supprimé, le footer reste naturellement en bas du contenu
La section #projets utilise un vrai display: grid avec grid-template-columns: repeat(auto-fit, ...) pour les cartes côte à côte
L'header est position: sticky (reste visible en scrollant)

2. "Peux tu m'aider à faire la partie pour le média car je n'y arrive pas" → Le media query s'applique quand l'écran est plus petit que 600px, c'est-à-dire sur mobile. Sur petit écran, le header passe en colonne pour que le logo et le menu se superposent au lieu d'être côte à côte. Les liens du menu se réorganisent pour tenir sur plusieurs lignes si besoin avec flex-wrap: wrap. Les 3 cartes de projets passent en une seule colonne pour être lisibles. Enfin, la section "à propos" s'adapte aussi en colonne pour que la photo et le texte ne soient plus côte à côte mais l'un en dessous de l'autre.

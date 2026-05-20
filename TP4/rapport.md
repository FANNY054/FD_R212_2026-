# Rapport — [TP4]

## Points clés

### 1. [fetch et async/await]

fetch() permet d'aller chercher des données depuis un fichier JSON local ou une API distante. Comme cette opération prend du temps, on utilise async/await pour attendre la réponse avant de continuer, sans bloquer le reste de la page.

### 2. [chargement, succès, erreur]

Quand on fait un appel réseau, il faut toujours prévoir trois cas : afficher un indicateur pendant que ça charge, afficher les données si ça réussit, et afficher un message clair si ça échoue. Le bloc try/catch permet de gérer le cas d'erreur proprement.

### 3. [debounce]

Quand on lance une recherche à chaque frappe clavier, on envoie des dizaines de requêtes inutiles. Le debounce consiste à attendre un court délai après la dernière frappe avant d'envoyer la requête, grâce à setTimeout et clearTimeout.

## Utilisation de l'IA

"Aucune IA utilisée lors de cette séance." -->


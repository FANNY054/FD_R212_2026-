# Rapport — [TP5]

## Points clés

### 1. [Poser la structure HTML en premeier]

Avant de toucher au CSS ou au JS, il faut construire un squelette HTML logique avec les bonnes balises (header, nav, main, section...). Si la page est lisible et compréhensible sans CSS, c'est que la structure est saine.

### 2. [variable css]

Déclarer les couleurs, espacements et rayons dans :root dès le début permet de garder un style cohérent sur toute la page et de modifier facilement l'apparence globale en changeant une seule valeur.

### 3. [Diagnostiquer avant de corriger]

Face à une page cassée, lister tous les problèmes avant de commencer à corriger évite de créer de nouveaux bugs en corrigeant à l'aveugle. Chaque correction doit avoir une raison claire — pas juste "c'est mieux comme ça".

## Utilisation de l'IA

### Démarche

J'ai utilisé Claude comme outil de relecture de mon code

### Apports et limites

Elle m'a aidée à repérer plusieurs erreurs que je n'ai pas forcément vues. Pour la partie diagnostic de la page cassée en revanche, il fallait vraiment manipuler le code et tester soi-même et c'est la que l'ia est moins utile

### Prompts significatifs

1. "Voilà mon script.js, est-ce que tu vois quelque chose qui cloche ?" → L'IA a repéré deux ou trois choses que j'avais laissé passer, notamment un écouteur d'événement mal placé.
2. "C'est quoi la différence entre min-height et height fixe en CSS ?" → Ça a clarifié pourquoi les hauteurs fixes cassent avec du contenu variable, ce que j'avais vu en pratique sans vraiment comprendre pourquoi.

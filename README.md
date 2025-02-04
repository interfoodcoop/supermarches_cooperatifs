# Supermarchés Coopératifs

Développement d'une cartographie des supermarchés coopératifs en France et dans le monde entier avec Leaflet.
Ceci est une maquette de présentation des possibilités d'utilisation de Leaflet avant de développer une application complète (avec un back-office).

## Liens

- [Vue carte](https://interfoodcoop.github.io/supermarches_cooperatifs)
- [Vue liste](https://interfoodcoop.github.io/supermarches_cooperatifs/liste.html)

## Comment modifier la carte ?

- Ajouter ou mettre à jour un supermarché
   - ℹ️ la liste complète se trouve dans le fichier [supermarches.js](./json/supermarches.js)
- Rajouter des fonctionnalités à l'outil

### Ouvrir une issue

Pour ouvrir une issue, et expliquer votre besoin, ça se passe [ici](https://github.com/interfoodcoop/supermarches_cooperatifs/issues).

### Contribuer au code

1. Forker le repo
2. Faire vos modifications
3. Proposer une PR :)

## Fonctionnalités

La page présente une carte du monde et les projets de supermarché coopératif sont indiqué par des plots.

Les plots sont identifiés par différentes icônes :
- lampe : en phase d'idées.
- utilisateurs : en phase de création (groupes de travail).
- sac : en mode laboratoire (groupement d’achat).
- panier : l'épicerie est ouverte.
- caddie : le supermarché est ouvert.

Si on clique sur le plot, nous obtenons les informations sur le projet :
- Nom 
- Adresse
- Logo
- Site Internet
- Courriel
- Page Facebook

Les données sur les différents projets de supermarché coopératif sont mis à jour régulièrement.

## Paramétrage

Il est possible de personnaliser la carte.

Les paramètres modifiables :

Pour la gestion de la carte :
- idDiv : L'id du div qui va afficher la carte.
- Lat : Latitude du centre de la carte.
- Lng : Longitude du centre de la carte.
- zoom : zoom à l'affichage de la carte.
- maxZoom : zoom maximum de la carte.

Pour la gestion des plots :
- marqueurs : Affichage des plots suivant l'avancement du projet
   - typeIcone : L'icône affichée dans le marqueur du plot suivant les [icônes disponibles](https://fontawesome.com/v4.7.0/icons/).
   - couleur : couleur du plot ('red', 'darkred', 'orange', 'green', 'darkgreen', 'blue', 'purple', 'darkpurple', 'cadetblue').
- affichageMarqueur : L'affichage du message lorsque l'on clique sur le plot.
   - message : le code HTML à générer
   - variables : les variables à intégrer dans le message suivant leur index.
   - optionnels : permet de completer le message si la variable optionnelle est renseignée en gardant la même structure que le message principal.

## Lancer en local

### Pré-requis

- un navigateur moderne, le programme a été complètement développé en ECMAScript 7, en mode Objet
- avoir `npm` et `python`

### Installer les dépendances

```
npm install
```

### Lancer le projet

```
python -m http.server
```

Le site est accessible sur http://0.0.0.0:8000

## Licence

Le projet est sous licence MIT. Voir la [LICENCE](./LICENSE) pour plus de détails.

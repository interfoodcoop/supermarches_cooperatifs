# Supermarchés Coopératifs
Développement d'une cartographie des supermarchés coopératifs en France et dans le monde entier avec Leaflet.
Ceci est une maquette de présentation des possibilités d'utilisation de Leaflet avant de développer une application complète (avec un back-office). 

# Pré-requis
Un navigateur moderne, le programme a été completement développé en ECMAScript 7, en mode Objet.

# Fonctionnalité
La page présente une carte du monde et les projets de supermarché coopératif sont indiqué par des plots.

Les plots sont identifiés par différents icônes :
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

les données sur les différents projets de supermarché coopératif a été remis à jours le 04 février 2020.

# Accesibilité
Comme la cartographie interactive n'est pas accessible à tout le monde, une page alternative avec un affichage en tableau est proposé :
[Page d'accessibilité](https://zuff69.github.io/supermarches_cooperatifs/liste.html)

# Paramétrage
Il est possible de personnaliser la carte.

Les paramètres modifiables :

Pour la gestion de la carte :
- idDiv : L'id du div qui va afficher la carte.
- Lat : Lattitude du centre de la carte.
- Lng : Longitude du centre de la carte.
- zoom : zoom à l'affichage de la carte.
- maxZoom : zoom maximum de la carte.

Pour la gestion des plots :
- marqueurs : Affichage des plots suivant l'avancement du projet
   - typeIcone : L'icone affichée dans le marqueur du plot suivant les [icônes disponibles](https://fontawesome.com/v4.7.0/icons/).
   - couleur : couleur du plot ('red', 'darkred', 'orange', 'green', 'darkgreen', 'blue', 'purple', 'darkpurple', 'cadetblue').
- affichageMarqueur : L'affichage du message lorsque l'on clique sur le plot.
   - message : le code HTML à générer
   - variables : les variables à intégrer dans le message suivant leur index.
   - optionnels : permet de completer le message si la variable optionnelle est renseignée en gardant la même structure que le message principale.

# Démonstration
[Page de démonstration](https://zuff69.github.io/supermarches_cooperatifs/)

# Licence
Le projet est sous licence MIT - voir la [LICENCE](https://github.com/michaeldeloris/people-collector/blob/master/LICENSE) pour plus de détails.

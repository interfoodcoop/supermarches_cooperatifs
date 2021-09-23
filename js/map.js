/* global L */

import { dataDepartements } from '../geoJson/departements.js'
import { dataEurope } from '../geoJson/europe.js'
export class Map {
  // ***************** Variables ************************

  // Variables layerGroups
  // lgroupDepartement;

  // Variables couches
  // layerDepartement;

  // Variables de choroplethe
  // choropletheAvancement = [1, 2, 3, 4, 5];
  // couleursChoropletheRouge = ['#ffffb2', '#fecc5c', '#fd8d3c', '#f03b20', '#bd0026'];
  // couleursChoropletheVert = ['#d9f0a3', '#addd8e', '#78c679', '#31a354', '#006837'];

  // ***************** Fonds de carte ************************
  // https://leaflet-extras.github.io/leaflet-providers/preview/
  // OpenStreet map
  // osm = L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', { attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors' });
  // osmVelo = L.tileLayer('http://{s}.tile.thunderforest.com/cycle/{z}/{x}/{y}.png', { attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> Contributors'});

  // ***************** Fonctions ************************
  constructor (parametresDeLaCarte) {
    this.parametres = parametresDeLaCarte
    this.osm = L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', { attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors' })

    // Initialisation de la couche département (données préchargées par le fichier departements.js)
    this.layerDepartement = L.geoJson(dataDepartements, { style: this.styleNeutre() })

    // Initialisation de la couche des pays d'europe (données préchargées par le fichier europe.js)
    this.layerEurope = L.geoJson(dataEurope, { style: this.styleNeutre() })

    // Initialisation du layerGroup
    this.lgroupContours = L.layerGroup([this.layerDepartement, this.layerEurope])

    // Initialisation de la carte
    this.map = L.map(this.parametres.idDiv, {
      center: new L.LatLng(this.parametres.Lat, this.parametres.Lng),
      zoom: this.parametres.zoom,
      maxZoom: this.parametres.maxZoom,
      layers: [this.osm, this.lgroupContours]
    })
  }

  afficherLaCouleurdesDepartements (data, donnee) {
    this.layerDepartement.eachLayer((layer) => {
      if (JSON.stringify(data).search('"departement":"' + layer.feature.properties.code) >= 0) {
        // let infos = data[layer.feature.properties.code];
        // layer.setStyle(this.styleDepartement(infos[donnee]));
        layer.setStyle(this.styleDepartement(donnee))
      }
    })
  }

  afficherLesPoints (data) {
    // const CouchePoints = L.layerGroup([]);
    data.forEach(element => {
      let typeIcone = this.parametres.marqueurs[0].typeIcone
      let couleurIcone = this.parametres.marqueurs[0].couleur
      if (element.avancement < this.parametres.marqueurs.length) {
        typeIcone = this.parametres.marqueurs[element.avancement].typeIcone
        couleurIcone = this.parametres.marqueurs[element.avancement].couleur
      }

      const iconeMagasin = L.AwesomeMarkers.icon({ icon: typeIcone, prefix: 'fa', markerColor: couleurIcone })
      const marker = L.marker([element.lattitude, element.longitude], { icon: iconeMagasin }).addTo(this.map)

      let affichage = this.genererLeMessageDuMarqueur(JSON.stringify(element), this.parametres.affichageMarqueur.message, this.parametres.affichageMarqueur.variables)
      affichage += this.genererLaPartieOptionnelleDuMessage(element)
      marker.bindPopup(affichage)
    })
  }

  genererLaPartieOptionnelleDuMessage (element) {
    let texteDeRetour = ''
    for (let index = 0; index < this.parametres.affichageMarqueur.optionnels.length; index++) {
      const message = this.parametres.affichageMarqueur.optionnels[index].message
      const texte = this.genererLeMessageDuMarqueur(JSON.stringify(element), message, this.parametres.affichageMarqueur.optionnels[index].variables)
      if (texte !== message) { texteDeRetour += texte }
    }
    return texteDeRetour
  }

  genererLeMessageDuMarqueur (element, message, variables) {
    let texteDeRetour = message
    for (let index = 0; index < variables.length; index++) {
      JSON.parse(element, (key, value) => {
        if (key.toString() === variables[index]) {
          texteDeRetour = texteDeRetour.replace('{' + index + '}', value.trim())
        }
      })
    };
    return texteDeRetour
  }

  // ***************** styles appliqués ************************
  // Affichage du style des Polygones concernés par l'applicatif
  styleDepartement (value) {
    const choropletheAvancement = [1, 2, 3, 4, 5]
    // couleursChoropletheRouge = ['#ffffb2', '#fecc5c', '#fd8d3c', '#f03b20', '#bd0026'];
    const couleursChoroplethe = ['#d9f0a3', '#addd8e', '#78c679', '#31a354', '#006837']

    return {
      fillColor: this.getColor(value, choropletheAvancement, couleursChoroplethe),
      weight: 1,
      opacity: 1,
      color: 'black',
      fillOpacity: 0.15
    }
  }

  // Affichage des contours des Polygones
  styleNeutre () {
    return {
      weight: 0.5,
      color: '#222',
      fillOpacity: 0
    }
  }

  // Choroplétrie de la carte.
  getColor (d, choropletheReferent, choropletheCouleur) {
    return d >= choropletheReferent[4]
      ? choropletheCouleur[4]
      : d >= choropletheReferent[3]
        ? choropletheCouleur[3]
        : d >= choropletheReferent[2]
          ? choropletheCouleur[2]
          : d >= choropletheReferent[1]
            ? choropletheCouleur[1]
            : d >= choropletheReferent[0]
              ? choropletheCouleur[0]
              : '#FFFFFF'
  }

  // Récupère un fichier Json en Ajax
  recupererFichierJsonEnAjax (url) {
    // Création d'une requête HTTP
    const requete = new XMLHttpRequest()
    // Requête HTTP GET synchrone vers le fichier langages.txt publié localement
    requete.open('GET', url, false)
    // Envoi de la requête
    requete.send(null)
    // Affiche la réponse reçue pour la requête
    console.log(requete.responseText)
  }
}

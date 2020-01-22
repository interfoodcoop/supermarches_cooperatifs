class Map{
   
   // ***************** Variables ************************
   // Variables layerGroups
   //lgroupDepartement;

   // Variables couches
   //layerDepartement;
   
   // Variables de choroplethe
   // choropletheAvancement = [1, 2, 3, 4, 5];
   // couleursChoropletheRouge = ['#ffffb2', '#fecc5c', '#fd8d3c', '#f03b20', '#bd0026'];
   // couleursChoropletheVert = ['#d9f0a3', '#addd8e', '#78c679', '#31a354', '#006837'];


   // ***************** Fonds de carte ************************
   //https://leaflet-extras.github.io/leaflet-providers/preview/
   // OpenStreet map
   // osm = L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', { attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors' });
   // osmVelo = L.tileLayer('http://{s}.tile.thunderforest.com/cycle/{z}/{x}/{y}.png', { attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> Contributors'});


   // ***************** Fonctions ************************
   constructor(idDiv, Lat, Lng) {
      this.osm = L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', { attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors' });
    
      // Initialisation de la couche département (données préchargées par le fichier departements.js)
      this.layerDepartement = L.geoJson(dataDepartements, { style: this.styleNeutre()});

      // Initialisation de la couche des pys d'europe (données préchargées par le fichier europe.js)
      this.layerEurope = L.geoJson(dataEurope, { style: this.styleNeutre()});

      // Initialisation du layerGroup
      this.lgroupContours = L.layerGroup([this.layerDepartement, this.layerEurope]);

      // Initialisation de la carte
      this.map = L.map(idDiv, {
         center: new L.LatLng(Lat, Lng),
         zoom: 6,
         maxZoom: 18,
         layers: [this.osm, this.lgroupContours]
      });

   }

   afficherLaCouleurdesDepartements(data, donnee){
      this.layerDepartement.eachLayer( (layer) => {
         if (JSON.stringify(data).search('"departement":"' +layer.feature.properties.code)>=0){
            // let infos = data[layer.feature.properties.code];
            // layer.setStyle(this.styleDepartement(infos[donnee]));   
            layer.setStyle(this.styleDepartement(donnee));       
         }
      });
   }
   
   afficherLesPoints(data){
      //const CouchePoints = L.layerGroup([]);

      data.forEach(element => {
         let typeIcone = '';
         if (element.avancement ===0){typeIcone = 'lightbulb-o';}
         if (element.avancement ===1){typeIcone = 'lightbulb-o';}
         if (element.avancement ===2){typeIcone = 'users';}
         if (element.avancement ===3){typeIcone = 'shopping-bag';}
         if (element.avancement ===4){typeIcone = 'shopping-basket';}
         if (element.avancement ===5){typeIcone = 'shopping-cart';}

         let iconeMagasin = L.AwesomeMarkers.icon({ icon: typeIcone, prefix: 'fa', markerColor: 'green' });
         let marker = L.marker([element.lattitude, element.longitude ], {icon: iconeMagasin}).addTo(this.map); 
         let affichage = `
            <h2>${element.nom}</h2>
            ${element.adresse}<br>
            ${element.ville}<br>
            <img src="./logo/${element.logo}" class="logo">
            `;

         
         if (element.site_web !==""){
            affichage +=`<a href='${element.site_web}'>Site Internet</a><br>`;
         }
         if (element.facebook !==""){
            affichage +=`<a href='${element.facebook}'>Page Facebook</a><br>`;
         }   
         if (element.courriel !==""){
            affichage +=`<a href='mailto:${element.courriel}'>Courriel</a><br>`;
         }            
         marker.bindPopup(affichage );       
      });
      
   }

   // ***************** styles appliqués ************************
   // Affichage du style des Polygones concernés par l'applicatif
   styleDepartement(value) {
      let choropletheAvancement = [1, 2, 3, 4, 5];
      //couleursChoropletheRouge = ['#ffffb2', '#fecc5c', '#fd8d3c', '#f03b20', '#bd0026'];
      let couleursChoroplethe = ['#d9f0a3', '#addd8e', '#78c679', '#31a354', '#006837'];

      return {
          fillColor: this.getColor(value, choropletheAvancement, couleursChoroplethe),
          weight: 1,
          opacity: 1,
          color: 'black',
          fillOpacity: 0.15
      };
   }

   // Affichage des contours des Polygones
   styleNeutre() {
      return {
         weight: 0.5,
         color: '#222',
         fillOpacity: 0   
      }
   }

   // Choroplétrie de la carte.
   getColor(d, choropletheReferent, choropletheCouleur) {
      return d >= choropletheReferent[4] ? choropletheCouleur[4] :
      d >= choropletheReferent[3] ? choropletheCouleur[3] :
      d >= choropletheReferent[2] ? choropletheCouleur[2] :
      d >= choropletheReferent[1] ? choropletheCouleur[1] :
      d >= choropletheReferent[0] ? choropletheCouleur[0] :
      '#FFFFFF';
   }
}

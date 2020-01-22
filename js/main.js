include("./geoJson/departements.js");
include("./geoJson/europe.js");
include("./json/supermarches.js");
include("./js/leaflet.awesome-markers.min.js");
include("./js/map.js");
include("./js/coop.js");
include("./js/coops.js");

document.addEventListener("DOMContentLoaded", ()=> {
   const superCoop = new SupermarchesCooperatifs(supermarches);
   const carte = new Map("mapid", 46.6, 2.2 );
   carte.afficherLaCouleurdesDepartements(supermarches, 4);
   carte.afficherLesPoints(superCoop.getSuperMarchesLocalises());
});


//******** chargement fichier par un autre fichier javascript
function include(fileName) {
   document.write("<script src='"  + fileName + "'></script>");
}
import {supermarches as supermarches} from "../json/supermarches.js";
import "./leaflet.awesome-markers.min.js";
import {Map as Map} from "./map.js";
import {SupermarchesCooperatifs as SupermarchesCooperatifs} from "./coops.js";

document.addEventListener("DOMContentLoaded", ()=> {
   const superCoop = new SupermarchesCooperatifs(supermarches);
   const carte = new Map("mapid", 46.6, 2.2 );
   carte.afficherLaCouleurdesDepartements(supermarches, 4);
   carte.afficherLesPoints(superCoop.getSupermarchesLocalises());
});

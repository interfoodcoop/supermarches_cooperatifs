import {supermarches as supermarches} from "../json/supermarches.js";

document.addEventListener("DOMContentLoaded", ()=> {
  
   const app = new Vue({
      el: '#divListe',
      data: {items:supermarches}
    });

});

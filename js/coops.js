import {SupermarcheCooperatif as SupermarcheCooperatif} from "./coop.js";

export class SupermarchesCooperatifs{

   constructor(donneesJson) {
      this.liste = [];
      Array.from(donneesJson, element=> {
          let supermarche = new SupermarcheCooperatif(element); 
          this.liste.push(supermarche);
      });
   }

   getSupermarches() {
      return this.liste;
   }

   getSupermarchesLocalises() {
      let SupermarchesLocalises = [];
      Array.from(this.liste, element=> {
         if (element.lattitude!= ""){
            SupermarchesLocalises.push(element);
         }
     });
      return SupermarchesLocalises;
   }   

}
class SupermarchesCooperatifs{

   constructor(donneesJson) {
      this.liste = [];
      donneesJson.forEach(element => {
         let supermarche = new SupermarcheCooperatif(element); 
         this.liste.push(supermarche);
      });
   }

   getSuperMarches() {
      return this.liste;
   }

   getSuperMarchesLocalises() {
      let SupermarchesLocalises = [];
      this.liste.forEach(element => {
         if (element.lattitude!= ""){
            SupermarchesLocalises.push(element);
         }
      });
      return SupermarchesLocalises;
   }   

}
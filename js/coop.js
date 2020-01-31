export class SupermarcheCooperatif{

   constructor(donneesJson) {
      this.nom = donneesJson["nom"];
      this.departement = donneesJson["departement"];
      this.adresse = donneesJson["adresse"];
      this.ville = donneesJson["ville"];
      this.logo = donneesJson["logo"];
      this.site_web = donneesJson["site_web"];
      this.courriel = donneesJson["courriel"];
      this.facebook = donneesJson["facebook"];     
      this.avancement = donneesJson["avancement"];
      this.lattitude = donneesJson["lattitude"];     
      this.longitude = donneesJson["longitude"]; 
   }

}
 const parametres = {
   "idDiv":"mapid",
   "Lat":46.6,
   "Lng":2.2,
   "zoom":6,
   "maxZoom":18,
   "marqueurs":[
      {
         "typeIcone":"lightbulb-o",
         "couleur":"red"
      },
      {
         "typeIcone":"lightbulb-o",
         "couleur":"red"
      },
      {
         "typeIcone":"users",
         "couleur":"orange"
      },
      {
         "typeIcone":"shopping-bag",
         "couleur":"green"
      },
      {
         "typeIcone":"shopping-basket",
         "couleur":"green"
      },
      {
         "typeIcone":"shopping-cart",
         "couleur":"green"
      }    
   ],
   "affichageMarqueur":{
      "message":`
      <h2>{0}</h2>
      {1}<br>
      {2}<br>
      <img src="./logo/{3}" class="logo">
      `,
      "variables":["nom","adresse","ville","logo"],
      "optionnels":[
         {"message":`<a href='{0}'>Site Internet</a><br>`,
         "variables":["site_web"]
         },
         {"message":`<a href='{0}'>Page Facebook</a><br>`,
         "variables":["facebook"]
         },
         {"message":`<a href='mailto:{0}'>Courriel</a><br>`,
         "variables":["courriel"]
         },
      ]
   }


};
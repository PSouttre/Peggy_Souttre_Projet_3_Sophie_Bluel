/*****************Récupération des travaux depuis le back end *************/


    fetch ("http://localhost:5678/api/works")
    .then (response => response.json())
    .then (data => {
          for (let i = 0; i < works.length; i++) {


          }
        }
      )
      
      /*console.log (data))
      {
        const galleryDiv = document.querySelector (".gallery");
        const dataImage = document.createElement("img") ;
        dataImage.src = "data.imageUrl";
        dataImage.alt = "data.title";
        galleryDiv.appendChild (dataImage);

    })**/

    /** 
      // Récupération de l'élément du DOM qui accueillera les fiches
      const sectionFiches = document.querySelector(".fiches");
      // Création d’une balise dédiée à une pièce automobile
      const pieceElement = document.createElement("article");
      // On crée l’élément img.
      const imageElement = document.createElement("img");
      // On accède à l’indice i de la liste pieces pour configurer la source de l’image.
      imageElement.src = pieces[i].image;
      // Idem pour le nom, le prix et la catégorie...
      
      // On rattache la balise article à la section Fiches
      sectionFiches.appendChild(pieceElement);
      // On rattache l’image à pieceElement (la balise article)
      pieceElement.appendChild(imageElement);
      // Idem pour le nom, le prix et la catégorie...
      */



/*************** Envoyer les valeurs d'entrée du formulaire login***********/

/* Selection du formulaire par son id */
const formulaire = document.getElementById ("login");

/* Ajout d'un gestionnaire d'évenement pour le soumettre*/
formulaire.addEventListener ("submit", (event)=>{
      event.preventDefault();
});/*Empêche la page de se recharger lors du submit*/

/*Récupérer les données du formulaire*/
const formulaireData = new formulaireData (formulaire);

/*Envoyer les données au serveur*/
await fetch ("http://localhost:5678/api/users/login", {
  method :"POST",
  body :formulaireData
})
.then (response => response.json())
.then (response2 => {
  if (response2.status === 200){
      window.location.href = "url page d'accueil.html"
    }
  else {
    throw new console.error( "Identifiant ou mot de passe incorrect");
  }
})

/* Stocker le token d'authentification dans le localStorage*/
const token = window.localStorage.setItem ("formulaireData", "formulaireDataValue");

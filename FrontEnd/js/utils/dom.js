export const displayWorks = (works) => {
  // récupére là où on veut afficher nos works
  const gallery = document.querySelector('.gallery')

  // on boucle sur TOUS les works
  for (let i = 0; i < works.length; i++) {

    // créer une figure qui correspond à un work
    const figure = `<figure>
      <img src=${works[i].imageUrl} alt=${works[i].title}>
      <figcaption>${works[i].title}</figcaption>
    </figure>`

    // on insère dans la gallery
    gallery.innerHTML += figure
  }
}



// Affichage des catégories
export const displayCategories = (categories) => {

    //on récupère là où on veut afficher nos catégories
    const filters = document.querySelector('.filters')

    // on boucle sur toutes les catégories
    for (let i =0; i< categories.length; i++) {

        // créer un bouton qui correspond à une catégorie
        const buttonCategories = `<button>${categories[i].name}</button>`

        //on insère dans la div filters
        filters.innerHTML += buttonCategories


    // Ajouter une class à chaque bouton
      // const buttonFilters = document.querySelectorAll("button")
        //buttonFilters.classList.add("objet", "Appartements", "Hôtels et Restaurants")

    //Ajout d'un eventListener au moment du clic d'un bouton catégorie
       // buttonCategories.addEventListener("click", () => {
            //fonction que fait le tri de la catégorie par categoryId ds works
      //  })

    }
}

 

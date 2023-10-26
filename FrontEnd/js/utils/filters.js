// Ajout d'un eventListener au moment du clic d'un bouton catégorie

import { displayWorks } from "./dom";
import { displayCategories } from "./dom";

        
const buttonCategories = document.querySelectorAll(".filters button");
buttonCategories.forEach((button) => {
    button.addEventListener("click", () => {

        const category = category[i].name

        if (category === "tous"){
            displayWorks();

        } else {

            //Filtrer les works par catégorie
            gallery.innerHTML ="";
            works.forEach((works) => {
                if (works.categoryId === category) {
                    
                const figure = `<figure>
                <img src=${works[i].imageUrl} alt=${works[i].title}>
                <figcaption>${works[i].title}</figcaption>
                </figure>`
              
                }
            })

        }
        })
})

displayWorks(works);




buttonCategories.addEventListener("click", () => {
      })


    
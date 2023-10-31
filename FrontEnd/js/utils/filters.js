// Ajout d'un eventListener au moment du clic d'un bouton catégorie

import { displayWorks } from "./dom";
import { displayCategories } from "./dom";

export const buttonCategories = document.querySelectorAll(".filters button");
console.log(buttonCategories);

buttonCategories.forEach((button) => {
  button.addEventListener("click", (e) => {
    const category = category[i].name;
    if (category === "tous") {
      //Définir "tous"
      displayWorks();
    } else {
      //Filtrer les works par catégorie
      works.forEach((works) => {
        if (works.categoryId === category) {
          const figure = `<figure> 
               <img src=${works[i].imageUrl} alt=${works[i].title}>
                 <figcaption>${works[i].title}</figcaption>
                 </figure>`; // i doit correspondre à la catégorie sélectionnée
        }
      });
    }
  });
});

displayWorks(works);

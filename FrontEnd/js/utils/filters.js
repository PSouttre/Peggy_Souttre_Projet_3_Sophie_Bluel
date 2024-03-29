// AJOUT D'UN EVENTLISTENER AU MOMENT DU CLIC D'UN BOUTON CATEGORIE
import { getWorks } from "./fetch.js";
import { displayWorks } from "./dom.js";

export const onClickFilters = () => {
  const buttonCategories = document.querySelectorAll(".filter-tag");

  buttonCategories.forEach((button) => {
    // quand on click sur un bouton/filtre
    button.addEventListener("click", async () => {
      // on va récupérer tous les works dans l'API
      const works = await getWorks();
      // on récupère le categoryId du buton
      const categoryId = button.getAttribute("categoryId");

      // si categoryId est false alors on affiche tout
      if (categoryId === "false") {
        displayWorks(works);
      } else {
        // on filtre les works
        const filteredWorks = works.filter((work) => {
          return work.categoryId == categoryId;
        });

        // on les affiche
        displayWorks(filteredWorks);
      }
    });
  });
};

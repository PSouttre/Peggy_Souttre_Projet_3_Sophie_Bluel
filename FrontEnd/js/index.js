import { getWorks } from "./utils/fetch.js";
import { displayWorks } from "./utils/dom.js";
import { getCategories } from "./utils/fetch.js";
import { displayCategories } from "./utils/dom.js";
import { onClickFilters } from "./filters.js";

// FICHIER D'INITIALISATION
const init = async () => {
  // async
  const works = await getWorks();
  const categories = await getCategories();

  displayWorks(works);
  displayCategories(categories);

  onClickFilters();

  // 3 - si j'ai un token dans le localStorage
  // alors on affiche les boutons de modifications

  // ============================================ //
  // !! COMMIT AVANT DE FAIRE CES DEUX ETAPES !!
  // ============================================ //
  // 4 - commence par essayer de delete les works

  // 5 - ajout d'un work
};

init();

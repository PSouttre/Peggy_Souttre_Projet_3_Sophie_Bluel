import { getWorks } from "./utils/fetch.js";
import { displayWorks } from "./utils/dom.js";
import { getCategories } from "./utils/fetch.js";
import { displayCategories } from "./utils/dom.js";
import { onClickFilters } from "./filters.js";
import {
  displayWorksModale,
  openModaleEdit1,
  openModaleEdit2,
  closeModale,
} from "./modale.js";

// FICHIER D'INITIALISATION
const init = async () => {
  // async
  const works = await getWorks();
  const categories = await getCategories();

  displayWorks(works);
  displayCategories(categories);
  displayWorksModale(works);

  onClickFilters();

  const buttonModifier = document.querySelector("#buttonModifier");
  buttonModifier.addEventListener("click", openModaleEdit1);

  const buttonAddPhoto = document.querySelector(".buttonAddPhoto");
  buttonAddPhoto.addEventListener("click", openModaleEdit2);

  const cross = document.querySelector("#cross");
  cross.addEventListener("click", closeModale);

  const shadow = document.querySelector(".modaleContainer");
  shadow.addEventListener("click", closeModale);
};

// 3 - si j'ai un token dans le localStorage
// alors on affiche les boutons de modifications

// if (localStorage.getItem("userLogin") != null) {
//   blackBanner.style.display = "block";
//   mesProjetsModeEdit.style.display = "block";
// }

// ============================================ //
// !! COMMIT AVANT DE FAIRE CES DEUX ETAPES !!
// ============================================ //
// 4 - commence par essayer de delete les works

// 5 - ajout d'un work

init();

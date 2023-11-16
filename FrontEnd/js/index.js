import { getWorks, getCategories } from "./utils/fetch.js";
import {
  displayWorks,
  displayCategories,
  displayAdminPart,
} from "./utils/dom.js";
import { onClickFilters } from "./utils/filters.js";
import { openModale, closeModale, displayWorksModale } from "./utils/modale.js";
import { logout } from "./utils/auth.js";

// FICHIER D'INITIALISATION
const init = async () => {
  // async
  const works = await getWorks();
  const categories = await getCategories();

  // UI
  displayWorks(works);
  displayCategories(categories);
  displayAdminPart();

  // Functionality
  onClickFilters();
  logout();

  // Modale
  openModale();
  closeModale();
  displayWorksModale(works);
};

init();

import { getWorks } from "./utils/fetch.js";
import { displayWorks } from "./utils/dom.js";
import { getCategories } from "./utils/fetch.js";

// FICHIER D'INITIALISATION
const init = async () => {
  const works = await getWorks()
  displayWorks(works)
}

init()
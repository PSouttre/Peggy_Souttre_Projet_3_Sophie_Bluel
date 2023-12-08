import { displayWorks } from "./dom.js";
import { getWorks, removeWork } from "./fetch.js";
import { postWork } from "./fetch.js";

// OUVERTURE DE LA MODALE
export const openModale = () => {
  const modifierBtn = document.querySelector("#modifier");
  const modale = document.querySelector(".modaleContainer");
  const shadow = document.querySelector(".shadow");
  const modaleEdit1 = document.querySelector(".modaleHomePageEdit1");
  const modaleEdit2 = document.querySelector(".modaleHomePageEdit2");
  const preview = document.getElementById("imgPreview");

  const tagTitle = document.getElementById("title");
  const tagCategory = document.getElementById("category");
  const buttonValider = document.getElementById("buttonValider");

  shadow.addEventListener("click", () => {
    modale.classList.add("hidden");

    if (!modaleEdit2.classList.contains("hidden")) {
      modaleEdit1.classList.toggle("hidden");
      modaleEdit2.classList.toggle("hidden");
    }
    // on vide l'image, le titre et la catégorie
    preview.src = "";
    logoImg.classList.remove("hidden");
    labelAddImg.classList.remove("hidden");
    tagTitle.value = "";
    tagCategory.value = "";

    // retour du bouton valider en gris
    buttonValider.style.backgroundColor = "#A7A7A7";
  });

  modifierBtn.addEventListener("click", () => {
    modale.classList.toggle("hidden");
  });
};

export const openModale2 = () => {
  const addPhoto = document.querySelector(".buttonAddPhoto");
  const modaleEdit1 = document.querySelector(".modaleHomePageEdit1");
  const modaleEdit2 = document.querySelector(".modaleHomePageEdit2");

  addPhoto.addEventListener("click", () => {
    modaleEdit1.classList.toggle("hidden");
    modaleEdit2.classList.toggle("hidden");
  });
};

// FERMETURE DE LA MODALE
export const closeModale = () => {
  const cross = document.querySelector("#cross");
  const modale = document.querySelector(".modaleContainer");
  const crossEdit2 = document.querySelector("#crossEdit2");
  const modaleEdit2 = document.querySelector(".modaleHomePageEdit2");
  const modaleEdit1 = document.querySelector(".modaleHomePageEdit1");
  const buttonValider = document.getElementById("buttonValider");
  const preview = document.getElementById("imgPreview");
  const tagTitle = document.getElementById("title");
  const tagCategory = document.getElementById("category");

  cross.addEventListener("click", () => {
    modale.classList.add("hidden");
  });

  crossEdit2.addEventListener("click", () => {
    if (!modaleEdit2.classList.contains("hidden")) {
      modaleEdit1.classList.toggle("hidden");
      modaleEdit2.classList.toggle("hidden");
    }
    modale.classList.add("hidden");

    // on vide l'image, le titre et la catégorie
    preview.src = "";
    logoImg.classList.remove("hidden");
    labelAddImg.classList.remove("hidden");
    tagTitle.value = "";
    tagCategory.value = "";

    // retour du bouton valider en gris
    buttonValider.style.backgroundColor = "#A7A7A7";
  });
};

// CLICK SUR LA FLECHE RETOUR
export const back = () => {
  const arrow = document.querySelector("#arrow");
  const modaleEdit1 = document.querySelector(".modaleHomePageEdit1");
  const modaleEdit2 = document.querySelector(".modaleHomePageEdit2");
  const tagTitle = document.getElementById("title");
  const tagCategory = document.getElementById("category");
  const buttonValider = document.getElementById("buttonValider");

  arrow.addEventListener("click", () => {
    modaleEdit1.classList.toggle("hidden");
    modaleEdit2.classList.toggle("hidden");
    preview.src = "";
    logoImg.classList.remove("hidden");
    labelAddImg.classList.remove("hidden");
    // vider le titre et la categorie
    tagTitle.value = "";
    tagCategory.value = "";
    // retour du bouton valider en gris
    buttonValider.style.backgroundColor = "#A7A7A7";
  });
};

// AFFICHER LES TRAVAUX DANS LA MODALE
export const displayWorksModale = (works) => {
  const galleryModale = document.querySelector(".galleryModale");

  galleryModale.innerHTML = "";

  // on boucle sur TOUS les works
  for (let i = 0; i < works.length; i++) {
    // créer une figure qui correspond à un work
    const figureModale = `
      <figure id="id-${works[i].id}">
        <img src=${works[i].imageUrl} alt=${works[i].title}>
        <div id="${works[i].id}" class="trash"><i class="fa-solid fa-trash-can"></i></div>
      </figure>
      `;

    // on insère dans la gallery
    galleryModale.innerHTML += figureModale;
  }

  // SUPPRIMER UN WORK
  // on récupère nos poubelles
  const trashes = document.querySelectorAll(".trash");
  // on ajoute l'evenement onClick qui appelera le fetch avec le bon id
  trashes.forEach((trash) => {
    trash.addEventListener("click", async () => {
      await removeWork(trash.id); // remove from BDD
      const works = await getWorks(); // les récupérer dans la BDD
      displayWorksModale(works); // refresh modale
      displayWorks(works); // refresh DOM
    });
  });

  // AFFICHER L'IMAGE MINIATURE DE LA MODALE
  const input = document.getElementById("buttonAddImg");
  const preview = document.getElementById("imgPreview");
  const labelAddImg = document.getElementById("labelAddImg");
  const logoImg = document.getElementById("logoImg");
  const paragraph = document.getElementById("textAddPhoto");

  input.addEventListener("change", (e) => {
    const imageSource = URL.createObjectURL(e.target.files[0]);

    preview.setAttribute("src", imageSource);
    labelAddImg.classList.add("hidden");
    logoImg.classList.add("hidden");
    paragraph.classList.add("hidden");
  });

  // CHANGEMENT DE COULEUR DU BOUTON VALIDER DU FORM D'AJOUT D'UN NOUVEAU WORK
  const form = document.querySelector(".formAddWork");
  form.addEventListener("change", async (event) => {
    event.preventDefault();

    const tagTitle = document.getElementById("title");
    const valueTitle = tagTitle.value;
    const tagCategory = document.getElementById("category");
    const valueCategory = tagCategory.value;
    const preview = document.getElementById("imgPreview");
    const valuePreview = preview.value;
    const buttonValider = document.getElementById("buttonValider");

    if (valueTitle != "" && valueCategory != "" && valuePreview != "") {
      buttonValider.style.backgroundColor = "#1D6154";
    }
  });
};

// AJOUTER UN NOUVEAU WORK
// on ajoute l'évenement : au click du bouton envoyer = appelle le fetch
const form = document.querySelector(".formAddWork");
const preview = document.getElementById("imgPreview");
const tagTitle = document.getElementById("title");
const tagCategory = document.getElementById("category");
const buttonValider = document.getElementById("buttonValider");
const modale = document.querySelector(".modaleContainer");
const modaleEdit1 = document.querySelector(".modaleHomePageEdit1");
const modaleEdit2 = document.querySelector(".modaleHomePageEdit2");

form.addEventListener("submit", async (event) => {
  event.preventDefault();
  await postWork();
  const works = await getWorks(); // les récupérer dans la BDD
  displayWorksModale(works); // refresh modale
  displayWorks(works); // refresh DOM

  if (!modaleEdit2.classList.contains("hidden")) {
    modaleEdit1.classList.toggle("hidden");
    modaleEdit2.classList.toggle("hidden");
  }

  // Fermer la modale
  modale.classList.add("hidden");
  // Supprimer le shadow

  // Vider la preview
  preview.src = "";
  labelAddImg.classList.remove("hidden");
  logoImg.classList.remove("hidden");
  // vider le titre et la categorie
  tagTitle.value = "";
  tagCategory.value = "";
  // retour du bouton valider en gris
  buttonValider.style.backgroundColor = "#A7A7A7";
});

import { displayWorks } from "./dom.js";
import { getWorks, removeWork } from "./fetch.js";
import { postWork } from "./fetch.js";

// OUVERTURE DE LA MODALE
export const openModale = () => {
  const modifierBtn = document.querySelector("#modifier");
  const modale = document.querySelector(".modaleContainer");
  const shaddow = document.querySelector(".shaddow");

  shaddow.addEventListener("click", () => {
    modale.classList.add("hidden");
  });

  modifierBtn.addEventListener("click", () => {
    modale.classList.remove("hidden");
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

  cross.addEventListener("click", () => {
    modale.classList.add("hidden");
  });

  crossEdit2.addEventListener("click", () => {
    if (!modaleEdit2.classList.contains("hidden")) {
      modaleEdit1.classList.toggle("hidden");
      modaleEdit2.classList.toggle("hidden");
    }
    modale.classList.add("hidden");
  });
};

// CLICK SUR LA FLECHE RETOUR
export const back = () => {
  const arrow = document.querySelector("#arrow");
  const modaleEdit1 = document.querySelector(".modaleHomePageEdit1");
  const modaleEdit2 = document.querySelector(".modaleHomePageEdit2");

  arrow.addEventListener("click", () => {
    modaleEdit1.classList.toggle("hidden");
    modaleEdit2.classList.toggle("hidden");
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

  input.addEventListener("change", (e) => {
    // console.log(e.target.files[0]);
    const imageSource = URL.createObjectURL(e.target.files[0]);
    // console.log(imageSource);

    preview.setAttribute("src", imageSource);
    labelAddImg.classList.add("hidden");
    logoImg.classList.add("hidden");
  });

  // REMPLISSAGE DU FORMULAIRE D'AJOUT D'UN NOUVEAU WORK

  // si tous les champs sont ok alors le bouton valider devient vert
  // = si photo .png ou .pjg  + nom + catégorie
  form.addEventListener("change", async (event) => {
    event.preventDefault();
    if (/*pas tous les champs rempli*/) {
      alert("Veuillez renseigner tous les champs")
    }
    else {
      // changer le bouton en vert
  }
  });
};




  // AJOUTER UN NOUVEAU WORK
  // on ajoute l'évenement : au click du bouton envoyer = appelle le fetch
  const form = document.querySelector(".formAddWork");
  const preview = document.getElementById("imgPreview");

  form.addEventListener("submit", async (event) => {
    event.preventDefault();
    await postWork();
    const works = await getWorks(); // les récupérer dans la BDD
    displayWorksModale(works); // refresh modale
    displayWorks(works); // refresh DOM
    closeModale();
  });
};

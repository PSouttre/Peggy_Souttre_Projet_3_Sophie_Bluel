export const openModale = () => {
  const modifierBtn = document.querySelector("#modifier");
  const modale = document.querySelector(".modaleContainer");

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

export const closeModale = () => {
  const cross = document.querySelector("#cross");
  const modale = document.querySelector(".modaleContainer");
  const crossEdit2 = document.querySelector("#crossEdit2");

  cross.addEventListener("click", () => {
    modale.classList.add("hidden");
  });

  // fermer en cliquant en dehors de la modale
  // modale.addEventListener("click", () => {
  //   modale.classList.add("hidden");
  // });

  crossEdit2.addEventListener("click", () => {
    modale.classList.add("hidden");
  });
};

export const back = () => {
  const arrow = document.querySelector("#arrow");
  const modaleEdit1 = document.querySelector(".modaleHomePageEdit1");
  const modaleEdit2 = document.querySelector(".modaleHomePageEdit2");

  arrow.addEventListener("click", () => {
    modaleEdit1.classList.toggle("hidden");
    modaleEdit2.classList.toggle("hidden");
  });
};

export const displayWorksModale = (works) => {
  const galleryModale = document.querySelector(".galleryModale");

  // on boucle sur TOUS les works
  for (let i = 0; i < works.length; i++) {
    // créer une figure qui correspond à un work
    const figureModale = `
      <figure id="id-${works[i].id}">
        <img src=${works[i].imageUrl} alt=${works[i].title}>
        <div class="trash id-${works[i].id}"><i class="fa-solid fa-trash-can" id="trash" ></i></div>
      </figure>
      `;

    // on insère dans la gallery
    galleryModale.innerHTML += figureModale;
  }
};

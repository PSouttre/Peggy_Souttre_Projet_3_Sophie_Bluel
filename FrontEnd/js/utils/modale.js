export const openModale = () => {
  const modifierBtn = document.querySelector("#modifier");
  const modale = document.querySelector(".modaleContainer");

  modifierBtn.addEventListener("click", () => {
    modale.classList.remove("hidden");
  });
};

export const closeModale = () => {
  const cross = document.querySelector("#cross");
  const modale = document.querySelector(".modaleContainer");

  cross.addEventListener("click", () => {
    modale.classList.add("hidden");
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

export const openModaleEdit1 = () => {
  const modale = document.querySelector(".modaleHomePageEdit1");
  modale.style.display = "block";
};

export const openModaleEdit2 = () => {
  const modale = document.querySelector(".modaleHomePageEdit2");
  openModaleEdit2.style.display = "block";
};

export const closeModale = () => {
  const modale = document.querySelector(".modaleContainer");
  modale.style.display = "none";
};

export const displayWorksModale = (works) => {
  const galleryModale = document.querySelector(".galleryModale");

  // on boucle sur TOUS les works
  for (let i = 0; i < works.length; i++) {
    // créer une figure qui correspond à un work
    const figureModale =
      `<figure>
        <img src=${works[i].imageUrl} alt=${works[i].title}>
      </figure>` +
      `<div class = "trash"><i class="fa-solid fa-trash-can" id="trash" ></i></div>`;

    // on insère dans la gallery
    galleryModale.innerHTML += figureModale;
  }
};

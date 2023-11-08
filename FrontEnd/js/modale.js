export const openModale = () => {
  const modale = document.querySelector(".modale-container");
  modale.style.display = "block";
};

export const closeModale = () => {
  const modale = document.querySelector(".modale-container");
  modale.style.display = "none";
};

export const displayWorksModale = (works) => {
  const galleryModale = document.querySelector(".galleryModale");

  // on boucle sur TOUS les works
  for (let i = 0; i < works.length; i++) {
    // créer une figure qui correspond à un work
    const figureModale = `<figure>
        <img src=${works[i].imageUrl} alt=${works[i].title}>
      </figure>`;
    // on insère dans la gallery
    galleryModale.innerHTML += figureModale;
  }
};

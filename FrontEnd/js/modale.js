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
console.log(galleryModale);

// export const onClickModifier = () => {

//     buttonModifier.addEventListener("click", () => {
//         //ouvrir la modale
// });

// buttonCategories.forEach((button) => {
//   // quand on click sur un bouton/filtre
//   button.addEventListener("click", async () => {
//     // on va récupérer tous les works dans l'API
//     const works = await getWorks();
//     // on récupère le categoryId du buton
//     const categoryId = button.getAttribute("categoryId");

//     // si categoryId est false alors on affiche tout
//     if (categoryId === "false") {
//       displayWorks(works);
//     } else {
//       // on filtre les works
//       const filteredWorks = works.filter((work) => {
//         return work.categoryId == categoryId;
//       });

//       // on les affiche
//       displayWorks(filteredWorks);
//     }
//   });
// });
//   };

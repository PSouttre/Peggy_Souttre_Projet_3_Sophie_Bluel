export const displayWorks = (works) => {
  // récupére là où on veut afficher nos works
  const gallery = document.querySelector('.gallery')

  // on boucle sur TOUS les works
  for (let i = 0; i < works.length; i++) {

    // créer une figure qui correspond à un work
    const figure = `<figure>
      <img src=${works[i].imageUrl} alt=${works[i].title}>
      <figcaption>${works[i].title}</figcaption>
    </figure>`

    // on insère dans la gallery
    gallery.innerHTML += figure
  }
}


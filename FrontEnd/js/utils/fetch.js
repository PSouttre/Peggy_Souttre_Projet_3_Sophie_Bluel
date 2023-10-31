// function async qui permet de récupérer les works
export const getWorks = async () => {
  try {
    // on part chercher les données (mais ça peut prendre du temps)
    const data = await fetch("http://localhost:5678/api/works", {
      method: "GET",
    });

    // on veut récupérer les données qui nous intéresse
    const response = await data.json();

    // retourne la réponse pour les récupérer dehors
    return response;
  } catch (error) {
    console.log(error);
    // gère l'erreur avec de UI (ex: message d'erreur, fin du loader, redirection...)
  }
};

// function async qui permet de récupérer les categories

export const getCategories = async () => {
  try {
    const dataCategories = await fetch("http://localhost:5678/api/categories");
    const responseCategories = await dataCategories.json();
    return responseCategories;
  } catch (error) {
    console.log(error);
  }
};

/************   Authentification de l'utilisateur *******************/

const inputEmail = document.querySelector('input[type="email"]');
const inputPassword = document.querySelector('input[type="password"]');
const form = document.querySelector("form");

console.log(inputEmail);

inputEmail.addEventListener("input", (e) => {
  const emailUser = e.target.value;
});

inputPassword.addEventListener("input", (e) => {
  const passwordUser = e.target.value;
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
});

const dataUser = { emailUser, passwordUser };

export const resultPostAdmin = async () => {
  try {
    const dataAdmin = await fetch("http://localhost:5678/api/users/login", {
      method: "POST",
      body: "dataUser",
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.log(error);
  }
};

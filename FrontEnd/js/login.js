/************   Authentification de l'utilisateur *******************/
import { postLogin } from "./utils/fetch.js";

const init = async () => {
  const inputEmail = document.querySelector("#email");
  const inputPassword = document.querySelector("#mdp");
  const form = document.querySelector("form");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    // récupérer les valeures des inputs
    const email = inputEmail.value;
    const password = inputPassword.value;

    const data = { email, password };
    const response = await postLogin(data);

    if (response.error) {
        // afficher un message d'erreur
    } else {
        // 1 - on sauvegarde le UserID et le token (tout l'objet)
        // dans le localStorage
        // 2 - on redirige vers /index.html
    }

  });
};

init();

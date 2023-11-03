/************   Authentification de l'utilisateur *******************/
import { postLogin } from "./utils/fetch.js";

const init = async () => {
  const inputEmail = document.querySelector("#email");
  const inputPassword = document.querySelector("#mdp");
  const form = document.querySelector("form");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    // récupérer les valeurs des inputs      Nécessaire ?? cf postLogin fetch.js
    // const email = inputEmail.value;
    // const password = inputPassword.value;
    // const data = { email, password };

    const response = postLogin();
    const user = {
      userId: responseLogin.userId,
      token: responseLogin.token,
    };

    if (response.error) {
      // afficher un message d'erreur
      form.innerHTML = `<p>Identifiant ou mot de passe incorrect<p>`;
    } else {
      // 1 - on sauvegarde le UserID et le token (tout l'objet)
      // dans le localStorage
      localStorage.setItem("userLogin", JSON.stringify(user));

      // 2 - on redirige vers /index.html
      window.location.href = "/index.html";
    }
  });
};

init();

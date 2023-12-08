import { postLogin } from "./fetch.js";

export const handleForm = () => {
  const form = document.querySelector("form");
  const inputEmail = document.querySelector("#email");
  const inputPassword = document.querySelector("#mdp");

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    // création des data à envoyé au backend
    const data = {
      email: inputEmail.value,
      password: inputPassword.value,
    };

    const response = await postLogin(data);

    // gestion de la réponse
    // si NOK
    if (response.error) {
      // gérer l'erreur
      const error = document.querySelector(".error");
      error.innerHTML = response.message;
      error.classList.remove("hidden");
      // message à afficher : “Erreur dans l’identifiant ou le mot de passe”
    } else {
      // si OK
      localStorage.setItem("user", JSON.stringify(response));
      // redirige sur la home
      window.location.href = "index.html";
    }
  });
};

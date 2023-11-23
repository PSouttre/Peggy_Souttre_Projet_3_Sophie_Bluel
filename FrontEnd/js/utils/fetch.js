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

// fonction pour envoyer email + mdp et récupérer userid et token

export const postLogin = async (data) => {
  try {
    const dataAdmin = await fetch("http://localhost:5678/api/users/login", {
      method: "POST",
      body: JSON.stringify(data),
      headers: { "Content-Type": "application/json" },
    });

    if (dataAdmin.status == 200) {
      const responseLogin = await dataAdmin.json();
      return responseLogin;
    } else {
      return {
        error: true,
        message: "Une erreur s'est produite, veuillez réessayer.",
      };
    }
  } catch (error) {
    console.log(error);
    return {
      error: true,
      message: "fetch not working",
    };
  }
};

// // Suppression de travaux existants
export const removeWork = async (id) => {
  const user = JSON.parse(localStorage.getItem("user"));

  try {
    await fetch(`http://localhost:5678/api/works/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${user.token}`,
      },
    });
  } catch (error) {
    console.log(error);
    return {
      error: true,
      message: "fetch not working",
    };
  }
};

// Envoi d'un nouveau projet
export const postWork = async () => {
  try {
    const formData = new FormData();

    formData.append(
      "title",
      document.querySelector('input[name="title"]').value
    );
    formData.append(
      "image",
      document.getElementById("buttonAddImage").files[0]
    );
    formData.append(
      "category",
      document.querySelector('select[name="category"]').value
    );
    console.log(formData);

    await fetch("http://localhost:5678/api/works", {
      method: "POST",
      body: formData,
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${user.token}`,
      },
    });
  } catch (error) {
    console.log(error);
    return {
      error: true,
      message: "fetch not working",
    };
  }
};

// FUNCTION ASYNC QUI PERMET DE RECUPERER LES WORKS
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
  }
};

// FUNCTION ASYNC QUI PERMET DE RECUPERER LES CATEGORIES
export const getCategories = async () => {
  try {
    const dataCategories = await fetch("http://localhost:5678/api/categories");
    const responseCategories = await dataCategories.json();
    return responseCategories;
  } catch (error) {
    console.log(error);
  }
};

// FUNCTION POUR RECUPERER MAIL + MDP ET USERID ET TOKEN
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

// SUPPRESSION DES TRAVAUX EXISTENTS
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

// ENVOI D'UN NOUVEAU PROJET
export const postWork = async () => {
  const user = JSON.parse(localStorage.getItem("user"));

  try {
    const formData = new FormData();

    formData.append(
      "title",
      document.querySelector("input[name='title']").value
    );
    formData.append(
      "image",
      document.querySelector("input[type='file']").files[0]
    );
    formData.append(
      "category",
      document.querySelector('select[name="category"]').value.split("-")[1]
    );

    const response = await fetch("http://localhost:5678/api/works", {
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

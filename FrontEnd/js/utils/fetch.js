// function async qui permet de récupérer les works
export const getWorks = async () => {
    try {
        // on part chercher les données (mais ça peut prendre du temps)
        const data = await fetch("http://localhost:5678/api/works", {
            method: "GET"
        })

        // on veut récupérer les données qui nous intéresse
        const response = await data.json()

        // retourne la réponse pour les récupérer dehors
        return response
        
    } catch (error) {
        console.log(error)
        // gère l'erreur avec de UI (ex: message d'erreur, fin du loader, redirection...)
    }
}

export const getCategories = async () => {
    try {
        const dataCategories = await fetch ("http://localhost:5678/api/categories")
        const responseCategories = await dataCategories.json()
        return responseCategories
    } catch (error) {
        console.log(error)
    }
}

import { baseUrl, repositoriesQuantity } from "../variables.js"

async function getRepositories(userName){
    const response = await fetch(`${baseUrl}/${userName}/repos?per_page=${repositoriesQuantity}`)
    let resultRepo = await response.json();
    console.log(resultRepo);
    return resultRepo
    
}

export {getRepositories}
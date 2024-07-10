import { baseUrl, repositoriesQuantity } from "../variables.js"

async function getEvents(userName){
    const response = await fetch(`${baseUrl}/${userName}/events?per_page=${repositoriesQuantity}`)
    const result = await response.json()
    console.log(result)
    return result
}

export {getEvents}
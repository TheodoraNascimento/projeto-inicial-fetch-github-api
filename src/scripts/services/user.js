import { baseUrl} from "../variables.js"

async function getUser(userName){
    const response = await fetch(`${baseUrl}/${userName}`)
    const resulUser = await response.json()
    console.log(resulUser);
    return resulUser
}

export {getUser}
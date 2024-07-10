let eventsList = ""

const screen = {
   
    userprofile: document.querySelector(".profile-data"),
    renderUser(user){
        this.userprofile.innerHTML  = `<div class="info">
                            <img src="${user.avatarUrl}" alt="Foto do perfil" />
                            <div class="data">
                                <h1>${user.name ?? "Não possui nome cadastrado"}</h1>
                                <p>${user.bio ?? "Não possui bio cadastrada"}</p>
                                <div class="section">
                                <h3>Following: ${user.following}</h3>
                                <br>
                                <h3>Followers: ${user.followers}</h3>
                                </div>
                            </div>
                        </div>`
        
        
        let repositoriesItens = ""
        user.repositories.forEach(function(repo) {
            
          
            repositoriesStatus(user)
              repositoriesItens +=  `<li><a href="${repo.html_url}" target="_blank">${repo.name}: </a>${repositorieStatus}</li> `
           
        })

        if(user.repositories.length > 0){
           
            this.userprofile.innerHTML +=`<div class="repositories section">
                                             <h2>Repositórios</h2>
                                             <ul>${repositoriesItens}</ul>
                                          </div>`
        }

        user.events.forEach(function(event) {
            typeEvent(event)
         })

        if(user.events.length > 0){
           
            this.userprofile.innerHTML +=`<div class="events section">
                                             <h2>Events</h2>
                                             <ul>${eventsList}</ul>
                                          </div>`                                  
        }
    },

    renderNotFound(){
        this.userprofile.innerHTML = "<h3>Usuário não encontrado<h3>"
    }
}

let count = 0
function typeEvent(event){
    if(event.type === "PushEvent"){
        eventsList += `<li class="event">
                         <p><span class="repositorie-info">Repertório nome: </span>${event.repo.name} </p>
                         <p><span class="repositorie-info">Event Type: </span> ${event.type} </p>
                         <p><span class="repositorie-info">Commit message: </span> ${event.payload.commits[0].message}</p>
                       </p>`
                       
                    }
    else if(event.type === "CreateEvent"){
        eventsList += `<li class="event">
                         <p><span class="repositorie-info">Repertório nome: </span>${event.repo.name}</p>
                         <p><span class="repositorie-info">Event Type: </span> ${event.type} </p>
                         <p><span class="repositorie-info">Commit message: </span> Sem mensagem de commit</p>
                      </li>`      
            }
}

let repositorieStatus = ""
function repositoriesStatus(user){
   repositorieStatus = `<p class="status" >
    <span class="repositorie-status">👀 : ${user.repositories[count].watchers}</span> 
    <span class="repositorie-status"> ⑂ : ${user.repositories[count].forks} </span> 
    <span class="repositorie-status">⭐️ : ${user.repositories[count].stargazers_count} </span> 
    <span class="repositorie-status"> 💻 : ${user.repositories[count].language} </span>
</p>`
count ++
return repositorieStatus
}


export {screen}


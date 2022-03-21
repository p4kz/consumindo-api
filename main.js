
async function getContent(){
    
    try{
        const response = await fetch('http://localhost:4567/') 
        //console.log(response)
        const data = await response.json()          
        show(data) // <- show in front
    } catch (error) {
        console.error(error)
    }

}

// mostrando users no front
function show(users){

    let output = ''
    for (let user of users ){
        output +=`<li>${user.name}</li>`
    }

    document.querySelector('main').innerHTML = output

}


getContent()

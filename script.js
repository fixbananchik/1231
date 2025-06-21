import generateTemplate from "./generate.js"



function handleJson(data){
    console.log('успешно обработан json')
    console.log(data)
    console.log(generateTemplate(data[0]))
}

function handleError(error){
    console.log('произошла ошибка в json')
    console.log(error)
}

function handleResponse(response){
    console.log('Все хорошо')
    console.log(response)

    response.json().then(handleJson).catch(handleError)
}



let users = fetch('http://run.mocky.io/v3/2a938c37-b6cd-46f4-8b5b-8eb8118d7b7b').then(handleResponse).catch(handleError)

console.log(users)


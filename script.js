const url = "https://api.thecatapi.com/v1/images/search"
const section = document.querySelector('.container');
const button = document.querySelector('.btn');

/* Quando clicar no botão, é chamada a função "getRandomCats" */
button.addEventListener('click', getRandomCats);

/* Recebe um objeto JSON como argumento e cria uma imagem aleatória com base na URL fornecida pelo JSON */
randomCatPhoto = (json) => {
    let photo = json[0].url
    section.classList.add('cats')

    let image = document.createElement('img')
    image.src = photo;
    image.classList.add('random_cats')
    image.alt = photo
    section.appendChild(image);
}

/*
Define uma função assíncrona que faz uma solicitação à API para obter uma imagem de gato aleatória quando chamada. 
Ele limpa o conteúdo da seção e, em seguida, faz a solicitação usando fetch. 
Quando a resposta é recebida, o JSON é extraído e a função randomCatPhoto é chamada para exibir a imagem de gato na página. 
Se ocorrer algum erro durante o processo, uma mensagem de erro é registrada no console.
*/
async function getRandomCats() {
    section.innerHTML = ""
    try {
        const response = await fetch(url)
        const json = await response.json()
        console.log('JSON:', json);
        return randomCatPhoto(json)
    } catch (e) {
        console.log('Error')
        console.log(e);
    }
}
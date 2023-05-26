const draw_button = document.querySelector('.draw-button');
const cardArea = document.querySelector('.card-area');
const baseURL = 'https://deckofcardsapi.com/api/deck';

// Create Card HTML
function createCardHTML(imgSrc, offset) {
    // const HTML = `<img class="card" src="${imgSrc}" alt="" style="translate: 0px ${offset}px;">`
    // return HTML

    const newCard = document.createElement('img')
    newCard.classList.add('card')
    newCard.src = imgSrc
    newCard.style.translate = `0px ${offset}px`

    return newCard

}

window.addEventListener("load", (e) => {

    // 1
    axios.get(`${baseURL}/new/shuffle`)
    .then(res => {
        return axios.get(`${baseURL}/${res.data.deck_id}/draw`)
    })
    .then(res => {
        console.log(`${res.data.cards[0].value} of ${res.data.cards[0].suit}`)
    })

    // 2
    let deckId2;
    let cardOneString;
    let cardTwoString;

    axios.get(`${baseURL}/new/shuffle`)
    .then(res => {
        deckId2 = res.data.deck_id
        return axios.get(`${baseURL}/${deckId2}/draw`)
    })
    .then(res => {
        cardOneString = `${res.data.cards[0].value} of ${res.data.cards[0].suit}`
        return axios.get(`${baseURL}/${deckId2}/draw`)
    })
    .then(res => {
        cardTwoString = `${res.data.cards[0].value} of ${res.data.cards[0].suit}`
        console.log(cardOneString)
        console.log(cardTwoString)
    })

    // 3
    let deck_id = null;
    let previousOffset = 0;

    // Get Deck ID - Show draw button.
    axios.get(`${baseURL}/new/shuffle`)
    .then(res => {
        deck_id = res.data.deck_id;
        draw_button.style.display = "block"
    })

    draw_button.addEventListener('click', (e) => {
        axios.get(`${baseURL}/${deck_id}/draw/`).then(({data}) => {

            let imgSrc = data.cards[0].image;
            let offset = previousOffset + 60;

            let newCard = createCardHTML(imgSrc,offset);
            cardArea.appendChild(newCard);
            previousOffset = offset;

            if (data.remaining === 0) {
                draw_button.style.display = "none"
            }
        })
    })

})
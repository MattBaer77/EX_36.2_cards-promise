// Global Variables
const drawButton = document.querySelector('.draw-button');
const cardArea = document.querySelector('.card-area');
const cardsBaseURL = 'https://deckofcardsapi.com/api/deck';

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

// On Load
window.addEventListener("load", (e) => {

    // 1
    axios.get(`${cardsBaseURL}/new/shuffle`)
    .then(res => {
        return axios.get(`${cardsBaseURL}/${res.data.deck_id}/draw`)
    })
    .then(res => {
        console.log(`${res.data.cards[0].value} of ${res.data.cards[0].suit}`)
    })

    // 2
    // Variables just for 2
    let deckId2;
    let cardOneString;
    let cardTwoString;

    // 2 Call
    axios.get(`${cardsBaseURL}/new/shuffle`)
    .then(res => {
        deckId2 = res.data.deck_id
        return axios.get(`${cardsBaseURL}/${deckId2}/draw`)
    })
    .then(res => {
        cardOneString = `${res.data.cards[0].value} of ${res.data.cards[0].suit}`
        return axios.get(`${cardsBaseURL}/${deckId2}/draw`)
    })
    .then(res => {
        cardTwoString = `${res.data.cards[0].value} of ${res.data.cards[0].suit}`
        console.log(cardOneString)
        console.log(cardTwoString)
    })

    // 3
    let deckId = null;
    let previousOffset = 0;

    // Get Deck ID - Show draw button.
    axios.get(`${cardsBaseURL}/new/shuffle`)
    .then(res => {
        deckId = res.data.deck_id;
        drawButton.style.display = "block"
    })

    // Event Listener for button click.
    drawButton.addEventListener('click', (e) => {
        axios.get(`${cardsBaseURL}/${deckId}/draw/`).then(({data}) => {

            let imgSrc = data.cards[0].image;
            let offset = previousOffset + 60;

            let newCard = createCardHTML(imgSrc,offset);
            cardArea.appendChild(newCard);
            previousOffset = offset;

            if (data.remaining === 0) {
                drawButton.style.display = "none"
            }
        })
    })

})
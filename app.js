
// Create Card HTML
function createCardHTML() {
    const HTML = '<div>Some HTML</div>'
}

// Draw Card
function drawCard() {
    console.log('Draw!')
}







// App
// Select Button
// Init on load
// Shuffle on load
// Button draws card
// Create card html
// Put card on page



window.addEventListener("load", (e) => {

    // 1



    // 2

    // 3
    const draw_button = document.querySelector('.draw-button')

    let baseURL = 'https://deckofcardsapi.com/api/deck'

    let deck_id = null
    let previousOffset = 0

    // Get Deck ID - Show draw button.
    axios.get(`${baseURL}/new/shuffle`)
    .then(res => {
        deck_id = res.data.deck_id;
        draw_button.style.display = "block"
    })

    draw_button.addEventListener('click', (e) => {
        console.log(deck_id)
        axios.get(`${baseURL}/${deck_id}/draw/`).then(({data}) => {
            let imgSrc = data.cards[0].image;
            let offset = previousOffset + 10
            console.log(imgSrc)
            console.log(offset)
            previousOffset = offset
            if (data.remaining === 0) {
                draw_button.style.display = "none"
            }
        })
    })

})

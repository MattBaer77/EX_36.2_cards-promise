
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

    const draw_button = document.querySelector('.draw-button')

    let baseURL = 'https://deckofcardsapi.com/api'

    let deck_id = null

    // Get Deck ID
    axios.get(`${baseURL}/deck/new`)
    .then(res => {
        deck_id = res.data.deck_id
        return axios.get()
    })

    // 

    draw_button.addEventListener('click', (e) => {
        console.log(deck_id)
    })


})

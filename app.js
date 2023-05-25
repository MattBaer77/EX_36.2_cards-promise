// Models

// Game



// Init


// Shuffle


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

const draw_button = document.querySelector('.draw-button')

draw_button.addEventListener('click', (e) => {
    drawCard()
})

window.addEventListener("load", (e) => {
    console.log("init")
    console.log("shuffle")
    console.log("loaded")
})

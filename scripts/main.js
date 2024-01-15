import {qwertyToCmajorScale} from './variables.js'
const submitButton = document.querySelector('#submit-btn')
const userInput = document.querySelector('#user-input')

submitButton.addEventListener('click', (e) => {
    e.preventDefault()
    handleInput()
})

userInput.addEventListener('keyup', (e) => {
    if (e.key === 'Enter') {
        e.preventDefault(); 
        handleInput(this.value)
        this.value = '';
    }
});

function handleInput() {
    if (userInput.value) {
        mapKeys(userInput.value)
        console.log(userInput.value)
        userInput.value = ''
    }
}

function mapKeys(text) {
    let letters = text.toUpperCase().split('').filter(char => char !== ' ')
    console.log(letters)
    letters.forEach((key, index) => {
        let note = qwertyToCmajorScale[key]
        setTimeout(() => {
            playKey(note)
        }, 500 * index)
    })
}

function playKey(key) {
    let note = new Audio(`../assets/sounds/piano/5/${key}.mp3`)
    note.play()
}
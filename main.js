const handleInput = document.querySelector('#submit-btn').addEventListener('click', (e) => {
    const userInput = document.querySelector('#user-input').value

    e.preventDefault()

    if (userInput.value) {
        console.log(userInput.value)
        userInput.value = ''
    }
})


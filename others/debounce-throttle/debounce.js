const defaultText = document.getElementById("default")
const debounceText = document.getElementById("debounce")
const pokemonInput = document.querySelector('.pokemon-input')
const pokemonImg = document.querySelector('.pokemon-img')
const errorText = document.querySelector('.error')


function debounce(cb, delay = 1000) {
    let timeout

    return (...args) => {
        clearTimeout(timeout)
        timeout = setTimeout(() => {
            cb(...args)
        }, delay);
    }
}


// -------------------------------------------------->

const updateDebounceText = debounce(text => {
    debounceText.textContent = text
}, 250)


// ------------------------------------------------->
let apiCallCount = 0
let inputEventCount = 0
const apiCountDisplay = document.getElementById('api-count')
const inputCountDisplay = document.getElementById('input-count')

const searchPokemon = debounce(async (id) => {
    try {
        errorText.textContent = ''
        pokemonImg.style.display = 'none'

        if (!id || id < 1 || id > 1025) {
            throw new Error('Please enter a number between 1 and 1025')
        }
        pokemonInput.disabled = true

        apiCallCount++
        apiCountDisplay.textContent = apiCallCount

        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
        if (!response.ok) {
            throw new Error('Pokemon not found!')
        }

        const data = await response.json()
        pokemonImg.src = data.sprites.front_default
        pokemonImg.style.display = 'inline'

        pokemonInput.value = ''
        pokemonInput.disabled = false
        pokemonInput.focus()
    } catch (error) {
        errorText.textContent = error.message
        pokemonInput.disabled = false
    }
}, 1000)


pokemonInput.addEventListener('input', (e) => {
    inputEventCount++
    inputCountDisplay.textContent = inputEventCount

    e.target.value = e.target.value.replace(/[^0-9]/g, '')

    let value = parseInt(e.target.value)
    if (value > 1025) {
        e.target.value = '1025'
        value = 1025
    }
    searchPokemon(value)
})
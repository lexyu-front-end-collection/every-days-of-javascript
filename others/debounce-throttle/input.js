const input = document.querySelector("input")

input.addEventListener("input", e => {
    defaultText.textContent = e.target.value
    updateDebounceText(e.target.value)
    updateThrottlePrototypeText(e.target.value)
    updateThrottleBetterText(e.target.value)
})
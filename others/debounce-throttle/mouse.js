const mouseDefaultText = document.getElementById("mouse-default")
const mouseDebounceText = document.getElementById("mouse-debounce")
const mouseThrottlePrototypeText = document.getElementById("mouse-throttle-prototype")
const mouseThrottleBetterText = document.getElementById("mouse-throttle-better")

const updateMouseDebounceText = debounce(() => {
    incrementCount(mouseDebounceText)
}, 500)

const updateMouseThrottlePrototypeText = throttle_prototype(() => {
    incrementCount(mouseThrottlePrototypeText)
}, 750)

const updateMouseThrottleBetterText = throttle(() => {
    incrementCount(mouseThrottleBetterText)
}, 750)


document.addEventListener("mousemove", e => {
    incrementCount(mouseDefaultText)
    updateMouseDebounceText()
    updateMouseThrottlePrototypeText()
    updateMouseThrottleBetterText()
})

function incrementCount(element) {
    element.textContent = (parseInt(element.innerText) || 0) + 1
}
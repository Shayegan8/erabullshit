let nav = document.getElementById("nav")
let welcome = document.getElementById("welcome")

function isShown(e) {
    var rect = e.getBoundingClientRect()
    var top = rect.top
    var bottom = rect.bottom
    return top < window.innerHeight && bottom > 0
}

window.addEventListener("scroll", () => {
    if(isShown(welcome)) {
        nav.style.animation = "navanim1 0.2s forwards"
        setTimeout(() => {
            nav.style.display = "none"
        }, 199)
    } else {
        nav.style.animation = "navanim 0.2s"
        setTimeout(() => {
            nav.style.display = "flex"
        }, 199)
    }
})
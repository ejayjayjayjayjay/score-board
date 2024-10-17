let scoreEl = document.getElementById("score-el")
let guestEl = document.getElementById("guest-el")

let homeScore = 0
let guestScore = 0

// Home button

function addOneHome() {
    homeScore += 1
    scoreEl.textContent = homeScore
}
function addTwoHome() {
    homeScore += 2
    scoreEl.textContent = homeScore
}
function addThreeHome() {
    homeScore += 3
    scoreEl.textContent = homeScore
}

// Guest button

function addOneGuest() {
    guestScore += 1
    guestEl.textContent = guestScore
}
function addTwoGuest() {
    guestScore += 2
    guestEl.textContent = guestScore
}
function addThreeGuest() {
    guestScore += 3
    guestEl.textContent = guestScore
}
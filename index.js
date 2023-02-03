// let homeScoreBtnOne = document.getElementById("increase1home")
let homeScoreEl =document.getElementById("numbers")
let homeScore = 0

function add12h(){
    homeScore += 1
    homeScoreEl.textContent = homeScore
}
function add22h(){
    homeScore += 2
    homeScoreEl.textContent = homeScore
}
function add32h(){
    homeScore += 3
    homeScoreEl.textContent = homeScore
}

let guestScoreEl =document.getElementById("numbersg")
let guestScore = 0

function add12g(){
    guestScore +=1
    guestScoreEl.textContent = guestScore
}

function add22g(){
    guestScore +=2
    guestScoreEl.textContent = guestScore
}

function add32g(){
    guestScore +=3
    guestScoreEl.textContent = guestScore
}
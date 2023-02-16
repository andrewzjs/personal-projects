const hallOfFruits = [
    ["freshAvocado", 10, 1],
    ["happyWatermelon", 8, 2],
    ["sweetStrawberry", 5, 3],
    ["rottenBanana", -10, 4],
];

const fruits = {
    "Fresh Avocado": 30,
    "Happy Watermelon": 15,
    "Sweet Strawberry": 10,
    "Rotten Banana": 10,
}

// Cached Element References
const topTextEl = document.getElementById("top-text");
const totalCoinsEl = document.getElementById("total-coins-num");
const fruit1El = document.getElementById("cell1-fruit");
const fruit2El = document.getElementById("cell2-fruit");
const fruit3El = document.getElementById("cell3-fruit");
const fruit1SlotEl = document.querySelector(".slot1");
const fruit2SlotEl = document.querySelector(".slot2");
const fruit3SlotEl = document.querySelector(".slot3");
const fruit1BtmEl = document.querySelector(".cell1-bottom");
const fruit2BtmEl = document.querySelector(".cell2-bottom");
const fruit3BtmEl = document.querySelector(".cell3-bottom");
const newGameBtnEl = document.getElementById("reset");
const spinBtnEl = document.getElementById("spin");
const enterNameEl = document.getElementById("name-input");
const submitBtnEl = document.getElementById("submit-btn");
const gameStartEl = document.getElementById("game-start");
const spinBeepEl = document.getElementById("spin-beep");
const gameOverEl = document.getElementById("game-over");
const gameMatchEl = document.getElementById("game-match");
const gameWinEl = document.getElementById("game-win");
const mainGameAreaEl = document.getElementById("main-game-area")
const userNameEl = document.getElementById("user-name")
const userNameLoserEl = document.getElementById("loser")
const backgroundMusicEl = document.getElementById("background-music")

spinBtnEl.style.opacity = "0.3"
enterNameEl.style.visibility = "hidden"
submitBtnEl.style.visibility = "hidden"
userNameEl.style.visibility = "hidden"
userNameLoserEl.style.visibility = "hidden"
backgroundMusicEl.volume = 0.12
backgroundMusicEl.style.visibility = "hidden"


let numFruits = hallOfFruits.length
let totalCoins = 20;

let fruit1Key = Object.keys(fruits)[0]
let fruit2Key = Object.keys(fruits)[1]
let fruit3Key = Object.keys(fruits)[2]
let fruit4Key = Object.keys(fruits)[3]

let fruit1Value = Object.values(fruits)[0]
let fruit2Value = Object.values(fruits)[1]
let fruit3Value = Object.values(fruits)[2]
let fruit4Value = Object.values(fruits)[3]

// Event Listeners

newGameBtnEl.addEventListener("click", newGame)
submitBtnEl.addEventListener("click", newProfile)


// Functions 

pauseMatchAnimation()

function render() {
    pauseMatchAnimation()
    spinBeepEl.volume = 0.1
    spinBeepEl.play()
    topTextEl.innerHTML = `Welcome, ${enterNameEl.value}! ʕ•́ᴥ•̀ʔっ`
    fruitSlot1()
    fruitSlot2()
    fruitSlot3()
    matchCondition1()
    winCondition()
    lossCondition()
    userNameEl.innerHTML = `${enterNameEl.value}: ${totalCoinsEl.innerText}`
    userNameLoserEl.innerHTML = `${enterNameEl.value}: ${totalCoinsEl.innerText}`
}

function randNumGenerator() {
    randomNum = Math.floor(Math.random() * 4 + 1)
    return randomNum
    // newFruitArray = [4, 4, 3, 3, 3, 2, 2, 2, 1, 1]
    // randomNum = Math.floor(Math.random() * 10)
    // return newFruitArray[randomNum]
}

function fruitSlot1() {
    randNumGenerator()
    if (randomNum === hallOfFruits[0][2]) {
        fruit1El.style.backgroundImage = `url("https://img.freepik.com/premium-vector/avocado-pixel-characters-8-bit-fruit-vector-illustrations-game-assets-cross-stitch_614713-1170.jpg?w=2000")`
        fruit1BtmEl.innerHTML = "Fresh Avocado"
    } else if (randomNum === hallOfFruits[1][2]) {
        fruit1El.style.backgroundImage = `url("https://img.freepik.com/premium-vector/8-bit-pixels-watermelon-slices-fruit-pixels-game-icons-illustration-stitch-cross-vector_614713-1187.jpg")`
        fruit1BtmEl.innerHTML = "Happy Watermelon"
    } else if (randomNum === hallOfFruits[2][2]) {
        fruit1El.style.backgroundImage = `url("https://img.freepik.com/premium-vector/8-bit-pixel-strawberry-fruits-pixel-game-assets-cross-stitch-patterns-vector_614713-1185.jpg?w=2000")`
        fruit1BtmEl.innerHTML = "Sweet Strawberry"
    } else if (randomNum === hallOfFruits[3][2]) {
        fruit1El.style.backgroundImage = `url("https://ih1.redbubble.net/image.1269997801.9804/st,small,507x507-pad,600x600,f8f8f8.jpg")`
        fruit1BtmEl.innerHTML  = "Rotten Banana"
    } else {
        fruit1BtmEl.innerHTML = fruit1Key
    }
}

function fruitSlot2() {
    randNumGenerator()
    if (randomNum === hallOfFruits[0][2]) {
        fruit2El.style.backgroundImage = `url("https://img.freepik.com/premium-vector/avocado-pixel-characters-8-bit-fruit-vector-illustrations-game-assets-cross-stitch_614713-1170.jpg?w=2000")`
        fruit2BtmEl.innerHTML = "Fresh Avocado"
    } else if (randomNum === hallOfFruits[1][2]) {
        fruit2El.style.backgroundImage = `url("https://img.freepik.com/premium-vector/8-bit-pixels-watermelon-slices-fruit-pixels-game-icons-illustration-stitch-cross-vector_614713-1187.jpg")`
        fruit2BtmEl.innerHTML = "Happy Watermelon"
    } else if (randomNum === hallOfFruits[2][2]) {
        fruit2El.style.backgroundImage = `url("https://img.freepik.com/premium-vector/8-bit-pixel-strawberry-fruits-pixel-game-assets-cross-stitch-patterns-vector_614713-1185.jpg?w=2000")`
        fruit2BtmEl.innerHTML = "Sweet Strawberry"
    } else if (randomNum === hallOfFruits[3][2]) {
        fruit2El.style.backgroundImage = `url("https://ih1.redbubble.net/image.1269997801.9804/st,small,507x507-pad,600x600,f8f8f8.jpg")`
        fruit2BtmEl.innerHTML  = "Rotten Banana"
    } else {
        fruit2BtmEl.innerHTML =  fruit2Key
    }
    
}

function fruitSlot3() {
    randNumGenerator()
    if (randomNum === hallOfFruits[0][2]) {
        fruit3El.style.backgroundImage = `url("https://img.freepik.com/premium-vector/avocado-pixel-characters-8-bit-fruit-vector-illustrations-game-assets-cross-stitch_614713-1170.jpg?w=2000")`
        fruit3BtmEl.innerHTML = "Fresh Avocado"
    } else if (randomNum === hallOfFruits[1][2]) {
        fruit3El.style.backgroundImage = `url("https://img.freepik.com/premium-vector/8-bit-pixels-watermelon-slices-fruit-pixels-game-icons-illustration-stitch-cross-vector_614713-1187.jpg")`
        fruit3BtmEl.innerHTML = "Happy Watermelon"
    } else if (randomNum === hallOfFruits[2][2]) {
        fruit3El.style.backgroundImage = `url("https://img.freepik.com/premium-vector/8-bit-pixel-strawberry-fruits-pixel-game-assets-cross-stitch-patterns-vector_614713-1185.jpg?w=2000")`
        fruit3BtmEl.innerHTML = "Sweet Strawberry"
    } else if (randomNum === hallOfFruits[3][2]) {
        fruit3El.style.backgroundImage = `url("https://ih1.redbubble.net/image.1269997801.9804/st,small,507x507-pad,600x600,f8f8f8.jpg")`
        fruit3BtmEl.innerHTML = "Rotten Banana"
    } else {
        fruit3BtmEl.innerHTML =  fruit3Key
    }
    
}

function matchCondition1() {
    if (fruit1BtmEl.innerHTML ===  fruit2BtmEl.innerHTML && fruit1BtmEl.innerHTML ===  fruit3BtmEl.innerHTML) {
        if (fruit1BtmEl.innerHTML === fruit1Key) {
            totalCoins += fruit1Value
            totalCoinsEl.innerHTML = totalCoins
            topTextEl.innerHTML = `It's a Match! + ${fruit1Value} coins`
            topTextEl.style.color = "yellowgreen"
            playMatchAnimation()
            gameMatchEl.play()
        } else if (fruit1BtmEl.innerHTML === fruit2Key) {
            totalCoins += fruit2Value
            totalCoinsEl.innerHTML = totalCoins
            topTextEl.innerHTML = `It's a Match! + ${fruit2Value} coins`
            topTextEl.style.color = "yellowgreen"
            playMatchAnimation()
            gameMatchEl.play()
        } else if (fruit1BtmEl.innerHTML === fruit3Key) {
            totalCoins +=  fruit3Value
            totalCoinsEl.innerHTML = totalCoins
            topTextEl.innerHTML = `It's a Match! + ${fruit3Value} coins` 
            topTextEl.style.color = "yellowgreen"
            playMatchAnimation()
            gameMatchEl.play()
        } else if (fruit1BtmEl.innerHTML === fruit4Key) {
            totalCoins -=  fruit4Value
            totalCoinsEl.innerHTML = totalCoins
            topTextEl.innerHTML = `Ew, Rotten Bananas! - ${fruit4Value} coins`
            topTextEl.style.color = "red"
            gameOverEl.play()
        }
    } else {
        totalCoins -= 1
        totalCoinsEl.innerHTML = totalCoins
    }
    spinBtnEl.removeEventListener("click", render)
    spinBtnEl.style.visibility = "hidden"
}


function winCondition() {
    if (totalCoins >= 35) {
       totalCoinsEl.innerHTML = totalCoins
       totalCoinsEl.style.color = "green"
       spinBtnEl.style.opacity = "0.4"
       topTextEl.innerHTML = "CONGRATULATIONS!! YOU WON"
       topTextEl.style.color = "yellowgreen"
       playMatchAnimation()
       gameMatchEl.pause()
       spinBeepEl.pause()
       gameWinEl.volume = 0.8
       gameWinEl.duration = "2s"
       gameWinEl.play()
       spinBtnEl.removeEventListener("click", render)
       stopTimer() 
       userNameEl.style.visibility = "visible"
        
    } else {
        spinBtnEl.addEventListener("click", render)
    lossCondition()
    spinBtnEl.style.visibility = "hidden"
}
}
function lossCondition() {
    if (totalCoins <= 0) {
        totalCoinsEl.innerHTML = totalCoins
        totalCoinsEl.style.color = "red"
        topTextEl.innerHTML = "YOU LOST!! TRY AGAIN"
        topTextEl.style.color = "red"
        spinBtnEl.removeEventListener("click", render)
        spinBtnEl.style.opacity = "0.4"
        stopTimer() 
        spinBeepEl.pause()
        gameOverEl.play()
        userNameLoserEl.style.visibility = "visible"
    } else {
        spinBtnEl.style.visibility = "visible"
        spinBtnEl.addEventListener("click", render)
    }
    spinBtnEl.style.visibility = "hidden"
}

function newGame() {
    backgroundMusicEl.play()
    pauseMatchAnimation()
    userNameEl.style.visibility = "hidden"
    userNameLoserEl.style.visibility = "hidden"
    gameStartEl.volume = 0.8
    gameStartEl.duration = "2s"
    gameStartEl.play()
    spinBtnEl.style.opacity = "0.3"
    spinBtnEl.style.disabled = true
    enterNameEl.style.visibility = "hidden"
    submitBtnEl.style.visibility = "hidden"
    enterNameEl.style.visibility = "visible"
    newGameBtnEl.style.visibility = "hidden"
    submitBtnEl.style.visibility = "visible"
    totalCoinsEl.style.color = "white"
    fruit1El.style.backgroundImage = `url("https://img.freepik.com/premium-vector/avocado-pixel-characters-8-bit-fruit-vector-illustrations-game-assets-cross-stitch_614713-1170.jpg?w=2000")`
    fruit2El.style.backgroundImage = `url("https://img.freepik.com/premium-vector/8-bit-pixels-watermelon-slices-fruit-pixels-game-icons-illustration-stitch-cross-vector_614713-1187.jpg")`
    fruit3El.style.backgroundImage = `url("https://img.freepik.com/premium-vector/8-bit-pixel-strawberry-fruits-pixel-game-assets-cross-stitch-patterns-vector_614713-1185.jpg?w=2000")`
    totalCoinsEl.innerHTML = "20"
    totalCoins = 20
    topTextEl.innerHTML = "Welcome! ʕ•́ᴥ•̀ʔっ"
    topTextEl.style.color = "white"
    fruit1BtmEl.innerHTML = "spin"
    fruit2BtmEl.innerHTML = "to"
    fruit3BtmEl.innerHTML = "win!"
    stopTimer()
}

function newProfile() {
    gameStartEl.volume = 0.8
    gameStartEl.play()
    spinBtnEl.addEventListener("click", render)
    enterNameEl.style.visibility = "hidden"
    submitBtnEl.style.visibility = "visible"
    newGameBtnEl.style.visibility = "visible"
    submitBtnEl.style.visibility = "hidden"
    spinBtnEl.style.opacity = "1"
    totalCoinsEl.style.color = "white"
    fruit1El.style.backgroundImage = `url("https://img.freepik.com/premium-vector/avocado-pixel-characters-8-bit-fruit-vector-illustrations-game-assets-cross-stitch_614713-1170.jpg?w=2000")`
    fruit2El.style.backgroundImage = `url("https://img.freepik.com/premium-vector/8-bit-pixels-watermelon-slices-fruit-pixels-game-icons-illustration-stitch-cross-vector_614713-1187.jpg")`
    fruit3El.style.backgroundImage = `url("https://img.freepik.com/premium-vector/8-bit-pixel-strawberry-fruits-pixel-game-assets-cross-stitch-patterns-vector_614713-1185.jpg?w=2000")`
    totalCoinsEl.innerHTML = "20"
    totalCoins = 20
    topTextEl.innerHTML = `Welcome, ${enterNameEl.value}! ʕ•́ᴥ•̀ʔっ`
    topTextEl.style.color = "white"
    fruit1BtmEl.innerHTML = "spin"
    fruit2BtmEl.innerHTML = "to"
    fruit3BtmEl.innerHTML = "win!"
    startTimer()
}


function startTimer() {
    start = setInterval(function() {
        spinBtnEl.style.visibility = "visible"
        document.querySelector(".lever").style.visibility = "visible"
        spinBtnEl.addEventListener("click", render)
        }, 800)
        
}

function stopTimer() {
    clearInterval(start)
    document.querySelector(".lever").style.visibility = "hidden"
}

function playMatchAnimation() {
    fruit1SlotEl.style.animation = "pulse 1s infinite"
    fruit2SlotEl.style.animation = "pulse 1s infinite"
    fruit3SlotEl.style.animation = "pulse 1s infinite"

}

function pauseMatchAnimation() {
    fruit1SlotEl.style.animation = "null"
    fruit2SlotEl.style.animation = "null"
    fruit3SlotEl.style.animation = "null"
}

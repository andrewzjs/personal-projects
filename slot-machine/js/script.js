// Application State (Data/Variables)

const hallOfFruits = [
    ["freshAvocado", 10, 1],
    ["happyWatermelon", 6, 2],
    ["sweetStrawberry", 3, 3],
    ["rottenBanana", 10, 4],
];

let totalCoins = 20;
// document.getElementById("spin").disabled = !

// Cached Element References
const topTextEl = document.getElementById("top-text");
const totalCoinsEl = document.getElementById("total-coins-num");
const fruit1El = document.getElementById("cell1-fruit");
const fruit2El = document.getElementById("cell2-fruit");
const fruit3El = document.getElementById("cell3-fruit");
const fruit1BtmEl = document.querySelector(".cell1-bottom");
const fruit2BtmEl = document.querySelector(".cell2-bottom");
const fruit3BtmEl = document.querySelector(".cell3-bottom");
const newGameBtnEl = document.getElementById("reset");
const spinBtnEl = document.getElementById("spin");
let numFruits = hallOfFruits.length

// Event Listeners

newGameBtnEl.addEventListener("click", newGame)
spinBtnEl.addEventListener("click", render)
// Functions 

spinBtnEl.disabled = true;
function render() {
    topTextEl.innerHTML = "Welcome! ʕ•́ᴥ•̀ʔっ"
    fruitSlot1()
    fruitSlot2()
    fruitSlot3()
    matchCondition1()
    winCondition()
    lossCondition()
}
function randNumGenerator() {
    randomNum = Math.floor(Math.random() * 5)
    console.log(randomNum)
    return randomNum
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
        fruit1BtmEl.innerHTML = "Rotten Banana"
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
        fruit2BtmEl.innerHTML = "Rotten Banana"
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
    } 
}

function matchCondition1() {
    if (fruit1BtmEl.innerHTML ===  fruit2BtmEl.innerHTML && fruit1BtmEl.innerHTML ===  fruit3BtmEl.innerHTML) {
        totalCoins += 10
        totalCoinsEl.innerHTML = totalCoins
        topTextEl.innerHTML = "It's a Match! +10 coins"
    } else {
        totalCoins -= 10
        totalCoinsEl.innerHTML = totalCoins
    }
}


function winCondition() {
    if (totalCoins >= 40) {
       topTextEl.innerHTML = "CONGRATULATIONS!! YOU WON"
       disableBtn()
    } 
    lossCondition()
}

function lossCondition() {
    if (totalCoins <= 0) {
        topTextEl.innerHTML = "YOU LOST!! TRY AGAIN"
        disableBtn()
    }
}

function disableBtn() {
    spinBtnEl.removeEventListener("click", disableBtn)
}

//     return randomFruit === 1 ? fruit1El.style.backgroundImage = `url("https://img.freepik.com/premium-vector/avocado-pixel-characters-8-bit-fruit-vector-illustrations-game-assets-cross-stitch_614713-1170.jpg?w=2000")`
//     : randomFruit === 2 ? fruit1El.style.backgroundImage = `url("https://img.freepik.com/premium-vector/8-bit-pixel-strawberry-fruits-pixel-game-assets-cross-stitch-patterns-vector_614713-1185.jpg?w=2000")`
//     : randomFruit === 3 ? fruit1El.style.backgroundImage = `url("https://img.freepik.com/premium-vector/8-bit-pixel-strawberry-fruits-pixel-game-assets-cross-stitch-patterns-vector_614713-1185.jpg?w=2000")`
//     : randomFruit === 4 ? fruit1El.style.backgroundImage = `url("https://img.freepik.com/premium-vector/8-bit-pixel-strawberry-fruits-pixel-game-assets-cross-stitch-patterns-vector_614713-1185.jpg?w=2000")`
// }

function newGame() {
    fruit1El.style.backgroundImage = `url("https://img.freepik.com/premium-vector/avocado-pixel-characters-8-bit-fruit-vector-illustrations-game-assets-cross-stitch_614713-1170.jpg?w=2000")`
    fruit2El.style.backgroundImage = `url("https://img.freepik.com/premium-vector/8-bit-pixels-watermelon-slices-fruit-pixels-game-icons-illustration-stitch-cross-vector_614713-1187.jpg")`
    fruit3El.style.backgroundImage = `url("https://img.freepik.com/premium-vector/8-bit-pixel-strawberry-fruits-pixel-game-assets-cross-stitch-patterns-vector_614713-1185.jpg?w=2000")`
    totalCoinsEl.innerHTML = "20"
    totalCoins = 20
    topTextEl.innerHTML = "Welcome! ʕ•́ᴥ•̀ʔっ"
    fruit1BtmEl.innerHTML = "spin"
    fruit2BtmEl.innerHTML = "to"
    fruit3BtmEl.innerHTML = "win!"
}

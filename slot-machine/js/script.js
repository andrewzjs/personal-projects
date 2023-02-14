// Application State (Data/Variables)

const hallOfFruits = [
    ["freshAvocado", 10, 1],
    ["happyWatermelon", 6, 2],
    ["sweetStrawberry", 3, 3],
    ["rottenBanana", -10, 4],
];

const fruits = {
    "Fresh Avocado": 10,
    "Happy Watermelon": 6,
    "Sweet Strawberry": 3,
    "Rotten Banana": 10,
}

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
spinBtnEl.style.opacity = "0.4"


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

// Functions 

function render() {
    topTextEl.innerHTML = "Welcome! ʕ•́ᴥ•̀ʔっ"
    topTextEl.style.color = "white"
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
        } else if (fruit1BtmEl.innerHTML === fruit2Key) {
            totalCoins += fruit2Value
            totalCoinsEl.innerHTML = totalCoins
            topTextEl.innerHTML = `It's a Match! + ${fruit2Value} coins`
            topTextEl.style.color = "yellowgreen"
        } else if (fruit1BtmEl.innerHTML === fruit3Key) {
            totalCoins +=  fruit3Value
            totalCoinsEl.innerHTML = totalCoins
            topTextEl.innerHTML = `It's a Match! + ${fruit3Value} coins` 
            topTextEl.style.color = "yellowgreen"
        } else if (fruit1BtmEl.innerHTML === fruit4Key) {
            totalCoins -=  fruit4Value
            totalCoinsEl.innerHTML = totalCoins
            topTextEl.innerHTML = `Ew, Rotten Bananas! - ${fruit4Value} coins`
            topTextEl.style.color = "red"
        }
    } else {
        totalCoins -= 3
        totalCoinsEl.innerHTML = totalCoins
    }
    spinBtnEl.removeEventListener("click", render)
    spinBtnEl.style.visibility = "hidden"
}


function winCondition() {
    if (totalCoins >= 40) {
       totalCoinsEl.innerHTML = totalCoins
       totalCoinsEl.style.color = "green"
       spinBtnEl.style.opacity = "0.4"
       topTextEl.innerHTML = "CONGRATULATIONS!! YOU WON"
       topTextEl.style.color = "yellowgreen"
       spinBtnEl.removeEventListener("click", render)
       stop() 
        
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
        stop() 
    } else {
        spinBtnEl.style.visibility = "visible"
        spinBtnEl.addEventListener("click", render)
    }
    spinBtnEl.style.visibility = "hidden"
}

function newGame() {
    spinBtnEl.addEventListener("click", render)
    spinBtnEl.style.opacity = "1"
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
    startTimer()
}


function stop() {
    clearInterval(start)
    document.querySelector(".lever").style.visibility = "hidden"
}

function startTimer() {
    start = setInterval(function() {
        spinBtnEl.style.visibility = "visible"
        document.querySelector(".lever").style.visibility = "visible"
        spinBtnEl.addEventListener("click", render)
        }, 800)
        
}

// function startTimer() {
//     start = setInterval(function() {
//         spinBtnEl.style.visibility = "visible"
//         spinBtnEl.addEventListener("click", render)
//         }, 1000)
// }


// setInterval(function() {
//     spinBtnEl.style.visibility = "visible"
//     spinBtnEl.addEventListener("click", render)
//     }, 1000)

// var timer = setInterval(function() {
//     if (totalCoins >= 40 || totalCoins <= 0) {
//         clearInterval(timer)
//         }
// }, 1000)   

    // var stopSetInt = setInterval(function() {
    // spinBtnEl.style.visibility = "visible"
    // spinBtnEl.addEventListener("click", render)
    // }, 1000)
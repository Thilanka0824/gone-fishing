/*
let userPrompt = prompt('Enter a string: ')
console.log('user string: ' + userPrompt)

let numPrompt = Number(prompt('Enter a string: '))
console.log('user number: ' + numPrompt)

fish object

fish {
    name: string,
    weight: number,
    value: number
}


for our descriptor words

2 descriptors and 1 fish type:

2 arrays of descriptors and 
1 array of fish type

//hourCtr - variable to keep track of the time
//weightCtr - variable to keep track of total pounds
//valueCtr - variable to keep track of total value

//while loop to simulate the passage of time
fishKeep.length = totalLength

*/

const prompt = require('prompt-sync')({sigint: true});

//counters
let hourCtr = 0
let weightCtr = 0
let valueCtr = 0
let time = hourCtr + 5

//decriptor arrays
let fishType = ["", "Salmon", "Talapia", "Tuna", "Trout", "Cod", "Goldfish", "Sunfish", "Bass", "Beluga", "Barramundi"]

let descrip1 = ["","Deepsea", "Marine", "Freshwater", "Slimy", "Ugly", "Stupid", "Hateful", "OverWorked", "Shiny", "Bright"]
let descrip2 = ["", "Black", "Maroon", "Green", "Blueish", "Purple", "Yellow", "Violet", "Red", "Gray", "Camo"]

//final array of fish
let fishKeep = []

console.log("\nYou've gone fishing! Try to maximize the value of your caught fish. You can fish for six hours (till 11:00am) and can catch at most 10 lbs of fish.")

console.log("\n==========================================================================\n")


/*
console.log(`The time is ${time}:00am. So far you've caught: ${fishKeep.length} fish, ${weightCtr} lbs, $${valueCtr} \n`)

console.log(`You've caught a ${}`)

// while (hourCtr < 7 || weightCtr < 12){

    

// }
*/

// let createFish = (name, weight, value) => {
//     // let newFish = {
//     //     name: name,
//     //     weight: weight,
//     //     value: value
//     // }
    
//     let  newFish = {};
//     newFish.name = name
//     newFish.weight = weight
//     newFish.value = value

// }


function randomFish(){
    let fishResult = Math.ceil(Math.random() * 10)
    return `${descrip1[fishResult]} ${descrip2[fishResult]} ${fishType[fishResult]}`
}

//console.log(randomFish())

function randomWeight(){
    let weightResult = Math.ceil(Math.random() * 3)
    return `${weightResult}.00`
}

//console.log(randomWeight())

function randomValue(){
    let valueResult = Math.ceil(Math.random() * 20)
    return `${valueResult}.00`
}

//console.log(randomValue())
console.log(`The time is ${time}:00am. So far you've caught: ${fishKeep.length} fish, ${weightCtr} lbs, $${valueCtr} \n`)

console.log(`You caught a '${randomFish()}' weighing ${randomWeight()} lbs and valued at $${randomValue()} `)

//Fish Object

let createFish = (name, weight, value) => {
    let newFish = {
        name: name,
        weight: weight,
        value: value
    }
    
    // let  newFish = {};
    // newFish.name = name
    // newFish.weight = weight
    // newFish.value = value

}

console.log(createFish(randomFish, randomWeight, randomValue))

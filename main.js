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

const prompt = require("prompt-sync")({ sigint: true });


//counters
let hourCtr = 0;
let weightCtr = 0;
let valueCtr = 0;
let fishCtr = 0

let time = 5
let fishName = "";
let fishKeep = []
let newFish = {}

//decriptor arrays
let fishType = ["","Salmon","Talapia","Tuna","Trout","Cod","Goldfish","Sunfish","Bass","Beluga","Barramundi",
];

let descrip1 = ["","Deepsea","Marine","Freshwater","Slimy","Ugly","Stupid","Hateful","OverWorked","Shiny","Bright",
];
let descrip2 = [ "", "Black", "Maroon","Green", "Blueish", "Purple","Yellow", "Violet","Red", "Gray", "Camo",
];

//final array of fish


console.log(
  "\nYou've gone fishing! Try to maximize the value of your caught fish. You can fish for six hours (till 11:00am) and can catch at most 10 lbs of fish."
);

console.log(
  "\n==========================================================================\n"
);

//Functions
let randomFish = () => {
  let fishResult = Math.ceil(Math.random() * 10);

  fishName = `${descrip1[fishResult]} ${descrip2[fishResult]} ${fishType[fishResult]}`;
  return fishName;
}


let randomWeight = () => {
  let weightResult = Math.ceil(Math.random() * 1000) / 200;
  return `${Number(weightResult)}`;
}


let randomValue = () => {
  let valueResult = Math.ceil(Math.random() * 1000) / 50;
  return `${valueResult}`;
}

let createFish = (na, we, va) => {
    newFish = {
     
     name: na,
     weight: `${we} lbs`,
     value: `$${va}`,
   };

   return newFish;
};


//Loop
while (hourCtr < 6 && weightCtr < 10) {
  //Fish Object
  console.log(
    `\n\nThe time is ${time}:00am. So far you've caught: ${fishCtr} fish, ${weightCtr} lbs, $${valueCtr} \n`);
  
    newFish = createFish(randomFish(), randomWeight(), randomValue()); //
  
    console.log(
    `You caught a '${newFish.name}' weighing ${newFish.weight}lbs and valued at $${newFish.value} \n`);




let userInput = prompt("\nWould you like to [c]atch or [r]elease? >")
    
    
    if(userInput === 'c') {
        console.log("\nYou chose to keep the fish")
        console.log("==========================================================")
        
        
        fishKeep.push(newFish); //adds created object to fishKeep array
        weightCtr = weightCtr + Number(randomWeight()); //adds weight to weightCtr
        valueCtr = valueCtr + Number(randomValue()); //adds value to valueCtr

        hourCtr++;
        time++
        fishCtr++

    } else {
        console.log("\nFishy go free")
        console.log("==========================================================")
        hourCtr++;
        time++
    }

  //console.log(createFish(randomFish(), randomWeight(), randomValue()));
  
  
  //console.log(`\nfishKeep: ${newFish}`);
  //console.log(`hourCtr: ${hourCtr}`);
  
  //console.log(`hourCtr2: ${hourCtr}`);
  console.log(`weightCtr: ${weightCtr}`);
  console.log(`valueCtr: ${valueCtr}`);

  //weightCtr = weightCtr + Number(randomWeight());
  //console.log(`weightCtr2: ${weightCtr}`);
}

for(let i = 0; i < fishKeep.length; i++){
    console.log(`fishKeep[i]${[i]} ${fishKeep[i]}`)
}

console.log(`you've caught ${fishKeep.length} fish!`)

console.log(`loops's over`);
//console.log(`newFish: ${newFish}`)

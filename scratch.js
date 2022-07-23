const prompt = require("prompt-sync")({ sigint: true });


//counters
let hourCtr = 1;
let weightCtr = 0;
let valueCtr = 0;
let fishCtr = 0

let time = 6
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




console.log(
  "\nYou've gone fishing! Try to maximize the value of your caught fish. You can fish for six hours (till 11:00am) and can catch at most 10 lbs of fish."
);

console.log("\n==========================================================================\n");

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
//Fish Object
let createFish = (na, we, va) => {
    newFish = {
     
     name: na,
     weight: `${we} lbs`,
     value: `$${va}`,
   };

   return newFish;
};


//Loop
while (hourCtr < 7 && weightCtr < 10) {
  
    console.log(`\nThe time is ${time}:00am. So far you've caught: ${fishCtr} fish, ${weightCtr} lbs, $${valueCtr} \n`);

    console.log(`************************************ turn ${hourCtr} ************************************`)
    console.log(`********************************************************************************`)
    console.log(`\nGO FISHIN'\n`)
  
    newFish = createFish(randomFish(), randomWeight(), randomValue()); 
  
    console.log(`You caught a '${newFish.name}' weighing ${newFish.weight}lbs and valued at $${newFish.value} \n`);
  
let userInput = prompt("Would you like to [c]atch or [r]elease? >")
    
    if(userInput === 'c' && weightCtr + Number(randomWeight()) > 10) {
        console.log('\n===You cannot catch this fish it will put you over your limit!===\n')
        
        hourCtr++
        time++
    
    } else if (userInput === 'c') {
        console.log("\nYou chose to KEEP THE FISH!")
        fishKeep.push(newFish); 
        weightCtr = weightCtr + Number(randomWeight()); 
        valueCtr = valueCtr + Number(randomValue()); 

        hourCtr++;
        time++
        fishCtr++
           
        
    } else {
        console.log("\nFishy go free!!!\n")
        hourCtr++;
        time++
    }

}


console.log(`\nGAME OVER!`)
console.log(`\nyou've caught ${fishKeep.length} fish!\n`)

for(let i = 0; i < fishKeep.length; i++){
    console.log(fishKeep[i])

}
console.log(`\n`)
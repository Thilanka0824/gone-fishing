const prompt = require("prompt-sync")({ sigint: true });


//counters
let hourCtr = 1; //will keep track of each turn. 6 turns total
let weightCtr = 0; //will keep track of total weight
let valueCtr = 0; //will keep track of toatl value

let fishName = ""; //will store a randomly generated fish name 
let fishKeep = []; //will store an array of fish caught
let newFish = {} // will store the fish object per iteration of the while loop
let userInput = '' //input variable
let userInputRemove = '' //input variable

//decriptor arrays
let fishType = ["","Salmon","Talapia","Tuna","Trout","Cod","Goldfish","Sunfish","Bass","Beluga","Barramundi",
];

let descrip1 = ["","Deepsea","Marine","Freshwater","Slimy","Ugly","Stupid","Hateful","OverWorked","Shiny","Bright",
];
let descrip2 = [ "", "Black", "Maroon","Green", "Blueish", "Purple","Yellow", "Violet","Red", "Gray", "Camo",
];




console.log(
  "\nYou've gone fishing! Try to maximize the value of your caught fish. You can fish for six hours (till 12:00pm) and can catch at most 10 lbs of fish."
);

console.log("\n\n");

//Functions
let randomFish = () => {
  let fishResult = Math.ceil(Math.random() * 10); //generates a random number into fishResult

  fishName = `${descrip1[fishResult]} ${descrip2[fishResult]} ${fishType[fishResult]}`; //generates a random fishName
  return fishName;
}; // this function returns a randomly generated fishName

let randomWeight = () => {
  let weightResult = Math.ceil(Math.random() * 1000) / 150;
  return Number(weightResult);
}; // this function returns a randomly generated weight result between (1 - 1000) / 150

let randomValue = () => {
  let valueResult = Math.ceil(Math.random() * 1000) / 50;
  return valueResult;
}; // this function returns a randomly generated value (1 - 1000) / 100

//Fish Object
let createFish = (na, we, va) => {
  madeFish = {
    name: na,
    weight: we,
    value: va,
  };

  return madeFish;
}; // this function creates and returns an new object called madeFish

//Loop
while (hourCtr < 7 && weightCtr < 10) {
  //while hourCtr is less than 7 AND weightCtr is less than 10

  console.log(
    "$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$"
  );
  console.log(
    `$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$   TURN ${hourCtr}   $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$`
  ); //logs the turn number //same as hourCtr
  console.log(
    "$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$"
  );
  console.log(
    `\nThe time is ${hourCtr + 5}:00am. So far you've caught: ${
      fishKeep.length
    } fish, ${weightCtr} lbs, $${valueCtr} \n`
  ); //logs the time, how many fish caught, weight, value.

  if (hourCtr > 1) {
    console.log(
      "\n#################################################################\n"
    );
    userInputRemove = prompt(
      "Would you like to remove the last fish you caught? 'y' or 'n' then ENTER > "
    );
    console.log(
      "\n#################################################################\n"
    );

    if (userInputRemove === "y") {
      weightCtr -= newFish.weight; //subtracts the weight of newfish to weightCtr
      valueCtr -= newFish.value; //subtracts the value of newfish to valueCtr
      fishKeep.pop(); //removes last item from the fishKeep array
      console.log("\n###############################");
      console.log("\nBYE BYE FISHY!#################\n");
      console.log("###############################\n");
    } else if (userInputRemove === "n") {
      console.log("\n###############################");
      console.log("\n#######      OK      ##########\n");
      console.log("###############################\n");
    }
  }

  console.log(`\nGO FISHIN'\n`);

  newFish = createFish(randomFish(), randomWeight(), randomValue()); //creates a new fish in createFish and puts it into newFish
  console.log(newFish);
  fishKeep.push(newFish); //pushes newFish to the fishKeep array

  console.log(
    `You caught a '${newFish.name}' weighing ${newFish.weight} and valued at $${newFish.value} \n`
  ); //logs the fish, its weight, and value
  weightCtr += newFish.weight; //subtracts the weight of newfish to weightCtr
  valueCtr += newFish.value; //subtracts the value of newfish to valueCtr

  userInput = prompt("Would you like to [c]atch or [r]elease? > ");

  if (userInput === "c" && weightCtr > 10) {
    console.log(
      "\n#####################################################################"
    );
    console.log(
      "\n##   You cannot catch this fish it will put you over your limit!   ##\n"
    );
    console.log(
      "#####################################################################\n"
    );

    weightCtr -= newFish.weight; //subtracts the weight of newfish to weightCtr
    valueCtr -= newFish.value; //subtracts the value of newfish to valueCtr
    fishKeep.pop(newFish); //removes newFish from the fishKeep array
    hourCtr++; //adds 1 to the hourCtr
  } else if (userInput === "c" && weightCtr < 10) {
    console.log(
      "\n#################################################################"
    );
    console.log("\n###############    You chose to KEEP THE FISH!    ###############\n");
    console.log(
      "#################################################################\n"
    );

    hourCtr++;
  } else if (userInput === "r") {
    console.log("\n##############################################");
    console.log("\nFishy go free!!!###############################\n");
    console.log("###############################################\n");

    weightCtr -= newFish.weight; //subtracts the weight of newfish to weightCtr
    valueCtr -= newFish.value; //subtracts the value of newfish to valueCtr
    fishKeep.pop(newFish); //removes newFish from the fishKeep array
    hourCtr++; //adds 1 to the hourCtr
  }

  console.log("Your fish so far");
  for (let i = 0; i < fishKeep.length; i++) {
    console.log(
      `* ${fishKeep[i].name}, ${fishKeep[i].weight}lbs, $${fishKeep[i].value}`
    );
  }
  console.log("\n");
  console.log("\n");
  
}
console.log("\n###############################################");
console.log("###############################################");
console.log("#########        GAME OVER!        ############");
console.log("###############################################");
console.log("###############################################\n");
console.log(`\nyou've caught ${fishKeep.length} fish!\n`);
console.log();

for (let i = 0; i < fishKeep.length; i++) {
  console.log(
    `***  ${fishKeep[i].name}, ${fishKeep[i].weight} lbs, $${fishKeep[i].value}  ***`
  );
}

console.log(`\nTotal weight: ${weightCtr}`);
console.log(`Total value: $${valueCtr}`);
console.log(`\n`);
console.log(`\n`);

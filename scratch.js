const prompt = require("prompt-sync")({ sigint: true });


//counters
let hourCtr = 0;
let weightCtr = 0;
let valueCtr = 0;

let bossCtr = 0
//let time = hourCtr + 5
let fishName = "";

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

console.log(
  "\n==========================================================================\n"
);


function randomFish() {
  let fishResult = Math.ceil(Math.random() * 10);

  fishName = `${descrip1[fishResult]} ${descrip2[fishResult]} ${fishType[fishResult]}`;
  return fishName;
}

//console.log(randomFish())

function randomWeight() {
  let weightResult = Math.ceil(Math.random() * 1000) / 200;
  return `${Number(weightResult)}`;
}

//console.log(randomWeight())

function randomValue() {
  let valueResult = Math.ceil(Math.random() * 1000) / 50;
  return `${valueResult}`;
}

//console.log(randomValue())
console.log(
  `The time is ${0}:00am. So far you've caught: ${
    fishKeep.length
  } fish, ${weightCtr} lbs, $${valueCtr} \n`
);

console.log(
  `You caught a '${randomFish()}' weighing ${randomWeight()}lbs and valued at $${randomValue()} `
);


while (hourCtr < 6 || weightCtr < 10) {
  //Fish Object

  let createFish = (n, w, v) => {
    let newFish = {
      name: n,
      weight: `${w} lbs`,
      value: `$${v}`,
    };

    return newFish;
  };

  console.log(createFish(randomFish(), randomWeight(), randomValue()));
  hourCtr++;
  console.log(`hourCtr: ${hourCtr}`);
  weightCtr = weightCtr + Number(randomWeight());
  console.log(`weightCtr: ${weightCtr}`);

}

console.log(`loops's over`);

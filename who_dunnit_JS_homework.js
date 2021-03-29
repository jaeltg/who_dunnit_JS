// EPISODE 1

// const scenario = {
//     murderer: 'Miss Scarlet',
//     room: 'Library',
//     weapon: 'Rope'
//   };
  
//   const declareMurderer = function() {
//     return `The murderer is ${scenario.murderer}.`;
//   }
  
//   const verdict = declareMurderer();
//   console.log(verdict);

//// The murderer is Miss Scarlet since nothing has been reassigned.

// EPISODE 2

// const murderer = 'Professor Plum';

// const changeMurderer = function() {
//   murderer = 'Mrs. Peacock';
// }

// const declareMurderer = function() {
//   return `The murderer is ${murderer}.`;
// }

// changeMurderer();
// const verdict = declareMurderer();
// console.log(verdict);

//// It will error since you cannot reassigned the variable murderer as it was defined with const.

// EPISODE 3

// let murderer = 'Professor Plum';

// const declareMurderer = function() {
//   let murderer = 'Mrs. Peacock';
//   return `The murderer is ${murderer}.`;
// }

// const firstVerdict = declareMurderer();
// console.log('First Verdict: ', firstVerdict);

// const secondVerdict = `The murderer is ${murderer}.`;
// console.log('Second Verdict: ', secondVerdict);

//// The first veredict will be Mrs. Peacock and the second will be Professor Plum, since the variable murderer still exist outside the function declareMurderer as a new variable called murderer was defined within the function.

// EPISODE 4

// let suspectOne = 'Miss Scarlet';
// let suspectTwo = 'Professor Plum';
// let suspectThree = 'Mrs. Peacock';

// const declareAllSuspects = function() {
//   let suspectThree = 'Colonel Mustard';
//   return `The suspects are ${suspectOne}, ${suspectTwo}, ${suspectThree}.`;
// }

// const suspects = declareAllSuspects();
// console.log(suspects);
// console.log(`Suspect three is ${suspectThree}.`);

//// The variable suspects will show The suspects are Miss Scarlet, Professor Plum, Colonel Mustard, but when you ran the last line it will show Suspect three is Mrs. Peacock. This is because we defined a new variable suspectThree within the function declareAllSuspects. 

// EPISODE 5

// const scenario = {
//     murderer: 'Miss Scarlet',
//     room: 'Kitchen',
//     weapon: 'Candle Stick'
//   };
  
//   const changeWeapon = function(newWeapon) {
//     scenario.weapon = newWeapon;
//   }
  
//   const declareWeapon = function() {
//     return `The weapon is the ${scenario.weapon}.`;
//   }
  
//   changeWeapon('Revolver');
//   const verdict = declareWeapon();
//   console.log(verdict);

//// the verdict will show: The weapon is the Revolver, since individual properties of an object declared with const can be changed.

// EPISODE 6 

// let murderer = 'Colonel Mustard';

// const changeMurderer = function() {
//   murderer = 'Mr. Green';

//   const plotTwist = function() {
//     murderer = 'Mrs. White';
//   }

//   plotTwist();
// }

// const declareMurderer = function () {
//   return `The murderer is ${murderer}.`;
// }

// changeMurderer();
// const verdict = declareMurderer();
// console.log(verdict);

//// The verdict will return The murderer is Mrs. White. This is because the function change murderer includes the function plotTwist inside its block and the function ends by running the plotTwist so the murderer will change to that declared in the plotTwist.

// EPISODE 7

// let murderer = 'Professor Plum';

// const changeMurderer = function() {
//   murderer = 'Mr. Green';

//   const plotTwist = function() {
//     let murderer = 'Colonel Mustard';

//     const unexpectedOutcome = function() {
//       murderer = 'Miss Scarlet';
//     }

//     unexpectedOutcome();
//   }

//   plotTwist();
// }

// const declareMurderer = function() {
//   return `The murderer is ${murderer}.`;
// }

// changeMurderer();
// const verdict = declareMurderer();
// console.log(verdict);

//// The verdict will return the murderer is Mr Green. In the changeMurderer fuction the last thing runned is plotTwist which changes a new variable murderer from Colonel Mustard to Miss Scralet, however this should not changed the firstly declared variable Professor Plum to Miss Scarlet but instead to Mr. Green which is outside of the plotTwist block and changes the murder variable created outside.

// EPISODE 8

// const scenario = {
//     murderer: 'Mrs. Peacock',
//     room: 'Conservatory',
//     weapon: 'Lead Pipe'
//   };
  
//   const changeScenario = function() {
//     scenario.murderer = 'Mrs. Peacock';
//     scenario.room = 'Dining Room';
  
//     const plotTwist = function(room) {
//       if (scenario.room === room) {
//         scenario.murderer = 'Colonel Mustard';
//       }
  
//       const unexpectedOutcome = function(murderer) {
//         if (scenario.murderer === murderer) {
//           scenario.weapon = 'Candle Stick';
//         }
//       }
  
//       unexpectedOutcome('Colonel Mustard');
//     }
  
//     plotTwist('Dining Room');
//   }
  
//   const declareWeapon = function() {
//     return `The weapon is ${scenario.weapon}.`
//   }
  
//   changeScenario();
//   const verdict = declareWeapon();
//   console.log(verdict);

  //// The verdict will return The weapon is candle stick. In the change scenario fuction, First the PlotTwist is runned with the argument Dining Room changng the murderer to Colonel Mustard, then the unexpectedOutcome is runned with the argument Colonel mustard changng the weapon to Candle Stick. 

  // EPISODE 9

//  let murderer = 'Professor Plum';

// if (murderer === 'Professor Plum') {
//   let murderer = 'Mrs. Peacock';
// }

// const declareMurderer = function() {
//   return `The murderer is ${murderer}.`;
// }

// const verdict = declareMurderer();
// console.log(verdict);

//// The murderer is still Professor Plum as the if statement does not reassigne the variable but creates a new murdere variable that only exists within the if statement.


// EPISODE 10 - EXTENSION EPISODE

const scenario = {
    murderer: 'Mr. Green',
    weapon: "Rope",
    room: "Study"
}

const changeScenario = function() {
    scenario.murderer = "Miss Scarlett"
    scenario.weapon = "Knife"

    const plotTwist = function() {
        if (scenario.murderer === "Mr. Green" || scenario.weapon === "Knife")  {
            scenario.room = "Billiard Room"
        }
    }

    plotTwist();

}

const declareScenario = function() {
    return `It was ${scenario.murderer} with the ${scenario.weapon} in the ${scenario.room}!`
}

changeScenario();
verdict = declareScenario();
console.log(verdict)

//// Should return: It was Miss Scarlet with the Knife in the Billiard Room!

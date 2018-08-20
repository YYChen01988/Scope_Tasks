// Episode 1
const scenario = {
  murderer: 'Miss Scarlet',
  room: 'Library',
  weapon: 'Rope'
};

const declareMurderer = function() {
  return `The murderer is ${scenario.murderer}.`;
}

const verdict = declareMurderer();
console.log(verdict);

// ### The result is "The murderer is Miss Scarlet." because verdict point to declareMurderer() and declareMurderer() point to scenario.murderer, which is 'Miss Scarlet'.


// Episode 2
const murderer = 'Professor Plum';

const changeMurderer = function() {
  murderer = 'Mrs. Peacock';
}

const declareMurderer = function() {
  return `The murderer is ${murderer}.`;
}

changeMurderer();
const verdict = declareMurderer();
console.log(verdict);

// ### the result is error, becasue it is const and it cant be motified.



// Episode 3
let murderer = 'Professor Plum';

const declareMurderer = function() {
  let murderer = 'Mrs. Peacock';
  return `The murderer is ${murderer}.`;
}

const firstVerdict = declareMurderer();
console.log('First Verdict: ', firstVerdict);

const secondVerdict = `The murderer is ${murderer}.`;
console.log('Second Verdict: ', secondVerdict);

// ### the first verdict is "Mrs. Peacock" because the result is a return of declareMurderer() and there is a let muder inside the block and second one is 'Professor Plum' because its outside of the block.


// Episode 4
let suspectOne = 'Miss Scarlet';
let suspectTwo = 'Professor Plum';
let suspectThree = 'Mrs. Peacock';

const declareAllSuspects = function() {
  let suspectThree = 'Colonel Mustard';
  return `The suspects are ${suspectOne}, ${suspectTwo}, ${suspectThree}.`;
}

const suspects = declareAllSuspects();
console.log(suspects);
console.log(`Suspect three is ${suspectThree}.`);

// ### First one is 'Miss Scarlet','Professor Plum','Colonel Mustard'; Second result is 'Mrs. Peacock' because the other suspectThree is inside of declareAllSuspects() block


// Episode 5
const scenario = {
  murderer: 'Miss Scarlet',
  room: 'Kitchen',
  weapon: 'Candle Stick'
};

const changeWeapon = function(newWeapon) {
  scenario.weapon = newWeapon;
}

const declareWeapon = function() {
  return `The weapon is the ${scenario.weapon}.`;
}

changeWeapon('Revolver');
const verdict = declareWeapon();
console.log(verdict);

// ### the result is 'The weapon is the Revolver' because the value inside of hash can be motified even under const scenario.

// Episode 6
let murderer = 'Colonel Mustard';
const changeMurderer = function() {
  murderer = 'Mr. Green';
  const plotTwist = function() {
    murderer = 'Mrs. White';
  }
  plotTwist();
}
const declareMurderer = function () {
  return `The murderer is ${murderer}.`;
}
changeMurderer();
const verdict = declareMurderer();
console.log(verdict);

// ### the result is "The murderer is Mrs. White" because const is on function not murderer, so murder is motifiedable. when verdict goes to declareMurderer(), after the code run through changeMurderer, it and then runs plotTwist() and the murderer is changed the third time to 'Mrs. White'.



// Episode 7
let murderer = 'Professor Plum';

const changeMurderer = function() {
  murderer = 'Mr. Green';

  const plotTwist = function() {
    let murderer = 'Colonel Mustard';

    const unexpectedOutcome = function() {
      murderer = 'Miss Scarlet';
    }

    unexpectedOutcome();
  }

  plotTwist();
}

const declareMurderer = function() {
  return `The murderer is ${murderer}.`;
}

changeMurderer();
const verdict = declareMurderer();
console.log(verdict);

// ###the result is 'Mr Green' because changeMurderer() is called before result, so murderer is changed from 'Professor Plum' to 'Mr Green' and plotTwist murderer will be changed from'Colonel Mustard' to 'Miss Scarlet' which will be inside of bloack scope and it can not be read from outside of block plotTwist().


// Episode 8
const scenario = {
  murderer: 'Mrs. Peacock',
  room: 'Conservatory',
  weapon: 'Lead Pipe'
};

const changeScenario = function() {
  scenario.murderer = 'Mrs. Peacock';
  scenario.room = 'Dining Room';

  const plotTwist = function(room) {
    if (scenario.room === room) {
      scenario.murderer = 'Colonel Mustard';
    }

    const unexpectedOutcome = function(murderer) {
      if (scenario.murderer === murderer) {
        scenario.weapon = 'Candle Stick';
      }
    }

    unexpectedOutcome('Colonel Mustard');
  }

  plotTwist('Dining Room');
}

const declareWeapon = function() {
  return `The weapon is ${scenario.weapon}.`
}

changeScenario();
const verdict = declareWeapon();
console.log(verdict);
// ### the result is The weapon is candle stick, because from declareWeapon() to changeScenario and room is changed to dinningroom and it goes to plotTwist, where the params is dining room which matches the plotTwist's if statement and then goes to unexpectedOutcome and then murderer also match the if statement of unexpectedOutcome() which change the weapon to Candle Stick


// Episode 9
let murderer = 'Professor Plum';

if (murderer === 'Professor Plum') {
  let murderer = 'Mrs. Peacock';
}

const declareMurderer = function() {
  return `The murderer is ${murderer}.`;
}

const verdict = declareMurderer();
console.log(verdict);

// ###the result is 'Professor Plum'

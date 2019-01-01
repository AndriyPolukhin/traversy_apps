/**
 * Simulating events with probabilities
 */


// Version 1;
const simulateEvent = (numEvents) => {
  let event = Math.floor(numEvents * Math.random());
  return event;
}

console.log('Rolled a ' + (simulateEvent(6) + 1));


// Version 2;
const simulateChanceEvent = (chances) => {
  let sum = 0;
  chances.forEach((chance) => {
    sum += chance;
  });
  const rand = Math.random();
  let chance = 0;
  for (let i = 0; i < chances.length; i++) {
    chance += chances[i] / sum;
    if (rand < chance) {
      return i;
    }
  }
  // should never be reached unless sum of probabilities is less than 1
  // due to all being zero or some being negative probabilities
  return -1;
}

// simulate weighted dice where 6 is twice as likely as any other face
// using multiples of likelihood
console.log('Rolled a ' + (simulateChanceEvent([1, 1, 1, 1, 1, 2]) + 1));

// using probabilities
console.log('Rollead a ' + (simulateChanceEvent([1 / 7, 1 / 7, 1 / 7, 1 / 7, 1 / 7, 2 / 7]) + 1));

const rewards = ['gold coin', 'silver coin', 'diamond', 'god sword'];
const likelihood = [5, 9, 2, 1.75];
// least likely to get a god sword (0/15 = 0%, never),
// most likely to get a silver coin (9/15 = 60%, more than half the time)
// simulate event, log reward
console.log('You get a ' + rewards[simulateChanceEvent(likelihood)]);


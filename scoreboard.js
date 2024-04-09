function addPoints(addend) {
  return function add(number) {
    return number + addend;
  };
}

let score = 0;

const extraPoint = addPoints(1);
const twoPoints = addPoints(2); // Can be either 2-Pt Conversion or safety
const fieldGoal = addPoints(3);
const touchdown = addPoints(6);

score = touchdown(score);
console.log(score);
score = extraPoint(score);
console.log(score);
score = fieldGoal(score);
console.log(score);
score = touchdown(score);
console.log(score);
score = twoPoints(score);
console.log(score);

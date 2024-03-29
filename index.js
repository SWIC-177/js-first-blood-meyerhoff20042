function verifyAdulthood(person) {
  if (person.age >= 18) return `Welcome, ${person.name}!`;

  return `You are not old enough to enter, ${person.name}.`;
}

const person = {
  name: "John",
  age: 178,
};

const adultMessage = verifyAdulthood(person);

console.log(adultMessage);

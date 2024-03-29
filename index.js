function verifyAdulthood(person) {
  if (person.age >= 18) return `Welcome, ${person.name}!`;

  return `You are not old enough to enter, ${person.name}.`;
}

const people = [
  {
    name: "John",
    age: 17,
  },
  {
    name: "Jane",
    age: 20,
  },
  {
    name: "Mary",
    age: 25,
  },
  {
    name: "Peter",
    age: 30,
  },
  {
    name: "Paul",
    age: 35,
  },
];

for (let i = 0; i < people.length; i += 1) {
  const adultMessage = verifyAdulthood(people[i]);

  console.log(adultMessage);
}

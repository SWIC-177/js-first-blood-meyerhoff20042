const person = {
  name: "John Doe",
  age: 23,
};

const updatePersonName = (p, newName) => ({
  ...p,
  name: newName,
  hobbies: ["reading", "writing"],
});

const updatedPerson = updatePersonName(person, "Jane Doe");
console.log(updatedPerson);

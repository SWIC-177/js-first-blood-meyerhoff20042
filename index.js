const people = [
  {
    id: 1,
    name: "John Doe",
    age: 23,
  },
  {
    id: 2,
    name: "Jane Doe",
    age: 29,
  },
  {
    id: 3,
    name: "Jim Doe",
    age: 34,
  },
  {
    id: 4,
    name: "Jill Doe",
    age: 45,
  },
  {
    id: 5,
    name: "Jack Doe",
    age: 56,
  },
  {
    id: 6,
    name: "Jenny Doe",
    age: 67,
  },
];

function renameOdds(p) {
  const pUpdate = { ...p };

  for (let i = 0; i < p.length; i += 1) {
    if (p[i].id % 2 !== 0) {
      pUpdate[i].name = "Odd Name";
    }
  }

  return pUpdate;
}

console.log(renameOdds(people));

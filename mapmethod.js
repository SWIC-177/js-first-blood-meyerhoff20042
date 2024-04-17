const worker1 = {
  name: "Mattie Gallagher",
  title: "Associate",
  exp: 3,
};

const worker2 = {
  name: "Evelyn Higgins",
  title: "Associate",
  exp: 2,
};

const worker3 = {
  name: "Sheila Becker",
  title: "Team Lead",
  exp: 8,
};

const worker4 = {
  name: "Christy Davidson",
  title: "Associate",
  exp: 6,
};

const worker5 = {
  name: "Vince Dale",
  title: "Associate",
  exp: 1,
};

const ROSTER = [worker1, worker2, worker3, worker4, worker5];

function promoteWorker(worker) {
  let newTitle = ""; // Variable to hold the new title

  if (worker.title == "Associate") {
    newTitle = "Team Lead";
  } else if (worker.title == "Team Lead") {
    newTitle = "Assistant Manager";
  } else if (worker.title == "Assistant Manager") {
    newTitle = "Store Manager";
  }

  return {
    ...worker,
    title: newTitle,
  };
}

const PROMOTED_ROSTER = ROSTER.map(promoteWorker);

console.log(PROMOTED_ROSTER);

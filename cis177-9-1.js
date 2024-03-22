function verifyAdulthood(name, age) {
    if (age >= 18) {
        console.log(`Welcome, ${name}!`);
    }
    else {
        console.log(`You are not old enough to enter, ${name}`);
    }
}

const name = "Braden Meyerhoff";

const age = 20;


verifyAdulthood(name, age);
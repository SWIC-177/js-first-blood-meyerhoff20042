function exponentiate(power) {
  return (number) => {
    let number2 = number;

    // Multiply by power's amount
    for (let i = 0; i < power - 1; i += 1) {
      number2 *= number;
    }

    return number2;
  };
}

const squareNumber = exponentiate(2);
console.log(squareNumber(8)); // 64

const cubeNumber = exponentiate(3);
console.log(cubeNumber(8)); // 512

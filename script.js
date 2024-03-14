// String Manipulation Functions:
let reverseString = (a) => {
  return a.split("").reverse().join("");
};

let countString = (a) => {
  return a.length;
};

let capitalizeWords = (a) => {
  return a
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
};

// Array Functions:

let maxMin = (a) => {
  return [Math.min(...a), Math.max(...a)];
};

let sumArray = (a) => {
  return a.reduce((acc, cuv) => acc + cuv);
};

let filterArray = (a) => {
  return a.filter((item) => {
    return item > 4;
  });
};

//   Mathematical Functions:

function factorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}
function isPrime(number) {
  if (number <= 1) {
    return false;
  }

  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) {
      return false;
    }
  }

  return true;
}

function fibonacciSequence(n) {
    let sequence = [0, 1];
    for (let i = 2; i < n; i++) {
        let nextFibonacci = sequence[i - 1] + sequence[i - 2]; 
        sequence.push(nextFibonacci); 
    }

    return sequence; 
}


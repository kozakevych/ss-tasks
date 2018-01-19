// const readline = require('readline');

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

// rl.question('Please, provide number: ', (answer) => {
//   // TODO: Log the answer in a database
//   // console.log(`Thank you for your valuable feedback: ${answer}`);
//   console.log(maxSumDivisors(answer));

//   rl.close();
// });

/*
** TASK A
а) Выяснить, входить ли цифра 3 в запись числа n 2 (Math.pow(n,2)).
*/

const checkThree = (input) => {

  let number = input * input;
  let result = 'No, squared number doesn\'t contain 3';
  let info = `Squared number for ${input} is: ${number}. ${result}`;
  
  while (number > 0){
    if (number % 10 == 3) {
      result = 'Yes, squared number contains 3';
      break;
    } else {
      number = parseInt(number/10);
    }
  }
  
  return info;
}

/*
** TASK B
б) Поменять порядок цифр числа n на обратный.
*/

const reverseNumber = (number) => {
  
  let result = '';

  while (number > 0){
    result += (number%10);
    number = parseInt(number/10);
  }

  return Number(result);
}


/*
** TASK C
322. Найти натуральное число от 1 до 10 000 с максимальной
суммой делителей.
**
*/

const maxSumDivisors = (range) => { 
  
  // if (range)
  let message = sumFinder(range);

  // console.log("result ", result);
  let result = `The natural number is ${message[0]} and its divisors sum is ${message[1]}`
  return result;
}


const sumFinder = (range) => {

  let sum = 0;
  let number = 0;

  for (let i = 1; i <= range; i++){

    let currentSum = divisorSumCounter(i);
    
    if (currentSum > sum) {       // if sum of divisors gets bigger than previous, we assign it to result
      sum = currentSum;
      number = i;
    }
  }
  
  return [number, sum];
}

const divisorSumCounter = (i) => {
  
  let localSum = 0;

  for (let j=1; j <= i; j++){     // inner loop to check divisors sum
    if (i % j === 0) {
      localSum += j;
    }
  }
  return localSum;
}

module.exports = {
  checkThree,
  reverseNumber,
  divisorSumCounter,
  maxSumDivisors,
  sumFinder
}
/*

88. Дано натуральное число n.
а) Выяснить, входить ли цифра 3 в запись числа n 2 (Math.pow(n,2)) .
б) Поменять порядок цифр числа n на обратный.

*/

/*
** TASK A
а) Выяснить, входить ли цифра 3 в запись числа n 2 (Math.pow(n,2)) .
*/

const checkThree = () => {

  let input = document.getElementById('three-check').value;
var s = 1;
  let number = input * input;
  let info = `Squared number for ${input} is: ${number}`;
  let result = 'No, squared number doesn\'t contain 3';

  while (number > 0){
    if (number % 10 == 3) {
      result = 'Yes, squared number contains 3';
      break;
    } else {
      number = parseInt(number/10);
    }
  }

  document.getElementById('details').innerText = info;
  document.getElementById('result-first').innerText = result;
}

/*
** TASK B
б) Поменять порядок цифр числа n на обратный.
*/

const reverseNumber = () => {
  
  let number = document.getElementById('reversion').value;
  let result = '';

  while (number > 0){
    result += (number%10);
    number = parseInt(number/10);
  }

  document.getElementById('result-second').innerText = result;
}


/*

https://github.com/airbnb/javascript#variables



зробити введення з терміналу, режиму очікування, 
(X)node task argv

use nodejs http написати щось в респонс просто

використати express аналогічну штуку

заюзати html
відправити html файл
node + express 


*/


/*

322. Найти натуральное число от 1 до 10 000 с максимальной
суммой делителей.

*/

const maxSumDivisors = (range) => { 
  

  let result = sumFinder(range);

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
  
  return `The natural number is ${number} and its divisors sum is ${sum}`;
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



// process.stdin.setEncoding('utf8');

// process.stdin.on('readable', () => {
//   const chunk = process.stdin.read();
//   if (chunk !== null) {
//     process.stdout.write(divisorSumCounter(chunk));
//   }
// });

// process.stdin.on('end', () => {
//   process.stdout.write('end');
// });


const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Please, provide number: ', (answer) => {
  // TODO: Log the answer in a database
  // console.log(`Thank you for your valuable feedback: ${answer}`);
  console.log(maxSumDivisors(answer));

  rl.close();
});
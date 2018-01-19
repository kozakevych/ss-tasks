/*

322. Найти натуральное число от 1 до 10 000 с максимальной
суммой делителей.

*/

const maxSumDivisors = () => { 
  
  const resultField = document.getElementById("result");
  const range = document.getElementById("range").value;

  let result = sumFinder(range);

  resultField.innerText = result;
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

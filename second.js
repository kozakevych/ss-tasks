/*

322. Найти натуральное число от 1 до 10 000 с максимальной
суммой делителей.

*/

// I added possibility to provide desired range, not only 10000
function maxSumDivisors (range) { 

  if (typeof(range)!=="number") return "Please, provide number in argument to set the range.";

  let sum = 0;
  let number = 0;

  for (let i=1; i<=range; i++){

    let currentSum = 0;
    let currentNum = i;

    for (let j=1; j<=i/2; j++){     // inner loop to check divisors sum
      if (i % j == 0) {
        currentSum += j;
      }
    }
    
    if (currentSum > sum) {       // if sum of divisors gets bigger than previous, we assign it to result
      sum = currentSum;
      number = currentNum;
    }
  }

  console.log(`The natural number is ${number} and its divisors sum is ${sum}`);
}

// maxSumDivisors(10000)
// maxSumDivisors(100)
// maxSumDivisors("Oops!")

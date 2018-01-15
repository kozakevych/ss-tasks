/*

88. Дано натуральное число n.
а) Выяснить, входить ли цифра 3 в запись числа n 2 (Math.pow(n,2)) .
б) Поменять порядок цифр числа n на обратный.

*/


/*
** TASK A
*/

function checkThree (n) {

  if (typeof(n) !== "number") return "Please, provide number for this function."; 
  
  let result = n * n;
  result = result.toString();
  
  for (let i = 0; i < result.length; i++) {
    if (result[i] === "3") 
    return "Yes, squared number contains 3"
    else 
    return "No, squared number doesn't contain 3"
  }
}

// checkThree(6);
// checkThree(14);
// checkThree("Number");


/*
** TASK B
*/

function reverseNumber(n){
  
  if (typeof(n) !== "number") return "Please, provide number for this function."; 
  
  let numberString = n.toString();
  let result = "";

  for (var i = numberString.length - 1; i >= 0; i--) {
      result += numberString[i];
  }
  
  // return Number(result);
  return result;
}

// reverseNumber(100);
// reverseNumber(10951);
// reverseNumber("Failure");
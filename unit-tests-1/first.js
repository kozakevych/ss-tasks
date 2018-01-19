const checkThree = (input) => {

  let number = input * input;
  // let result = 'No, squared number doesn\'t contain 3';
  let result = false;
  
  while (number > 0){
    if (number % 10 == 3) {
      // result = 'Yes, squared number contains 3';
      result = true;
      break;
    } else {
      number = parseInt(number/10);
    }
  }
  
  return result;
  // let info = `Squared number for ${input} is: ${number}. ${result}`;
  // return info;
}
module.exports = checkThree;
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
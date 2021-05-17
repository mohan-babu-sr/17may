'use strict';

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const movements= [200, 450, -400, 3000, -650, -130, 70, 1300];
console.log(movements);
console.log(movements.includes(-130)); //include checks equality



console.log(movements.some(mov =>mov===-130));
const output=movements.some(mov =>mov>1500); //some checks for condition
console.log(output);


//every returns only when all the condition pass through
console.log(movements.every(mov=>mov>0));
console.log(account4.movements.every(mov=>mov>0));

//callback
const output2=mov =>mov>0;
console.log(movements.every(output2));
console.log(movements.some(output2));
console.log(movements.filter(output2));
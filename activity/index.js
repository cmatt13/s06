const number = parseInt(prompt('Please enter a positive integer: '));
let num1 = 0, num2 = 1;

console.log('is a Fibonacci Number');
console.log(num1); 
console.log(num2); 

fiboNum = num1 + num2;
while (fiboNum <= number) {

    console.log(fiboNum);

    num1 = num2;
    num2 = fiboNum;
    fiboNum = num1 + num2;
}
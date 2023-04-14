/* 
  Loops - executing a block of code over and over again

   - for loop
      - a for loop contains three major parts:
         - initial value 
            - creating the appropriate condition/expression to run our loop
         - condition
            - creating the appropriate condition/expression to run our loop
         - iteration<finalExpression>
            - decrementation or incrementation based on the condition stated

         syntax: 
             for(initialization; expression/condition; iteration<finalExpression>(++/--)){
	           block of code
             };

   - while loop
      - while loop allow us to repeat the action or instruction as long as the condition is true

      1st loop - count 10
      2nd loop - count 9
      3rd loop - count 8
      4th loop - count 7
      .
      .
      .
      10th loop - count 1 

      while loop checked if count is NOT equal to 0:
      at this point, before a possible 11th loop, count was decremented to 0; therefore, there was no 11th loop

      if there is no decrementation, the condition is always true, thus, an infinite loop

      infinite loop will run your code block forever until you stop it 

      An infinite loop is a pece of code that keeps running because a termination condition is never reached. 
      This cause your app, browser or eveb PC to crash

      syntax:
      while(condition/expression){
	     block of code
      }
   - do while
      - similar to while loop, however, do while will allow us to run our loop at least once 

      - with the while loop, we check the condition first before running the code block, however, for do while loop, it will do an instruction first before it will check the condtion to run again

   - for in loop
      - iterates through the properties if an object and the positions in an array

      syntax:
      for(let variable in nameOfArray){
	    block of code
      }

*/

for(let i = 0; i <=10; i++){
	console.log(i);
};

// each item is ordered per index
// each array starts their index at 0
let btsBoyGroup = ['Jimin','Jungkook','Jin','V','Jhope','Suga','RM']

// we access the items in an array by accessing them through their index
console.log(btsBoyGroup);
console.log(btsBoyGroup[3]);
console.log(btsBoyGroup[0]);

// .length property is also a property of an array. The .length property in an array shows the total number of items
console.log(btsBoyGroup.length);// 7 - total number of items in an array

// this is more reliable way of checking the last item in an array
// arrayName[arrayName-1]
console.log(btsBoyGroup[btsBoyGroup.length-1]);

for(let index=0; index < btsBoyGroup.length; index++){
	console.log(btsBoyGroup[index])
};

// to terminate - ctrl + c
// while(true){
// 	console.log('This is infinite loop.')
// }

// always make sure that at the very least your loop condition will be terminated or will be false at one point 

let x = 1;
while(x <= 5){
	console.log(x);
	x++;
};

let counter = 1
do {
	console.log(counter);
	counter++;
} while (counter <= 5)

// for in loop
let colors = ['red','purple','orange'];

for(let num = 0; num <= colors.length-1; num++){
	console.log(colors[num]);
};

for (let num1 in colors){
	console.log(colors[num1])
}

let person = {
	name: 'Jungkook',
	age: 26,
	country: 'South Korea'
};

for (let property in person){
	console.log(`This person is ${person.name} with the age of ${person.age} and living in ${person.country}.`);
}

// break statement allows us to terminate the loop wherenever we want
// let's have 10 counts, but breaking after we output 5

for(let i=1; i <= 10; i++){
	console.log(i);
	if(i == 5){
		break;
	}
}

// continue statement allows us to continue on the next loop without finishing the rest of the code block

// let say while printing the number from 1 to 10, you did not want number 3 and 7 

for(let i=1; i <= 10; i++){
	if(i == 3 || i == 7){
		continue;
	}
	console.log(i);
}

/* Mini-Activity:


	Create an array with 7 items; all strings.
		-List seven of the places you want to visit someday.
	Log the first item in the console.
	Log the last item in the console.
	Log the total amount of items in the console.
	Create a loop to log all items in the console.
  
  screenshot the code and result and paste in our canvas lecture mini-activity 

*/

let sevenPlaces = ['Japan','Los Angeles','New York','Cebu','La Union','South Korea','London']

console.log(sevenPlaces);
console.log(sevenPlaces[0]);
console.log(sevenPlaces[6]);

console.log(sevenPlaces.length);

for(let index=0; index < sevenPlaces.length; index++){
	console.log(sevenPlaces[index])
};


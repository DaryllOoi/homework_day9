/*
ASSIGNMENT RULES
- All the answers must be written in JavaScript
- You can ask for help, reach the Teaching Assistants if needed
- You can Google / use StackOverflow BUT only when you think you need something we didn't cover during lessons yet
- You can test your code in a separate file or de-commenting the single exercises in this one.
- You can use the bash terminal, the VSCode terminal or the one embedded in your Operating System if you're using macOS or Linux.
- The solution must be pushed to the repository and be available for the tutors by the end of the day (5PM CET)
*/

/* EXERCISE 1
 Write a function called "area" which receives 2 parameters (l1, l2) and calculates the area of the associated rectangle.
*/

function area(l1,l2) {
    return l1 * l2
}

console.log (area(3,3))

/* EXERCISE 2
 Write a function called "crazySum" which receives two integers as parameters.
 It should return the sum of those two values, but if the two values are the same then it should return their sum multiplied by 3.
*/


function crazySum(base, height){

if( base === height){
    return (base+height)*3;
    }else{
        return base+height;
    }
}
let sum = crazySum(10, 10);
console.log(sum);

/* EXERCISE 3
 Write a function called "crazyDiff" that computes the absolute difference between a given number and 19.
 It should return triple their absolute difference if the given number is greater than 19.
*/

function crazyDiff (num1){

    if (num1 > 19){
         return Math.abs(num1 - 19) *3 ;

    }else{( num1 < 19)
        return Math.abs(19 - num1);
     
    }
}
console.log("difference number", crazyDiff(8));

/* EXERCISE 4
 Write a function called "boundary" which accept an integer parameter n and returns true if n is within 20 and 100 (included) or if n it's equal to 400.
*/

function boundary (n){
    if(
        ((20 <= n)) && (n <=100) || (n === 400)
    ) {
        let result = true;
        return result;
    }else{
        let result = false;
        return result;
    }
    
}
let number1 = boundary( 150 );
console.log("the number is ", number1);

/* EXERCISE 5
 Write a function called "strivify" which accepts a string as a parameter.
 It should add the word "Strive" in front of the given string, but if the given string already begins with "Strive", then it should just return the original string.
*/

function strivify (string1){
   if(string1.startsWith("Strive")){
        return string1;
    }else{
        return "Strive"+string1;
    }
};
let results = strivify("hello me up");
console.log("the result", results);

/* EXERCISE 6
 Write a function called "check3and7" which accepts a positive number as a parameter and checks if it is a multiple of 3 or a multiple of 7.
 HINT: Modulus Operator
*/

function check3and7 (num6){
    if (num6 % 3 === 0 || num6 % 7 === 0){
        console.log(num6);
        return true;

    }else return false;
    }

console.log("the result",check3and7(21) );

/* EXERCISE 7
 Write a function called "reverseString" which programmatically reverses a given string (es.: Strive => evirtS).
*/

function reverseString(reverse) {
    let split7 = reverse.split('');
    let reverse7 = split7.reverse();
    let concat7 = reverse7.join('');
    return concat7
}

let reverse = reverseString("Strive");
console.log("reverse this", (reverse));

/* EXERCISE 8
 Write a function called "upperFirst" which capitalizes the first letter of each word of a given string passed as a parameter.
*/

function upperFirst (str){
    let split = str.split(" ");
    for ( let i = 0; i < split.length; i++){
        split[i] = split[i].charAt(0).toUpperCase() + split[i].slice(1);
    }
    return split.join(" ");
};
console.log("upperCase is ", upperFirst("hey guys its upper."));

/* EXERCISE 9
 Write a function called "cutString" which creates a new string without the first and last character of a given string passed as a parameter.
*/

function cutString (str) {
    let subString = str.substring (1 , str.length - 1);
    return subString;
}

let string9 = cutString ("hello guys its sub string");
console.log("string9 is", string9);

/* EXERCISE 10
 Write a function called "giveMeRandom" which accepts a number n and returns an array containing n random numbers between 0 and 10.
*/

let randomArray = [];
function giveMeRandom (n){
    for (let i = 0; i<n; i++){
        randomArray.push(Math.floor(Math.random() * 11 ));
    }
    return randomArray;
}
let computedArray= giveMeRandom(9);
console.log("the random numbers", computedArray);

/* WHEN YOU ARE FINISHED
 Commit and push the code to your personal GitHub repository; then post the link of your commit on the Homework section of today's Eduflow.
*/
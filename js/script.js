// let firstvalue = parseInt(prompt("input first value"));
// let secondvalue = parseInt(prompt("input first value"));
// let thirdvalue = parseInt(prompt("input first value"));
// let sum = (firstvalue + secondvalue + thirdvalue);
// // to check if sum is even or odd
// function addition(){
//     return sum;
// }
// // given conditions
// if (sum % 2 === 0){
//     alert("sum of your value is even");
// }
// else{
//     alert("sum of your value is odd");
// }


//question 2
const number1 = 10;
const number2 = 20;
let guess1 = parseInt(prompt("your first guess"));
let diff1 = number1 - guess1;
let guess2 = parseInt(prompt("your second guess"));
let diff2 = number2 - guess2;
if (guess1 === number1 && guess2 === number2){
    alert("good job");
}
// else if(guess2 === number2){
//     alert("you've done well");
// }
else if(guess1 > number1 && guess2 > number2){
    alert("your values are greater, try again");
    alert(diff1);
    alert(diff2);
}
// else if(guess1 < number1){
//     alert("your value is lesser, try again");
// }
else{
    alert("input a number");
}






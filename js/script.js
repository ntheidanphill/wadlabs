//let age = 20;
//var course = "BBIT";
//const university = "Strathmore";

//let age = 40; 
//var course = "ICS";
//const university = "Riara";

/*if (true) {
  let time = "11:30";
  var day = "4th";
  const year = 2026;
}
 console.log (year);
*/

//function declaration
/**
 * A function to calculate the area of a rectangle
 * @param {int} height - the height of the rectangle
 * @param {int} width - the width of the rectangle
 * @return {int} the area of the rectangle
 */

function calculateArea(height,width){
 if(height ==null ) {
  console.log ("Weka height!");

 }
 else if (width == null) { 
  console.log ("Weka width!");
 }
 else { 
    let area = height * width;
 return area; }
 }
  
 
 
  // console.log("function calculateArea")
  //alert ("function calculateArea");

console.log (calculateArea(20,3));
console.log (calculateArea(20));
console.log (calculateArea());  //a function call to calculate the area of a rectangle with height 20 and width 3

//function expression
const add = function (num1,num2) {
  return num1 + num2;
}
console.log (add(10,20)); //a function call to add two numbers 10 and 20

//arrow functions
const multiply = (x,y) => x * y;
console.log (multiply(5,4)); //a function call to multiply two numbers 5 and 4
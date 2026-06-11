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

function calculateArea(height, width) {
  if (height == null) {
    console.log("Weka height!");

  }
  else if (width == null) {
    console.log("Weka width!");
  }
  else {
    let area = height * width;
    return area;
  }
}



// console.log("function calculateArea")
//alert ("function calculateArea");

console.log(calculateArea(20, 3));
console.log(calculateArea(20));
console.log(calculateArea());  //a function call to calculate the area of a rectangle with height 20 and width 3

//function expression
const add = function (num1, num2) {
  return num1 + num2;
}
console.log(add(10, 20)); //a function call to add two numbers 10 and 20

//arrow functions
const multiply = (x, y) => x * y;
console.log(multiply(5, 4)); //a function call to multiply two numbers 5 and 4

/** Javascript Arrays - an ordered list of values stored in a single variable. Each value sits at a numbered position called an index */

const scores = [45, 56, 67, 67, 78];

//access array_name[index]
//78
console.log(scores[4]);
//67
console.log(scores[2]);
//56
console.log(scores[1]);
//45
console.log(scores[0]);


let student_names = ["omondi", 'wafula', 'kiprotich', 'nyambane', 'toipan']

//print out kiprotich on the console window
console.log(student_names[2])

let governors = [
  [47, "Johnson Sakaja"],
  [1, "Abdullswamad Sherrif"],
  [21, "Irungu Kang'ata"]
];
//The governor of county number 21 is Abdullswamad Sherrif
console.log("The governor of county number ", governors[1][0], " is ", governors[1][1]);

//map (perform an operation on each element)
let doubled = scores.map(x => x * 2); //multiply each score by 2
console.log(doubled);

//properties
//The class has j students (student_names)
console.log("The class has ", student_names.length, "students");

//Kenya has b governors
console.log("Kenya has ", governors.length, "governors");

//LOOPS
//for in
for (let index in scores) {
  console.log(scores[index]);
}

//for of
for (let score of scores) {
  console.log(score);
}

//forEach
scores.forEach(function (score) {
  console.log("score: ", score);
});

const student = {
  name: "Alice",
  "university": "Strathmore University",
  age: 20,
  passed: true,
  grade: 'A',
  "admission number": 220109,
  course: "BBIT",
  group: "2A",
  attendance: 20,
  addAttendance: function () {
    this.attendance = this.attendance + 1;
  }
};

//accessing items
//student name
console.log(
  "My name is",
  student.name,
  "from",
  student["university"],
  "I am in group",
  student.group
);

//a method in the object
student.addAttendance();//add attendance by 1
console.log(student.attendance);//21

//array of objects
let bbit_2b_students = [
  { adm: 388294, name: "Blessing" },
  { adm: 222019, name: "Joel" },
  { adm: 220406, name: "Ben10" },
  { adm: 223518, name: "Bomboclatt" },
];
//Print otu the names of all students in bbit 2b using a loop

bbit_2b_students.forEach(function (student) {
  console.log("student: ", student.name)
});

//getting the keys  of an object as an array
console.log(student)

//getting the values of an object as an array
//console.log(student.entries());


//getting both keys and values of an object as an array
//console.log(student.entries());
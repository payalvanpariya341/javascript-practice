let Student = {
    name : " first name ",
    email : "USER@GMAIL.COM",
    course : "JavaScript, React, Node",
    marks : [45, 78, 60, 90, 33],
    hobbies : ["Music", "Cricket", "Reading"],
    address : ["India", ["Gujarat", "Ahmedabad"]]
};

// STRING OPERATIONS //
// remove space
console.log("trim() : ",Student.name)

// convert upercase
console.log("toUpperCase() : ",Student.name.toUpperCase())

// email lowercase
console.log("toLowerCase() : ",Student.email.toLowerCase())

// check wether course includes
console.log("includes() : ",Student.course.includes("React"))

// find the index of "Node" in course
console.log("indexOf : ",Student.course.indexOf("Node"));

//replace "JavaScript" with "JS"
console.log("replace() : ",Student.course.replace("JavaScript","JS"))

// convert course string into an array
console.log("convert into array : ",Student.course.split(", "))

//display the length of student name
console.log("length() : ",Student.name.length)

// ARRAY OPERATION //
//add "Swimming" to hobbies
Student.hobbies.push("Swimming");
console.log(Student.hobbies);

// remove the last hobby
Student.hobbies.pop()
console.log('remove last hobbie : ',Student.hobbies)

// add "Drawing" at the beginning of hobbies
Student.hobbies.unshift("Drawing")
console.log('beginning of hobbie : ',Student.hobbies)

// remove the first hobby
Student.hobbies.shift()
console.log('remove first hobbie : ',Student.hobbies)

// merge hobbies with course
const Student1 = {
    hobbies : ["Music", "Cricket", "Reading"],
    course : "JavaScript, React, Node"
};
const mergeArray = [...Student.hobbies, ...Student.course.split(", ")];
console.log(mergeArray)

// check if "React" exits in course array (case-insensitive)
// console.log("check React : ",Student.course.includes("React"))
let hasReact = courseArray
.map(c => c.toLowerCase())
.includes("React");

// find index of "JS" in course array
console.log("index of JS : ",Student.course.includes("JS"))

// extract first two marks

// remove one failed subject mark (less than 40) using splice

// convert hobbies array into a string
console.log("convert array into srting : ",Student.hobbies.join(", "))

// ARRAY ITERATION METHOD //
console.log("array iteration method :")
let marks = [45, 78, 60, 90, 33];

// use map() to add 5 bounds marks to each mark
console.log("add 5 bounds marks : ",marks.map(num => num + 5))
console.log("old array : ",marks)

// use filter() to get only passed marks (>=40)
console.log("passed marks (>=40) : ",marks.filter(num => num > 40))
console.log("old array : ",marks)

// use finnd() to find the first mark above 80
console.log("first mark above 80 : ", marks.find(num => num > 80));

// use forEach() to print each hobby
console.log("print hobbies : ")
Student.hobbies.forEach(hobby => console.log(hobby))

// sort mark in ascending order
console.log("sort mark in asceding order : ",marks.sort());

// reverse mark order
console.log("reverse mark ordeer : ",marks.reverse())

// flatten the address array
Student.address = Student.address.flat();
console.log(Student.address);


// OBJECT HANDLING //
// add a new property result = "Pass" if all marks are >=40
let Student = {
    name: "first name",
    email: "USER@GMAIL.COM",
    course: "JavaScript, React, Node",
    marks: [45, 78, 60, 90, 33],
    hobbies: ["Music", "Cricket", "Reading"],
    address: ["India", ["Gujarat", "Ahmedabad"]]
};

// check result
let isPass = Student.marks.every(mark => mark >= 40);

if (isPass) {
    Student.result = "Pass";
} else {
    Student.result = "Fail";
}

// print final student object
console.log(Student);
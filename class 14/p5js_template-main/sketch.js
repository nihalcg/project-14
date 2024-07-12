
var name,names;
var Student;
function setup() {

  createCanvas(400, 400);
name="nihal";
  console.log(name);
  names=["james","raj","ravi","ramesh"]
  console.log(names)
  console.log(names[3])
  Student={
    name:"nihal",
    class:9,
    favourite_subject:"biology",
    age:13
    

  }
  console.log(Student)
  console.log(Student.favourite_subject)
}

function draw() {
  
  background(220);
}
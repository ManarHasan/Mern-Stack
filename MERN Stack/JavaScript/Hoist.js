console.log(hello);                                   
var hello = 'world';                                 
//AFTER HOISTING BY THE INTERPRETER
// var hello;
// console.log(hello); logs undefined
// hello = 'world';
////////////////////////////////////////
var needle = 'haystack';
test();
function test(){
    var needle = 'magnet';
    console.log(needle);
}
//AFTER HOISTING BY THE INTERPRETER
// var needle = 'haystack';
// test(); logs 'magnet';
// function test(){
// var needle = 'magnet';
// console.log(needle);
// }
////////////////////////////////////////
var brendan = 'super cool';
function print(){
    brendan = 'only okay';
    console.log(brendan);
}
console.log(brendan);
//AFTER HOISTING BY THE INTERPRETER
// var brendan = 'super cool';
// function print(){
// brendan = 'only okay';
// console.log(brendan);
// }
// console.log(brendan); logs 'super cool'
/////////////////////////////////////////////
var food = 'chicken';
console.log(food);
eat();
function eat(){
    food = 'half-chicken';
    console.log(food);
    var food = 'gone';
}
//AFTER HOISTING BY THE INTERPRETER
// var food = 'chicken';
// console.log(food); logs 'chicken'
// eat(); logs 'half-chicken';
// function eat(){
//      var food;
//      food = 'half-chicken';
//      console.log(food);
//      food = 'gone';
// }
/////////////////////////////////////////////
mean();
console.log(food);
var mean = function() {
    food = "chicken";
    console.log(food);
    var food = "fish";
    console.log(food);
}
console.log(food);
//AFTER HOISTING BY THE INTERPRETER
// var mean;
// Uncaught TypeError: mean is not a function
/////////////////////////////////////////////
console.log(genre);
var genre = "disco";
rewind();
function rewind() {
    genre = "rock";
    console.log(genre);
    var genre = "r&b";
    console.log(genre);
}
console.log(genre);
//AFTER HOISTING BY THE INTERPRETER
// var genre;
// console.log(genre); logs undefined
// rewind(); logs rock, r&b
// function rewind(){
//      var genre;
//      genre = "rock";
//      console.log(genre);
//      genre = r&b;
//      console.log(genre);
// }
// console.log(genre); logs disco
/////////////////////////////////////
dojo = "san jose";
console.log(dojo);
learn();
function learn() {
    dojo = "seattle";
    console.log(dojo);
    var dojo = "burbank";
    console.log(dojo);
}
console.log(dojo);
//AFTER HOISTING BY THE INTERPRETER
// dojo = "san jose";
// console.log(dojo); logs san jose
// learn(); logs "seattle", "burbank"
// function learn(){
//      var dojo;
//      dojo = seattle;
//      console.log(dojo);
//      dojo = "burbank";
//      console.log(dojo);
// }
// console.log(dojo); logs "san jose";
///////////////////////////////////////////////
console.log(makeDojo("Chicago", 65));
console.log(makeDojo("Berkeley", 0));
function makeDojo(name, students){
    const dojo = {};
    dojo.name = name;
    dojo.students = students;
    if(dojo.students > 50){
        dojo.hiring = true;
    }
    else if(dojo.students <= 0){
        dojo = "closed for now";
    }
    return dojo;
}
//AFTER HOISTING BY THE INTERPRETER
// { name: 'Chicago', students: 65, hiring: true }
// TypeError: Assignment to constant variable.
// First you'll need to set your objects to empty spaces so you can call them later
var obj1 = {}
var obj2 = {}

// programming your objects with functions
obj1.something = function(){
	console.log("OBJECT ONE");}

obj2.something = function(){
    console.log("OBJECT TWO");}
    
    // then call them and remember to put ();
obj1.something();
should run "OBJECT ONE"
obj2.something();
should run "OBJECT TWO"




// The Keyword "This"

// set empty object so that you can fill in arrays
var comments = {};
// add an array to the object and define it
comments.arr = ['comment', 'comment', 'comment', 'comment'];

// when you view comments by itself it will show that there is an array called data inside
comments
//  hit enter and you will see the array inside the object comments
{data: Array(4), print: ƒ}
// GET IT? 

// now add a Method or a function inside of your second "placeholder" or array
comments.print = function(){
    // this refers to the object as it is holding all of the information.
    // access the data array and use forEach to access each item in array
    this.data.forEach(function(x){
    console.log(x);}})    

// Then run the object with the nested method
// DO NOT FORGET () at the end

comments.print()
// will run
console.js:35 Good job
console.js:35 bye
console.js:35 something else
console.js:35 you're stupid


// if an array has a function inside it MUST be followed with () to be used.
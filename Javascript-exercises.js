
// Q : JavaScript Coding: Write a multiplication function in javascript to use like this.
// ;
const GenericCurry= (fn, args)=>{
    totalArgs = args || fn.length
    return function recursively(){
        return arguments.length<totalArgs?recursively.bind(this, ...arguments): fn.call(this, ...arguments);
    }
}

let mul = GenericCurry((a,b,c)=>a*b*c);
let add = GenericCurry((a,b,c)=>a+b+c)

console.log(mul(2)(4)(5)) // 40
console.log(add(2)(4)(5)) // 11


// Q: Which of the following code snippet append an element value at the end of the array, arr?
// a) arr[arr.length+1] = value
// b) arr[arr.length] = value
// c) arr[arr.length - 1] = value
// d) arr = arr + value

// Ans: B arr[arr.length] = value




// Q: what is the correct way to create a JavaScript array?
// a) var items = ["Orange", "Apple"];
// b) var items = {"Orange", "Apple"};
// c) var items = new array("Orange", "Apple");
// d) var items[] = {"Orange", "Apple"};

// Answer :  A - var items = ["Orange", "Apple"];

// Q : What is the output of the following code ?

// foo = 1;
//
// (function() {
//     foo = 2;
// })();
//
// var x = function () {
//     foo = 3;
// };
//
// (function() {
//     var foo = 4;
// })();

//test.
// console.log(foo);

// output wil be : 2

// data types in js


// premetive (original ) number string boolean and symbol

// derived (copied) object array function



let a = "single " // string  // single line 
let b = 'single' // string // single line 
let c = ` multi line` // string   //  multi line 

let d = `
    <h1> hello </h1>
    ${a}
    `
console.log(d)


console.log(typeof a, typeof b, typeof c)


let e = "12"; // number
let f = 12.34; // float
let g = 12 / 0; // infinity
let h = 1e30; // bigint


console.log(typeof + e, typeof f, typeof g, typeof h) // +e willl convert string to number


// boolean

let i = true;
let j = false;

console.log(typeof i, typeof j)


// symbol
// we have to make unique key that time we use symbol
// to store key of object 


// let sym = symbol()
// console.log(sym)


// derived data type
// combined data type

let o = null; // null , 0, false, ""

let p // undefined

console.log(typeof o, typeof p)



//array and object

let k = []
console.log(typeof k) // object  // array is object in js

let l = new Array(1, 2, 3, 4, 5) // array as constructor

console.log(l)

// to make json object we use {} curly braces

let m = {} // object  called as prototype object

console.log(typeof m) // is string then it is Json 
    // if object then it is object

// array = index based 
// object = key value pair and object  are known as JSON object, 
// json is universal data type
// json is used to  store data in key value pair
// json data is readable in all the languages

// function

// functoin in js data type is function

let n = function() {
    // function as a data type
    console.log(typeof n);
}
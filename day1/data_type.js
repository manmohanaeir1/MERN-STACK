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
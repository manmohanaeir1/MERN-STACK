// function , methods, events , task all are the same thing
// function is a block of code that can be called by name. The code inside a function is not executed when the function is defined. It is executed when the function is invoked.
//

// build in function

const name = 'MANMOHAN';
const lowerCaseName = name.toLowerCase();
console.log(lowerCaseName);


// set time 
setTimeout(() => {
    console.log('Hello');
}, 2000);

// custom function//

// not allow to declear built in function name
// function to add 2 number

function addNumbers(x, y) // upto 5  
{
    const z = x + y;
    return z;

}
const a = 10;
const b = 20;
const c = addNumbers(a, b)
console.log(c);

// const addNumber1 =function() {
// }   // this is called functon is a data type 

// are called general way of decleration of function 


/// Arrow function => modern function
const addNumber2 = () => {

}
/**
 *
 **/

let a = 10;
let b = 20;
const c = a + b;


console.log(c); // 30


const d = a / b;
console.log(d); // 0.5

const e = a % b;
console.log(e); //

a = a + 1; //11
a = a++; //12
a = ++a; //13
console.log(a++); // 13   post assignment
console.log(++a); // 15   pre assignment

const x = 10;

console.log(x == 10); // true
console.log(x > 10); // true



const cart = [{
        amount: 100,
    },
    {
        amount: 200
    }
]
let total = 0;
for (let i = 0; i < cart.length; i++) {
    total += cart[i].amount;
}
console.log(total); // 300



let name = "Manmohan";
let last = " Aeir";

name += last;
console.log(name); // ManmohanAeir


// HTML for javascript is a string


let emailmessage = "Dear" + name;
emailmessage += " Thank you for your order";
console.log(emailmessage); // DearManmohan AeirThank you for your order


const r = "10";
const s = 10;
t = r + s;
console.log(t); // 1010
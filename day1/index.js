let Name = "Manmohan"

console.log(Name)


var email = "manmohan@gmial.com"
console.log(email)


// scope of variables


// block scope

let x = 12;

console.log(x)




{
    let x = 13;
    console.log(x)
}


// for var 

var y = 1;
console.log(y)

{
    var y = 3;
    console.log(y)

}

console.log(y) // 3

// var dosent take block scope
// just update value in Var not redecleration




//..... constant 

const abc = 30;
console.log(abc)

// abc = 40; // error


let a = 34;
a = "manmohan" //string so, js is losely coupled language


let fname; // unless you assign value to variable it will not create memory space

// thats why we called js is dynamically typed losely coupled programming language
let i = 1;


// do while loop
do {
    console.log(i++)
} while (i <= 10);


// while loop


while (i <= 10) {
    console.log(i++)
}

// for loop 

for (let i = 1; i <= 10; i++) {
    console.log(i)
}


// structure 1 of foor loop in js

i = 1;
for (; i <= 10; i++) { //we can skip the initialization part 
    console.log(i)
}
// structure 2 of foor loop in js

i = 1;
for (; i <= 10;) { //we can skip the initialization part  and increment part
    console.log(i)
    i++; // 
}

// structure 3 of foor loop in js

i = 12;
for (;;) { //we can skip the initialization part  and increment part
    console.log(i++)
    if (i >= 16) { // we can skip the condition part
        break; // we can use break to exit the loop
    }
    i++; // 
}




//WAP Js program using any loop to print first 30 even numbers

console.log("First 30 even numbers are another way:")

for (let i = 2; i <= 10; i += 2) {
    console.log(i)
}


//WAP Js program using any loop to print first 30 even numbers

console.log("First 30 even numbers are:")
for (let i = 1; i <= 30; i++) {
    if (i % 2 == 0) {
        console.log(i)
    }
}


// loop is used in data reptation and iteration 
// loop is used to repeat the code block multiple times



// nesting loop

/* 
1
1 2
1 2 3
1 2 3 4
1 2 3 4 5  
*/


// that type of loop is called nested loop which is used in rating system in real time website 
console.log("Nested loop example")

for (let i = 1; i <= 5; i++) {
    let toprint = "";
    for (let j = 1; j <= i; j++) {
        toprint += j + " ";
    }
    console.log(toprint)

}

// for reverse order
console.log("Nested loop example reverse order")

for (let i = 5; i >= 1; i--) {
    let toprint = "";
    for (let j = 1; j <= i; j++) {
        toprint += j + " ";
    }
    console.log(toprint)

}
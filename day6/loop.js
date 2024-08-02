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
console.log("First 30 even numbers are:")
for (let i = 1; i <= 30; i++) {
    if (i % 2 == 0) {
        console.log(i)
    }
}

console.log("First 30 even numbers are another way:")

for (let i = 2; i <= 10; i += 2) {
    console.log(i)
}
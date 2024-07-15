// name , email , address, phone;

let user_1 = ["manmohan", "email@gmail.com", "kanchanpur", 865913421]

let user_2 = new Array("Ram", "email1@gmail.com", "k1anchanpur", 865913421) // constructor / onject


// array always stored in index paired value
// every element is seperated with comma
//index always begins from 0 to continues 
//last index of element is always length - 1
// an array store any data type

console.log(user_1[1])



// single dimensional array
// it include non-dimensional array => array, object ,multi dimensional data set 
// above example is single dimensional array


// multi dimensional array

const allUser = [
    ["manmohan", "manmohan@gmail.com", "ktm", 5895],
    ["Ram", "ram@gmail.com", "k1anchanpur", 865913421],

];

console.log(allUser[0][3])


user_1 = ["manmohan", "email@gmail.com", "kanchanpur", 865913421]
user_2 = ["ktm", "email@gmail.com", "manmohan", 865913421]

let boj_1 = {
    name: "manmohan",
    email: "email@gmail.com",
    address: "kanchanpur",
    phone: 865913421
}

console.log(boj_1.name)

let boj_2 = {
    address: "ktm",
    email: "email@gmail.com",
    name: "manmohan",
    phone: 865913421
}

console.log(boj_2.name)


const allUserS = [
    { name: "manmohan", email: "manmohan@gmail.com", address: "ktm", phone: 895 },
    { name: "Ram", email: "ram@gmail.com", address: "k1anchanpur", phone: 865913421 }

];
console.log(allUserS[0].name)
console.log(allUserS[0].email)
console.log(allUserS[0].address)
console.log(allUserS[0].phone)


console.log(allUserS[1].name)
console.log(allUserS[1].email)
console.log(allUserS[1].address)
console.log(allUserS[1].phone)
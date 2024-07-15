let allUser = []

const userOb = {

    name: "manmohan",
    email: "email.com",
    address: "kanchanpur",
    phone: 9856

}


console.log(allUser)

// INSERT

//push operation  => default  operation insert at last (Quee new entry in last and read first)
//allUser = null


allUser.push(userOb) // first element is inserted in 0 index

console.log(allUser)


// top insert
allUser.unshift(userOb) //0 indexdata entryexistng data is shifted to next index

console.log(allUser)

// any index

allUser[3] = userOb

console.log(allUser)


// [ 0 => {}, 1 => {}, <empty slot x 1 >, 3 => {}]


allUser[1] = userOb // it replace the existing data

//array=> 4 index

const size = allUser.length;
//0123 ===>4

allUser[size] = userOb;

//01234
// last = size - 1
// new = size

//01 -- 234  i want to insert data between 1 and 2 index
// for that we have splice method

allUser.splice(1, 1, userOb) // 1 index is removed and new data is inserted at 1 index


//remove data
//PUSH 
// take last index vlue and remove it

let lastItem = allUser.pop() // last index data is removed and stored in lastItem

//unshift 

let firstItem = allUser.shift()

//take middle value

let index = allUser.splice(1, 2) // 1 index data is removed and stored in index

console.log(allUser)
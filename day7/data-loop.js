const allUser = [{
        id: 1,
        name: 'John Doe',
        age: 25,
        email: 'abc@gmail.com',
        isVerified: true

    },
    {
        id: 2,
        name: 'Jane Doe',
        age: 26,
        email: 'dasdas@d.d',
        isVerified: false
    },
    {
        id: 3,
        name: 'John1 Smith',
        age: 25,
        email: 'dsds@dsd.dd',
        isVerified: true
    }
];
isVerified: true;

const size = allUser.length;
console.log('For in loop');
for (let i = 0; i < size; i++) { // for in loop

    console.log(`----Id: ${allUser[i].id}----`);
    console.log(`Name: ${allUser[i].name}`);
    console.log(`Age: ${allUser[i].age}`);
    console.log(`Email: ${allUser[i].email}`);
    console.log(`Is Verified: ${allUser[i].isVerified}`);
    console.log('---------------------------------');


}


// for of loop
console.log('For of loop');
for (const user of allUser) {
    console.log(`----Id: ${user.id}----`);
    console.log(`Name: ${user.name}`);
    console.log(`Age: ${user.age}`);
    console.log(`Email: ${user.email}`);
    console.log(`Is Verified: ${user.isVerified}`);
    console.log('---------------------------------');
}
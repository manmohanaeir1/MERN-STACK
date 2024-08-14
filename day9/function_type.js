const foo = (a, b) => {
    console.log(a + b)
    return "I am from foo"
}

const bar = (data) => {
    console.log("from Args : ", data)
    return "I am from bar"

}
const result = foo(20, 2)
const result1 = bar(foo()) // we can use argument as the return type of function 

//const result1 = bar(result)

console.log(result1)
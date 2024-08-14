const foo = () => {
    return "I am from foo"
}

const bar = (data) => {
    console.log("from Args : ", data)
    return "I am from bar"

}
const result = foo()
const result1 = bar(result)

console.log(result1)
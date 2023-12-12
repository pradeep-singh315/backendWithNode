const sum = (a, b) => {
    return a + b
}

const mul = (a, b) => {
    return a * b
}

const sub = (a, b) => {
    return a - b
}

const div = (a, b) => {
    return a / b
}

const PI = 3.14
const g = 9.8

// module.exports = "Hello, ecxports is working properly..."

let obj = {
    sum : sum,
    mul : mul,
    sub : sub,
    div : div,
    g : g,
    PI :PI
}

module.exports = obj

// module.exports.sum = (a, b) =>{
//     return a + b
// } -----> It is also a valid syntax

// exports.sum = (a, b) =>{
//     return a + b
// } -----> It is also a valid syntax
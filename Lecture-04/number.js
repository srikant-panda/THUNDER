// const PI = 3.14159;
// const circleArea = (radius) => PI*radius*radius;
// console.log(circleArea(3))


// const num = 0.1+0.2
// console.log(num)
// console.log(0.3)


// const num1 = 0.1
// const num = 0.2
// console.log(num1+num2)


// Option 1: toFixed() for display
// console.log(num.toFixed(2))  // "0.30"

// Option 2: compare with a tolerance (epsilon)
// Math.abs(0.1 + 0.2 - 0.3) < Number.EPSILON  // true

// // Option 3: work in integers
// (1 + 2) / 10  // 0.3 exactly

// console.log(Number.MAX_SAFE_INTEGER)
// console.log(9007199254740992+1)



// console.log(parseInt("12.99") + parseFloat("7.5"));

const a = 12.344521
console.log(a.toPrecision(3)) // 12.3

console.log(10/0) // Infinity
console.log(-10/0) // -Infinity
console.log(0/0) // NaN
console.log(10/'a') // NaN
console.log(10/0 == Infinity)
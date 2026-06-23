const arr = [2, 4, 12, 4, 1]

// const sum = arr.reduce((accumulator, num) => {
//     return accumulator + num;
// },0);

// console.log(sum)

const mul = arr.reduce((accumulator, num) => {
    return accumulator * num;
},1);
console.log(mul);
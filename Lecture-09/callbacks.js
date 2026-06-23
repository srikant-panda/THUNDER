// // let a = prompt('Hello what is your name: ')
// // let b = prompt('Hello ' + a + ' how are you doing today?')
// // console.log(`Hello ${a} you are doing ${b}`)
// // setTimeout(() => console.log("hii"),3000)
// // console.log('End')

// for (let i = 0; i < 6; i++) {
//   console.log('helo')
//   setTimeout(() => console.log(i), i * 1000);
// }

// /**
//  * 1. i = 0
//  * 2. i =1
//  * 3. i=2
//  * 4. i=3
//  * 5. i=4
//  * 6. i =5
//  */
// setTimeout(() => console.log('This is a message'), 0);
for (let i = 0; i < 10; i++) {
  console.log(i);
  setTimeout(() => console.log(i), 3000)
}

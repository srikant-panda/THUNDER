// const readline = require("readline");

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });

// // // rl.question('Enter your name: ', (name) => {
// // //   console.log(`Hello, ${name}!`);
// // //   rl.close();
// // // });
// // rl.question('Enter your name: ', (name) =>{
// //     console.log(`Hello, ${name}!`);
// //     rl.close();
// // });

// // const i = 'srikantp09';
// // const j = 'srikant09';
// // if(i!=j){
// //     console.log('not')
// // }else{
// //     console.log('yes')
// // }
// const users = [
//   {
//     username: "srikantp09",
//     password: "Srikant#6861",
//   },
//   {
//     username: "rahul",
//     password: "Rahul",
//   },
// ];

// function login(data) {
//     let user = null
//   for (let i of users) {
//       if (i.username === data.username) {
//         user = i;
//       }
//     if(user){
//         break;
//     }
//   }
//   console.log(user)
//   if (!user) {
//     return {
//       status: 404,
//       success: false,
//       body: {
//         message: "User doesnot exist.",
//       },
//     };
//   }
//   if (user.password != data.password) {
//     return {
//       status: 401,
//       success: false,
//       body: {
//         message: "Invalid credentials.",
//       },
//     };
//   }
// //   let current_user = data.username;
//   return {
//     status: 200,
//     success: true,
//     body: {
//       message: "User logged in.",
//       current_user: data.username,
//     },
//   };
// }

// console.log(login({ username: "srikantp09", password: "Srikant#6861" }));

// function test(callback) {
//   setTimeout(() => {
//     callback(10);
//   }, 5000);
// }

// test((value) => {
//   console.log(value);
// });

// const input_handler = () => {
//   rl.question("Enter your name:", (name) => {
//     return name;
//   });
// };


// const a = input_handler();
// console.log(a);


const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function getName(callback) {
  rl.question('Enter your name: ', (answer) => {
    callback(answer);
  });
}

function main() {
  getName((data) => {
    console.log(`Hello, ${data}!`);
    rl.close();
  });

}

main();
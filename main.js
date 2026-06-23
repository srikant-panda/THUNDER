// // let i = 4;
// // var j = 5;
// // var j = 6;
// // const k = 5;
// // let l = null;
// // let m = undefined;

// // console.log(i,j,k,l,m);

// const user = {
//   name: "Srikant Panda",
//   age: 20,
//   phone: "+91-6372806861",
// };

// console.log(user);

// user.age = 21;
// console.log(user.age);

// let arr = [13, "Srikant Panda", 200n, true];
// console.log(arr);

// console.log(typeof user.age, typeof arr[2]);

// let s = function sum(a, b) {
//   return a + b;
// };

// console.log(s(4, 7));

// let g = 6;
// g = 7;
// console.log(g);

// console.log(1 == 1);

// const users = [
//   {
//     name: "Srikant Panda",
//   },
// ];

// function add() {
//   a = 5;
//   b = a + 5;
//   console.log(b);
// }

// add();
// console.error();

// const user = [
//   { name: "Srikant Panda", pass: "etc/passwd", sub: ["math", "eng", "flo"] },
// ];

// console.log(user);
// console.log(user[0].sub);


// const greet = (a , b) => {
//   console.log(a+b);

// };

// greet(2,3)


// a = [1,2,3];
// b = a
// b.push(4)
// console.log(a)
// b.pop(2)
// console.log(a)


const getUser = async () =>({
  name : "Srikant Panda",
  course : "THUNDER++"
});


const user = await getUser()
console.log(user.name) //Srikant Panda
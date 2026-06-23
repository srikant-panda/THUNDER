// const student = {
//     name: "Srikant Panda",
//     age: 20,
//     address: {
//         place: "Madhupalli",
//         city: "Polasara",
//         pin: 761105
//     },
//     eligible: () => { 
//         if (student.age >= 18) {
//             return true
//         }
//         return false
//     }
// };

//console.log(student.eligible())
const a = {
  name: "Papu",
  age: 19,
  is_eligible: () => {
    if (a.age < 18) {
      return false
    };
    return true
  },
   tags : ["human","boy"]
}
console.log(a.is_eligible());
console.log(a.tags)
// let name = 'Srikant'

// const user = {
//   [name]: {
//     balance: 1000
//   }
// }

// console.log(user['Srikant'].balance)

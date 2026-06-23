// const arr = [1,2,3,4,5]?

// const arr = []
// console.log(arr.push(5))
// console.log(arr)
// console.log(arr.length)

// console.log(arr.slice(1,4))
// console.log(arr.splice(0,4),arr)

// const arr2 = arr
// arr2.push(100)
// console.log(arr)

// for(let i=0;i<5;i++){
//     console.log(arr.push(i))
// }

// for(let num of arr){
//     console.log(num)
// }

// console.log(arr)

//concatinate

// const arr2 = [1,3,"Srikant",4]
// console.log()

// const names = ["Srikant","rohit","Mohit"]
// const no = [1,4,2,55,111]
// console.log(names.join("-"))

// console.log(names.sort())
// console.log(no.  sort((a,b)=> b-a))

// -ve : pehle 'a' ayega
// +ve : pehle 'b' ayega

// const arr = [1, 2, 3, [4, 5, 3,[5,6,7]]];
// // console.log(arr);
// // console.log(arr[3][0]);
// const a = arr.flat(Infinity)
// // console.log(arr.flat(Infinity));
// console.log(a)

// const a = [
//   {
//     name: 9,
//   },
//   {
//     name: 2,
//   },
// ];

// for(let i=0;i<a.length;i++)
// {
//     console.log(a[i])
// }

// for(let i of a){
//     console.log(i)
// }
// for (let i = 0; i < a.length; i++) {
//   //   console.log(a[i]);
//   a[i].age = i;
//   console.log(a[i]);
// }

// const arr = [12,34,565,"Srikant"];
// // console.log(arr.splice(0,2),arr);
// console.log(arr)

const arr = [[1,32,43,[12]],[121,342,343,12],[12,43,45,12]]
// for(let i of arr){
//   for(let j of i){
//     console.log(j)
//   }
// }
// const b = [].concat(...arr)
// console.log(b)
// const [first,second,third, ...reamaining] = b // here '...' is rest operator which take all remaining into an array.
// console.log(first,second,third,reamaining)
// const c = [...arr.flat().sort((a,b)=>a-b)]
// //  c.sort((a,b)=>a-b)
// console.log(c)
// console.log(arr.flat(Infinity))

const a = [1,2,3,4,5]
// a.forEach((num)=>console.log(num))

// const filtered = a.filter((a)=> a < 4)
// console.log(filtered)

a.forEach((value)=>{
    console.log(value)
})
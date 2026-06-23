
// // async function get(){
// //     console.log("Start");
// //     const response = await fetch("https://api.github.com/users?per_page=20");
// //     // console.log(response)
// //     const data = await response.json();
// //     console.log(data);
// //     console.log("End");
// // }
// // await get();
// /**
//  * json supports string,number,null,boolean,array
//  * it skip the undifined.
//  */

// /**
//  * pass your own js object into json
//  */

// // const data = {
// //     name: "Srikant Panda",
// //     age: 20,
// // };
// // // JSobject ------> JSON
// // const jsobjectTojson = JSON.stringify(data);
// // // JSON ----------> JSobject
// // const jsonTojsobject = JSON.parse(jsobjectTojson);
// // console.log(jsobjectTojson.name); //undefined bcz it is string objecy
// // console.log(jsonTojsobject.name); // Srikant panda
// // console.log(
// //     jsobjectTojson,
// //     jsonTojsobject,
// //     typeof jsobjectTojson,
// //     typeof jsonTojsobject,
// // );
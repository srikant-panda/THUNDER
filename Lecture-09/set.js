// const arr = [JSON.stringify({name:"Srikant"}),JSON.stringify({name:"Srikant"})]
const arr = [1,2,3,4,5,5]

const set = new Set(arr)
console.log(set)
set.add(7)
console.log("After add",set)
set.delete(5)
console.log("After delete",set)
console.log(set.entries())
set.forEach((value)=>{
    console.log(value)
})
console.log(set.has(3))
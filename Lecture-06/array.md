# Array in javascript
    - Array is an dynamic data structute store multiple values.
    - It is different from other languages like c,c++,etc.
    - Bcz in other languages arrays only store same tyoe of datatype which is the actual definition of an array but in js an array can store multiple values with different datatypes.
`array.length`: determine the length of an array.
## example
```javascript
const arr = [12,32,'Srikant']
console.log(arr)
conslo.log(arr[0]) //access perticular item
```
`arr.push(x)`: insert element at the end.

`arr.pop()`: remove element from the array and return the item.

`console.log(arr.pop(),arr)` o/p 'Srikant' [12,32]

`arr.unshift(x)`: insert element at the start.

`arr.shift()`: remove the element from the start.

`arr.slice(x,y)`: return a new array derived from the parent arr and the new array starts from x index to y-1 index.

`arr.splice(x,y)`: it also works like `slice` but it actually remove the elements from original array . Like it pic the `x` index and remove `y` items after it.


`const arr2 = [1,2]`

`console.log(arr.concat(arr2,...))` : it retur a a new array


# 2D array

```javascrpt
const a = [[...],[...]]
```
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// console.log(arr.filter((num) => num<5))


/**
 * Now let's create this filter function from scratch
 * Let's Give this name like filterThis
 */


Array.prototype.filterThis = function(Callback){
    const answer = []
    for(let i of this){
        if(Callback(i)){
            answer.push(i)
        }
    }
    return answer 
}

console.log(arr.filterThis((num)=>num<5))
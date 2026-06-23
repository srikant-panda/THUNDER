const parent = document.getElementById("parent")

const child1 = document.getElementById("child1")
const child2 = document.getElementById("child2")
const child3 = document.getElementById("child3")
const child4 = document.getElementById("child4")

child1.addEventListener("click", () => {
    // child1.textContent = "I am clicked."
    fetch("https://google.com")
})
child2.addEventListener("click", () => {
    child2.textContent = "I am clicked."
})
child3.addEventListener("click", () => {
    child3.textContent = "I am clicked."
})
child4.addEventListener("click", () => {
    child4.textContent = "I am clicked."
})


// const parent = document.getElementById("parent")

// parent.addEventListener("click", (e) => {
//     if (e.target !== parent) {
//         e.target.textContent = "I am clicked."
//     }
// })
// console.log("Hai bhai kaise ho.");

// const element = document.getElementById("first");

// element.onclick = () => {
    // element.textContent = "helo hi namaste";        This is old method of define an event 
//     element.style.backgroundColor = "pink";
// }


/**
 * New methos
 */

//select the element
const element = document.getElementById("first");

// add an even t listener who always listen if there is an even like click,hover etc.
//single click
element.addEventListener('click',()=> {
    element.textContent = "Hello hi namaste.";
    element.style.backgroundColor = "pink"
})


// double click
element.addEventListener('dblclick',()=> {
    element.textContent = "Hello hi namaste.";
    element.style.backgroundColor = "brown";
})
const newElement = document.createElement('h2')
newElement.textContent = 'I am Srikant Panda'
// newElement.style.color = 'pink'
const element = document.getElementById("first");
element.after(newElement);

const newElement2 = document.createElement("h3");
newElement2.textContent = "Cahlo ghar chalo";
element.before(newElement2);
newElement2.className = 'chalo';
// console.log(newElement2.className)
// newElement2.className += ' ghar'

// console.log(newElement2);

// console.log(newElement2.getAttribute('class'));
// newElement2.setAttribute('id','01');
// console.log(newElement2);



/**
 * dealing with list
 */


// First select the element
const ul = document.querySelector('ul');
const list1 = document.createElement('li');
list1.textContent = 'Web Development';
ul.append(list1);
const list2 = document.createElement("li")
list2.textContent = 'System design';
ul.append(list2);
console.log(ul)
const list3 = document.createElement('li')
ul.append(list3)
list3.textContent = "Devops";
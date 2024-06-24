// SELECTING ELEMENTS IN DOM

// // getElementById()
// const title = document.getElementById('main-heading');
// // getElementByClassName()
// const listItem = document.getElementsByClassName('list-items');
// console.log(listItem);
// // getElementByTagName()
// const listByTag = document.getElementsByTagName('li');
// console.log(listByTag);
// // querySelector()
// const container = document.querySelector('div');
// console.log(container);
// // querySelectorAll()

// const containers = document.querySelectorAll('div');
// console.log(containers);

//****STYLING AN ELEMENT*****
// const title = document.querySelector('#main-heading');

// title.style.color = 'red';

// const listItems = document.querySelectorAll('.list-items');
// console.log(listItems);

// for (i = 0; i < listItems.length; i++) {
//   listItems[i].style.fontSize = '5rem';
// }

//****CREATING ELEMENTS****
// const ul = document.querySelector('ul');
// const li = document.createElement('li');

//ADDING ELEMENTS
// ul.append(li);

//***MODIFYING THE TEXT****
// const firstListItem = document.querySelector('.list-items');
// console.log(firstListItem.innerText);
// console.log(firstListItem.textContent);
// console.log(firstListItem.innerHTML);

// li.innerText = 'X men';

//****MODIFYING ATTRIBUTES*****
// li.setAttribute('id', 'main-heading');
// li.removeAttribute('id');

// const title = document.querySelector('#main-heading');

// console.log(title.getAttribute('id'));

// li.classList.remove('list-items');

// console.log(li.classList.contains('list-items'));

//REMOVING ELEMENTS
// li.remove();

//*******TRAVERSING THE DOM********

//1. DOM manipulation

//2. Traverse the DOM

//3. Parent Node Traversal

// let ul = document.querySelector('ul');
// console.log(ul);
// console.log(ul.parentNode.parentNode);
// console.log(ul.parentElement.parentElement);

// const html = document.documentElement;

// console.log(html.parentNode); // document object
// console.log(html.parentElement); // null

//4. child node and element node(children) traversal

//4.1 using childNodes
// console.log(ul.childNodes); //nodeList
// console.log(ul.firstChild);
// console.log(ul.lastChild);

// ul.childNodes[1].style.backgroundColor = 'blue';

//4.2 using children
// console.log(ul.children); // HTMLCollection
// console.log(ul.firstElementChild);
// console.log(ul.lastElementChild);

//5. Sibling Node Traversal and Sibling element
let ul = document.querySelector('ul');
const div = document.querySelector('div');

console.log(div.childNodes);

// siblings nodes
console.log(ul.previousSibling);
console.log(ul.nextSibling);

// element nodes
console.log(ul.previousElementSibling);
console.log(ul.nextElementSibling);

//*****EVEN LISTENERS*****/
let A = 5;

do {
  A++;
} while (A > 10);

console.log(A);

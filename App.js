//******************** All DOM selector ****************************
// Raw code this is not notes.
// const head = document.querySelector('h2');
// console.log(head);

// const title = document.querySelector('#title');
// console.log(title);

// const heading = document.querySelector('.heading');
// console.log(heading);

// heading.style.backgroundColor = "green";


// const ul = document.querySelector('ul');

// const templiList= ul.querySelectorAll('li');
// console.log(templiList);

// const arr  = [1,2,33,45,6,7];
// console.log(arr);

// gree.style.backgroundColor = "green";
// gree.style.padding = "10px";
// console.log(gree.innerText);
// // console.log(ul.innerHTML);



// const liclass = document.getElementsByClassName('first')
// console.log(liclass);

// // convert HTML list into Array.

// const lilist = Array.from(liclass);
// console.log(lilist);

// // Applying color on list by the help of arrow function.
// lilist.forEach( (li) => (li.style.color = "orange"))


// ********* How to create a new element **************

// const parent = document.querySelector('.parent');
// // console.log(parent.innerHTML);
// // console.log(parent.children[0].innerHTML);
// // for (let i = 0; i < parent.children.length; i++) {
//     // console.log(parent.children[i].innerHTML);
// // }

// console.log(parent.childNodes);



// ******** Creating Element ***************


// const div = document.createElement('div');
// console.log(div);
// div.className = "main"
// div.id = "myId"
// div.setAttribute("title", "Hello & Welcome")
// div.style.backgroundColor = "pink"
// div.style.padding = "5px"
// div.innerText = "Atul kashyap and best coder"

// // Adding newly created div into body

// document.body.append(div);


// *************** Edit and Remove DOM Elements ******************

// Creating function for adding element in list

function addlang(langname){
    const li = document.createElement('li');
    li.innerHTML = `${langname}`
    document.querySelector('.languages').appendChild(li)
}

addlang("Python")
addlang("TypeScript")


// Optimised way to add elements.

function addOptli(langName){
    const li = document.createElement('li')
    li.appendChild(document.createTextNode(langName))
    document.querySelector('.languages').appendChild(li)
}

addOptli("Golang")



// Edit

const secondLang = document.querySelector("li:nth-child(2)")
// secondLang.innerHTML = "Mojo"


// by making new element and then replace with python value.
const newli = document.createElement('li')
newli.textContent = "Mojo"
secondLang.replaceWith(newli)

// edit

const firstLang = document.querySelector("li:first-child")
// firstLang.textContent = "TypeScript"
firstLang.outerHTML = '<li>TypeScript</li>'


// remove

const lastLang = document.querySelector('li:last-child')

lastLang.remove()
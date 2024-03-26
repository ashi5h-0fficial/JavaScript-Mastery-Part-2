/* 
    • getElementsByClassName(): It gives array-like object called HTML collection.
    • querySelectorAll(): It gives array-like object called Nodelist.
*/
 const navItems = document.getElementsByClassName("nav-item"); // HTMLCollection
console.log(navItems);
console.log(Array.isArray(navItems));

const navItems1 = document.querySelectorAll(".nav-item"); // NodeList
console.log(navItems1[1]);
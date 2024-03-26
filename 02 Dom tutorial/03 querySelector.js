// select element using query selector
// class and id both can be selected using querySelector

// const mainHeading = document.getElementById("main-heading");
const mainHeading = document.querySelector("#main-heading");
const header = document.querySelector(".header");

//querySelector using class, gives first occurence of element. To select all element, use querySelectorAll
const navItem = document.querySelectorAll(".nav-item")
console.log(navItem);
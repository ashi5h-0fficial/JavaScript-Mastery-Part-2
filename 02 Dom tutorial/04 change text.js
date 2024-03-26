/* change text: textContent VS innerText 

• textContent: It gives all details of selected element(including hidden details)
• innerText: It gives only visible details of selected element.
*/

const mainHeading = document.getElementById("main-heading");
console.log(mainHeading.innerText);
mainHeading.textContent = "This is something else";
console.log(mainHeading.textContent);
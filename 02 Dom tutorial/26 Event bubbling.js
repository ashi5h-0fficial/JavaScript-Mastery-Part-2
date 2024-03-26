/*
    Event bubbling or Event propagation: if same event is added on child and parent element, and if we perform event on child, same event automatically happen to parent also.

    Event capturing: 3rd parameter of addEventListener callback

    event delegation: adding eventListener to parent and accessiblr through child also.
*/

console.log("hello world");

const grandparent = document.querySelector(".grandparent");
// const parent = document.querySelector(".parent");
// const child = document.querySelector(".child");

// capturing events
child.addEventListener(
  "click",
  () => {
    console.log("capture !!!! child");
  },
  true
);
parent.addEventListener(
  "click",
  () => {
    console.log("capture !!!! parent");
  },
  true
);
grandparent.addEventListener(
  "click",
  () => {
    console.log("capture !!!! grandparent");
  },
  true
);
document.body.addEventListener(
  "click",
  () => {
    console.log("capture !!!! document.body");
  },
  true
);

// not capture

// child.addEventListener("click", () => {
//   console.log("bubble child");
// });
// parent.addEventListener("click", () => {
//   console.log("bubble parent");
// });
// grandparent.addEventListener("click", () => {
//   console.log("bubble grandparent");
// });
// document.body.addEventListener("click", () => {
//   console.log("bubble document.body");
// });


// event delegation

grandparent.addEventListener("click", (e) => {
  console.log(e.target);
});

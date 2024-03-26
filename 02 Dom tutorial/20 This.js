
// this keyword
//In addEventListener(): value of this is Button itself
//In arrow fnu(): value of this is one level up, mostly window {}

const btn = document.querySelector(".btn-headline");

btn.addEventListener("click",function(){
    console.log("you clicked me !!!!");
    console.log("value of this")
    console.log(this);
});
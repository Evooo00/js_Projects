const previousButton = document.querySelector(".previous");
const nextButton = document.querySelector(".next");

const buttons = document.querySelectorAll(".btn");
const slide1 = document.getElementById("slide1");
const slide2 = document.getElementById("slide2");
const slide3 = document.getElementById("slide3");


let number = 1;

buttons.forEach(function(btns){
    btns.addEventListener("click", function(e){
        const a = e.currentTarget.classList;
        if(a.contains("next")){
            console.log("asd")
        };

        
    });
});

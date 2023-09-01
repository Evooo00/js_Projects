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
        if(a.contains("next") && number < 3){
            //console.log("asd")
            number += 1;
            console.log(number)
            
        }
        if(a.contains("previous") && number > 1){
            //console.log("asd")
            number -= 1;
            console.log(number)
            
        }
        

        if(number == 1){
            slide1.style.opacity = "1";
            slide2.style.opacity = "0";
            slide3.style.opacity = "0";
            console.log(number)
        }
        else if(number == 2){
            slide1.style.opacity = "0";
            slide2.style.opacity = "1";
            slide3.style.opacity = "0";
            console.log(number)
        }
        else if(number == 3){
            slide1.style.opacity = "0";
            slide2.style.opacity = "0";
            slide3.style.opacity = "1";
            console.log(number)
        }

        
    });
});

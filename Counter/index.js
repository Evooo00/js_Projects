

let x = 0;


const number = document.getElementById("number");
const decrease = document.getElementById("decrease");
const reset = document.getElementById("reset");
const increase = document.getElementById("increase");

decrease.addEventListener("click", function(){
    x -= 1;
    number.textContent = x;

    if(x < 0){
        number.style.color = "red";
    }
    if(x == 0){
        number.style.color = "black";
    }
});
reset.addEventListener("click", function(){
    x = 0;
    number.textContent = x;
    
    number.style.color = "black";
    
});
increase.addEventListener("click", function(){
    x += 1;
    number.textContent = x;
    if(x > 0){
        number.style.color = "green";
    }
    if(x == 0){
        number.style.color = "black";
    }
});



/*
const number = document.querySelector("#number");
const buttons = document.querySelectorAll("#buttons");



buttons.forEach(function(button){
    button.addEventListener("click", function(smth){
        console.log("smth");
    });

    
});

*/





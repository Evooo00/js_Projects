
const threeButtons = document.querySelectorAll(".buttons");
const counterNumber = document.querySelector("#number");
let count = 0;

threeButtons.forEach(function (btn){
    btn.addEventListener("click", function(item){
        //console.log(item.currentTarget.classList);
    clickedButton = item.currentTarget.classList;
    if(clickedButton.contains("decrease")){
        //console.log("dziala");
        count -= 1;
        counterNumber.textContent = count;
        
    }
    else if(clickedButton.contains("reset")){
        count = 0;
        counterNumber.textContent = count;
    }
    else if(clickedButton.contains("increase")){
        count += 1;
        counterNumber.textContent = count;
    }

    if(count > 0){
        counterNumber.style.color = "green";
    }
    else if(count < 0){
        counterNumber.style.color = "red";
    }
    else{
        counterNumber.style.color = "black";
    }
    });
});
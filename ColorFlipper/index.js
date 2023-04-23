const colors = ["red", "blue", "purple", "green"];

let button = document.getElementById("switcher_button");
let b_color = document.getElementById("background_color");

function randomNumber(){
    return Math.floor(Math.random() * colors.length);
}
button.addEventListener("click", function(){
    //console.log("test");

    let end_color = colors[randomNumber()];

    

    b_color.textContent = end_color;
    document.body.style.backgroundColor = end_color;
    button.style.backgroundColor = end_color;

});

button.addEventListener('mouseover', function(){

    button.style.backgroundColor = "black";
});
button.addEventListener('mouseout', function(){

    button.style.backgroundColor = "initial";
});
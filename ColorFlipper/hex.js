const colors = [1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

let button = document.getElementById("switcher_button");
let b_color = document.getElementById("background_color");

function randomNumber(){
    return Math.floor(Math.random() * colors.length);
}
button.addEventListener("click", function(){
    //console.log("test");

    let end_color = "#";

    for(let i = 0; i < 6; i++){
        //console.log(randomNumber());

        end_color += colors[randomNumber()];
        //console.log(end_color);
    }

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
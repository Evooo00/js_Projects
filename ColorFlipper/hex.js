
function changingBackgroundColor(){
    function randomNumber(){
        return Math.floor(Math.random() * arrayOfHexChars.length);
    }

    const arrayOfHexChars = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"];
    const button = document.querySelector(".btn");
    const textWithHexOfBackgroundColor = document.querySelector("#backgroundColor");

    const randomHexChars = Array.from({length: 6}, () => arrayOfHexChars[randomNumber()]);   
    const addingToHashCharColor = "#" + randomHexChars.join("");
    
    //console.log(addingToHashCharColor);

    document.body.style.backgroundColor = addingToHashCharColor;
    button.style.backgroundColor = addingToHashCharColor;
    textWithHexOfBackgroundColor.textContent = addingToHashCharColor;

}



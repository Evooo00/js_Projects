
function changingBackgroundColor(){
    
    const arrayWithColors = ['red', 'blue', 'green', 'orange'];
    if(arrayWithColors.length > 0){
        const textWithBackgroundColor = document.querySelector("#backgroundColor");
    const button = document.querySelector(".btn");

    function randomNumberOfArray(){
        return Math.floor(Math.random() * arrayWithColors.length);
    }

    const generatedRandomColor = arrayWithColors[randomNumberOfArray()];

    textWithBackgroundColor.textContent = generatedRandomColor;
    document.body.style.backgroundColor = generatedRandomColor;
    button.style.backgroundColor = generatedRandomColor;
    }
    else{
        console.log("Empty array");
    }
    
}




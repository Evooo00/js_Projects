const lorems = [
    "Paragraph 1",
    "Paragraph 2",
    "Paragraph 3",
    "Paragraph 4",
    "Paragraph 5",
    "Paragraph 6",
    "Paragraph 7",
    "Paragraph 8",
    "Paragraph 9"
]

const generateButton = document.querySelector(".generateButton");
const howMany = document.getElementById("howMany");
const placeForParagraphs = document.querySelector(".generatedParagraphs");

generateButton.addEventListener("click", function(){
    
    let randomNumber = Math.floor(Math.random()*lorems.length);
    console.log(typeof howMany);
    if(howMany.value <= 0 || howMany.value > 9){
        
        placeForParagraphs.innerHTML = `<p class="generatingText">${lorems[randomNumber]}</p>`;
    }
    else{
        let someText = lorems.slice(0,howMany.value);
        someText = someText.map(function(lorem){
            return `<p class="generatingText">${lorem}</p>`;
        }).join('')
       
        placeForParagraphs.innerHTML = someText;
    }
});
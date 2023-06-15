const reviews =[
    {
        id: 1,
        name: "Mariusz Pudzianowski",
        job: "Strongman",
        img: "pudzian.jpg",
        opinion:
        "Jak zawsze tanio skóry nie sprzedam ale musze przyznać, że strona jest naprawdę koksem prawie tak samo Jak moja forma na zawodach Strongman"
    },
    {
        id: 2,
        name: "Adam Małysz",
        job: "Narciarz Farciarz",
        img: "malysz.jpg",
        opinion: 
        "Wskoczyłem na tą strone jak na podium narciarskie moimi nartami i musze smiało stwierdzić, że doznania z użytkowania jej są lepsze niż skok ze skoczni :)"
    },
    {
        id: 3,
        name: "Robert Makłowicz",
        job: "Kucharz Filantrop",
        img: "maklowicz.jpg",
        opinion:
        "Ulala kiedyś byłem w Nigerii i tam jadłem wszystko co ludzie potrafili złapać w ręce i zapijałem pyszniuutką wódeczką tak tak, strona bardzo dobra"
    }
]

const person = document.getElementById("person");
const author = document.getElementById("author");
const job = document.getElementById("job");
const opinion = document.getElementById("opinion");

const leftButton = document.querySelector(".leftButton");
const rightButton = document.querySelector(".rightButton");
const surprise = document.querySelector(".surprise");

let number = 0;

window.addEventListener("DOMContentLoaded", function(){
    person.src = reviews[number].img;
    author.textContent = reviews[number].name;
    job.textContent = reviews[number].job;
    opinion.textContent = reviews[number].opinion;


});

rightButton.addEventListener("click", function(){
    if(number==2){
        number = 2;
    }
    else{
        number = number + 1;
        //console.log(number);
        person.src = reviews[number].img;
        author.textContent = reviews[number].name;
        job.textContent = reviews[number].job;
        opinion.textContent = reviews[number].opinion;
    }
    

});
leftButton.addEventListener("click", function(){
    if(number==0){
        number = 0;
    }
    else{
        number = number - 1;
        //console.log(number);
        person.src = reviews[number].img;
        author.textContent = reviews[number].name;
        job.textContent = reviews[number].job;
        opinion.textContent = reviews[number].opinion;
    }
    

});
function getRandomNumber(value){
    return Math.floor(Math.random() * value);
}

surprise.addEventListener("click", function(){
    
    //console.log(getRandomNumber(3));
    let checkingNumber = number;
    while(checkingNumber == number){
        checkingNumber = getRandomNumber(3);
    }
    number = checkingNumber;
    

    person.src = reviews[number].img;
    author.textContent = reviews[number].name;
    job.textContent = reviews[number].job;
    opinion.textContent = reviews[number].opinion;
});


const menu = [{
    id: 1,
    title: "Pierogi",
    category: "pierogi",
    price: "6.99$",
    img: "pierogi.jpg",
    description: "Przepiszne jedzenie stworzone dla prawdziwych polaków szukających mocnych wrażeń"
},
{
    id: 1,
    title: "Pomidorowa",
    category: "zupy",
    price: "3.99$",
    img: "pomidorowa.jpg",
    description: "Pyszna zupka pomidorowa, którą każdy z miłą chęcią u nas zjada ze smakiem"
},
{   
    id: 1,
    title: "Schabowy",
    category: "mieso",
    price: "8.99$",
    img: "schabowy.jpg",
    description: "Schabowy jest to najbardziej pospolity w naszym kraju i każdy Janusz kulinarii pragnie go codziennie :)"},
{
    id: 1,
    title: "Dorsz",
    category: "ryby",
    price: "12.99$",
    img: "dorsz.jpg",
    description: "Człowiek powinien obowiązkowo jeść rybę conajmniej raz w ciągu tygodnia więc i u nas znajdziesz najlepszą jaką kiedykolwiek jadłeś"
}];

const dinners = document.querySelector(".dinners");
const buttons = document.querySelectorAll(".btn");

buttons.forEach(function(btn){
    btn.addEventListener("click", function(x){
        const filteredValue = x.currentTarget.dataset.value;
        //console.log(filteredValue);
        const filteredMenu = menu.filter(function(itemOfMenu){
            if(itemOfMenu.category === filteredValue){
                //console.log(itemOfMenu);

                return itemOfMenu;
            }
        });


            if(filteredValue === "all"){
                displayOnStart(menu);
            }
            else{
                displayOnStart(filteredMenu)
            }
  
        

    });
    
});

window.addEventListener("DOMContentLoaded", function(){
    displayOnStart(menu);
});

const displayOnStart = function(fullMenu){
    
        let display = fullMenu.map(function(value){
            
    
            return `<article class="dinner">
                    <div class="photo">
                        <img class="photoOfDinner" src=${value.img}>
                    </div>
                    <div class="dinnerInformation">
                        <div class="nameAndPrice">
                            <div class="name">${value.title}</div>
                            <div class="price">
                                ${value.price}
                            </div>
                        </div>
                        <hr class="dinnerLine">
                        <p class="info">
                        ${value.description}
                        </p>
                    </div>
                    
                    
                </article>`;
        });
    
        display = display.join('')
        dinners.innerHTML = display;
        
    
};
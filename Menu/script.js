const menu = [{
    id: 1,
    title: "Pierogi",
    category: "pierogi",
    price: "6.99$",
    img: "pierogi.jpg",
    description: "Przepiszne jedzenie stworzone dla prawdziwych polaków szukających mocnych wrażeń"
}];

const dinners = document.querySelector(".dinners");


window.addEventListener("DOMContentLoaded", function(){
    let display = menu.map(function(value){
        

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
    console.log(display)

    dinners.innerHTML = display;
    
});
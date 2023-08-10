const mainButton = document.querySelector(".mainButton");
const groceryItem = document.querySelector(".groceryItem");
let items = document.querySelector(".items");

mainButton.addEventListener("click", function(){

    id = new Date().getTime().toString();
    
    let element = document.createElement("div");
    element.classList.add("divForItem");

    const attr = document.createAttribute("data");
    attr.value = id;
    element.setAttributeNode(attr);
    element.innerHTML = `
    <p class='itemLine'>${groceryItem.value}</p>
    <button class='edit'>Edit</button>
    <button class='remove'>Remove</button>`
    console.log(element);

    items.appendChild(element);
    
            /*
            <div class='divForItem'>
                <p class='itemLine'>${item}</p>
                <button class='edit'>Edit</button>
                <button class='remove'>Remove</button>
            </div>
            */
    

});
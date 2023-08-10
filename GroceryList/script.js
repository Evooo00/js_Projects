const mainButton = document.querySelector(".mainButton");
const groceryItem = document.querySelector(".groceryItem");
let items = document.querySelector(".items");
const alert = document.querySelector(".alert");


mainButton.addEventListener("click", addingItems);







function addingItems(){


    if(groceryItem.value != ''){
        //Creating unical id for my attributes
        id = new Date().getTime().toString();
            
        let element = document.createElement("div");
        element.classList.add("divForItem");

        const attr = document.createAttribute("data");
        attr.value = id;
        element.setAttributeNode(attr);
        element.innerHTML = `
        <p class='itemLine'>${groceryItem.value}</p>
        <button class='editButton'>Edit</button>
        <button class='removeButton'>Remove</button>`
        //console.log(element);

        const removeButton = element.querySelector(".removeButton");
        removeButton.addEventListener("click", removeItems);

        items.appendChild(element);

        //Setting value of input to default
        groceryItem.value = '';

        displayAlert("Item Added", "alertSuccess");
    }

}


function displayAlert(text, value){
    alert.textContent = text;
    alert.classList.add(value);

    setTimeout(function(){
        alert.textContent = "";
        alert.classList.remove(value);

    }, 1000);
}


function removeItems(value){
    const element = value.currentTarget.parentElement;
    items.removeChild(element);

}
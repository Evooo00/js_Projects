const mainButton = document.querySelector(".mainButton");
const groceryItem = document.querySelector(".groceryItem");
let items = document.querySelector(".items");
const alert = document.querySelector(".alert");


mainButton.addEventListener("click", addingItems);

//Creating a Flag which will be used to editing items
let myFlag = false;
//Creating global variable fir editing
let editedElement;




function addingItems(){


    if(groceryItem.value != '' && myFlag == false){

        //Creating unical id for my attributes
        id = new Date().getTime().toString();
            
        let element = document.createElement("div");
        element.classList.add("divForItem");

        const attr = document.createAttribute("data-id");
        attr.value = id;
        element.setAttributeNode(attr);
        element.innerHTML = `
        <p class='itemLine'>${groceryItem.value}</p>
        <div>
        <button class='editButton'>Edit</button>
        <button class='removeButton'>Remove</button>
        </div>`
        //console.log(element);

        //Removing Items
        const removeButton = element.querySelector(".removeButton");
        removeButton.addEventListener("click", removeItems);

        //Editing Items
        const editButton = element.querySelector(".editButton");
        editButton.addEventListener("click", editItems);

        items.appendChild(element);

        //Setting value of input to default
        groceryItem.value = '';

        displayAlert("Item Added", "alertSuccess");
    }
    else if(groceryItem.value != '' && myFlag == true){
        editedElement.innerHTML = groceryItem.value;
        groceryItem.value = '';
        mainButton.textContent = "Add";
        console.log("Editing")
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
    const element = value.currentTarget.parentElement.parentElement;
    //console.log(element);
    items.removeChild(element);
    displayAlert("Remove Item", "alertFailure")
    if(myFlag == true){
        myFlag = false;
        mainButton.textContent = "Add";
        groceryItem.value = "";
    }

}

function editItems(value){
    editedElement = value.currentTarget.parentElement.previousElementSibling;
    console.log(editedElement)
    //Setting Flag to True
    myFlag = true;

    groceryItem.value = editedElement.innerHTML;
    mainButton.textContent = "Edit";
    displayAlert("Item edited", "alertSuccess");

}
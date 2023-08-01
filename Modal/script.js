const modalOpenButton = document.querySelector(".modalOpenButton");
const modalCloseButton = document.querySelector(".modalCloseButton");
const modalView = document.querySelector(".modalView");


modalOpenButton.addEventListener("click", function showModal(){
    modalView.classList.add("showModalContent");

    modalOpenButton.removeEventListener("click", showModal);

    
});


modalCloseButton.addEventListener("click", function hideModal(){
    modalView.classList.remove("showModalContent");

    modalCloseButton.removeEventListener("click", hideModal);
    });
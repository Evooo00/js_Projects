const modalOpenButton = document.querySelector(".modalOpenButton");
const modalCloseButton = document.querySelector(".modalCloseButton");
const modalView = document.querySelector(".modalView");

modalOpenButton.addEventListener("click", function(){
modalView.classList.add("showModalContent");
});

modalCloseButton.addEventListener("click", function(){
    modalView.classList.remove("showModalContent");
    });
const buttons = document.querySelectorAll(".button");

buttons.forEach(function(btn){
    btn.addEventListener("click", function(correctButton){
        const question = correctButton.currentTarget.parentElement.parentElement;

        question.classList.toggle("show");
    });
});



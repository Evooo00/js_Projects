const tabs = document.querySelectorAll(".tab");
const allTabs = document.getElementById("allTabs");
const contents = document.querySelectorAll(".content");



allTabs.addEventListener("click", function(tab){
    const id = tab.target.dataset.id;

    
    console.log(id);

    if(id){
        tabs.forEach(function(e){
            e.classList.remove('whichTabClicked');
            tab.target.classList.add('whichTabClicked');
        });

        contents.forEach(function(content){
            content.classList.add('displayTab');
        });

        document.getElementById(id).classList.remove("displayTab");
    }
});
const navButton = document.querySelector(".navButton");
const links = document.querySelector(".links");

navButton.addEventListener("click", function(){
    if(links.classList.contains("showLinks")){
        console.log("jest");
        links.classList.remove("showLinks");
        
    }
    else{
        console.log("niejest");
        links.classList.add("showLinks");
    }
})
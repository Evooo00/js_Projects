const navBar = document.getElementById("navBar");

window.addEventListener("scroll", function(){
    console.log(window.pageYOffset);
    const scrollValue = window.pageYOffset;
    const heightOfNavBar = navBar.getBoundingClientRect().height;
    
    if(scrollValue > heightOfNavBar){
        navBar.classList.add("scrolledNavBar");
    }
    else{
        navBar.classList.remove("scrolledNavBar")
    }
    

    
});




/*-----   Fixed NavBar    -----*/

const navBar = document.getElementById("navBar");


window.addEventListener("scroll", function(){
    
    const scrollValue = window.pageYOffset;
    const heightOfNavBar = navBar.getBoundingClientRect().height;
    
    if(scrollValue > heightOfNavBar){
        navBar.classList.add("scrolledNavBar");
        navBar.classList.add("scrolledNavBar2");
        
    }
    else{
        navBar.classList.remove("scrolledNavBar");
        navBar.classList.remove("scrolledNavBar2");
    }
    

    
});


/*-----     Scrolling website from links     -----*/

const links = document.querySelectorAll(".hyper");

links.forEach(function(link){
    link.addEventListener("click", function(value){
        value.preventDefault();
        /*^^^^^^^deleting <a> funcionality^^^^^^^^^^^*/
        

        const id = value.currentTarget.getAttribute("href").slice(1);
        const element = document.getElementById(id);
        const heightOfNavBar = navBar.getBoundingClientRect().height;
        

        const x = navBar.classList.contains("scrolledNavBar");
        
        
        
        if(id === "home"){
            window.scrollTo({
                left:0,
                top: 0
            });
        }
        else{
            
            let position = element.offsetTop - heightOfNavBar;
            if(!x){
                position = position - heightOfNavBar;
            }
            window.scrollTo({
                left:0,
                top: position
            });
        }

        
        
        
       

    });
});

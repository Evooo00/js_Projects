const button = document.querySelector(".controlButton");
const video = document.querySelector(".video");


button.addEventListener("click", function(){
    
    if(video.paused){
        video.play();
        button.textContent = "Pause";

    }
    else{
        video.pause();
        button.textContent = "Play";
    }
});
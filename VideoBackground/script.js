const button = document.querySelector(".controlButton");
const video = document.querySelector(".video");

button.addEventListener("click", function(){
    
    if(video.paused){
        video.play();
    }
    else{
        video.pause();
    }
});
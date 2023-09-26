var vid = document.querySelector("video");
var player = document.querySelector("#player");
var scroll_button = document.querySelector("#scroll-circle");
vid.addEventListener("click", ()=>{
    if(vid.paused) {
        vid.play();
        player.style.opacity='0';
        player.classList.replace("fa-play", "fa-pause");
    }
    else {
        vid.pause(); 
        player.style.opacity = "1";
        player.classList.replace("fa-pause", "fa-play");
    }
});

vid.addEventListener("mousemove", ()=>{
    if(player.style.opacity == '0') {
        player.style.opacity = '1';
    }
})

vid.addEventListener("mouseleave", ()=>{
        player.style.opacity = '0';
})

window.addEventListener("scroll" , (event) => {
    if(window.scrollY > 300) {
        scroll_button.style.transform = "translateX(0px)";
    }
    else {
        scroll_button.style.transform = "translateX(100px)";
    }
})

scroll_button.addEventListener("click", ()=>{
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
});
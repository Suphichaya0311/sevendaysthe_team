const startBtn = document.getElementById("startBtn");
const fade = document.getElementById("fadeScreen");

const videoScene1 = document.getElementById("videoScene1");
const messageScene = document.getElementById("messageScene");
const msg1 = document.getElementById("msg1");
const msg2 = document.getElementById("msg2");

const videoScene2 = document.getElementById("videoScene2");
const video2 = document.getElementById("video2");

let player;


/* โหลด YouTube */
function onYouTubeIframeAPIReady() {

    player = new YT.Player('player', {
        videoId: 'GRd0e_EyWUs', // คลิปที่1
        playerVars:{
            autoplay:0,
            controls:0,
            rel:0
        },
        events:{
            'onStateChange': onPlayerStateChange
        }
    });
}


/* กดเริ่ม */
startBtn.onclick = () => {

    document.getElementById("startPage").style.display="none";

    fade.classList.add("fadeIn");

    setTimeout(()=>{
        fade.classList.remove("fadeIn");
        videoScene1.style.display="block";
        player.playVideo();
    },1500);
};


/* คลิป1จบ */
function onPlayerStateChange(event){

    if(event.data === YT.PlayerState.ENDED){

        videoScene1.style.display="none";
        showMessage();
    }
}


function showMessage(){

    messageScene.style.display="flex";

    setTimeout(()=>{
        msg1.classList.add("showText");
    },800);

    setTimeout(()=>{
        msg2.classList.add("showText");
    },3500);

    setTimeout(()=>{
        startVideo2();
    },6500);
}


function startVideo2(){

    messageScene.style.display="none";

    fade.classList.add("fadeIn");

    setTimeout(()=>{

        fade.classList.remove("fadeIn");

        videoScene2.style.display="block";

        video2.muted=false;
        video2.volume=1;

        video2.play().catch(()=>{
            video2.muted=true;
            video2.play();
        });

    },1500);
}

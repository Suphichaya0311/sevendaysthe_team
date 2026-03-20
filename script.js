const startBtn = document.getElementById("startBtn");

const fade = document.getElementById("fadeScreen");

const videoScene1 = document.getElementById("videoScene1");
const video1 = document.getElementById("video1");

const messageScene = document.getElementById("messageScene");
const msg1 = document.getElementById("msg1");
const msg2 = document.getElementById("msg2");

const videoScene2 = document.getElementById("videoScene2");
const video2 = document.getElementById("video2");


/* กดครั้งเดียวเริ่มทั้งหมด */
startBtn.addEventListener("click", () => {

    document.getElementById("startPage").style.display="none";

    fade.classList.add("fadeIn");

    setTimeout(()=>{
        startVideo1();
    },1500);

});


function startVideo1(){

    fade.classList.remove("fadeIn");

    videoScene1.style.display="block";

    video1.muted = false;
    video1.volume = 1;

    video1.play().catch(()=>{
        video1.muted=true;
        video1.play();
    });

}


/* คลิปแรกจบ */
video1.onended = ()=>{

    videoScene1.style.display="none";
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
};


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

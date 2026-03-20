let player;

// โหลด YouTube
function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
        videoId: '_p_Q439Kl68', // ⭐ คลิปแรกของออย
        playerVars:{
            autoplay:0,
            controls:0,
            rel:0
        },
        events:{
            onStateChange:onPlayerStateChange
        }
    });
}

// กดปุ่มเริ่ม
document.getElementById("startBtn").onclick = function(){

    document.getElementById("startScreen").style.display="none";

    const fade=document.getElementById("fade");
    fade.style.opacity=1;

    setTimeout(()=>{
        document.getElementById("youtubeContainer").style.display="block";
        player.playVideo(); // เล่น + มีเสียง
    },2000);
};

// เมื่อคลิป1จบ
function onPlayerStateChange(event){
    if(event.data === YT.PlayerState.ENDED){
        showEnding();
    }
}

// แสดงข้อความจบ
function showEnding(){

    document.getElementById("youtubeContainer").style.display="none";

    const ending=document.getElementById("endingText");
    ending.style.display="flex";

    setTimeout(()=> line1.style.opacity=1,1000);
    setTimeout(()=> line2.style.opacity=1,3500);
    setTimeout(()=> line3.style.opacity=1,6000);
    setTimeout(()=> line4.style.opacity=1,8500);

    // เล่นคลิป2
    setTimeout(()=>{
        ending.style.display="none";

        const v2=document.getElementById("video2");
        v2.style.display="block";
        v2.play();

    },12000);
}

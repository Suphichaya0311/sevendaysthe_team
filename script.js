const startBtn = document.getElementById("startBtn");
const fade = document.getElementById("fade");
const youtubeBox = document.getElementById("youtubeBox");
const youtubeVideo = document.getElementById("youtubeVideo");

startBtn.onclick = () => {

    document.getElementById("startScreen").style.display="none";

    // fade ดำ
    fade.style.opacity=1;

    setTimeout(()=>{

        youtubeBox.style.display="block";

        // ⭐ ใส่ลิงก์คลิปหลักตรงนี้
        youtubeVideo.src =
        "https://www.youtube.com/embed/_p_Q439Kl68?autoplay=1&mute=0";

    },2000);
};


// 👉 ประมาณเวลาคลิปแรก (แก้ตามจริงได้)
setTimeout(showEnding, 240000); // 4 นาที


function showEnding(){

    youtubeBox.style.display="none";

    const ending=document.getElementById("ending");
    ending.style.display="flex";

    setTimeout(()=> t1.style.opacity=1,1000);
    setTimeout(()=> t2.style.opacity=1,3500);
    setTimeout(()=> t3.style.opacity=1,6000);
    setTimeout(()=> t4.style.opacity=1,8500);

    // ต่อคลิป2
    setTimeout(()=>{
        ending.style.display="none";

        const v2=document.getElementById("video2");
        v2.style.display="block";
        v2.play();

    },12000);
}

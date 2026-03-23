function go(page){
document.querySelector(".fade").style.opacity=1;

setTimeout(()=>{
window.location.href=page;
},1500);
}

/* เปิดเสียง youtube */
function playSound(){
let iframe=document.getElementById("yt");
iframe.src+="&autoplay=1&mute=0";
document.getElementById("soundBtn").style.display="none";
}

/* ไปหน้าจบอัตโนมัติ */
function autoEnding(){
setTimeout(()=>{
window.location.href="ending.html";
},180000); // 3 นาที
}

/* เล่นคลิป2 */
function playVideo2(){
let v=document.getElementById("video2");
v.play();

v.onended=()=>{
window.location.href="letter.html";
}
}

let password="";

function press(num){
password += num;
document.getElementById("password").value="●".repeat(password.length);
}

function clearPass(){
password="";
document.getElementById("password").value="";
}

function checkPass(){

const codes={
"739204":"ya.html",
"581936":"emmy.html",
"420817":"mook.html",
"906315":"pan.html",
"274690":"aim.html",
"813502":"somo.html"
};

if(codes[password]){
window.location.href=codes[password];
}else{
alert("รหัสไม่ถูกนะ 🤍");
clearPass();
}

}

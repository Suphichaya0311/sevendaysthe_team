function goToOpening() {
    const fade = document.getElementById("fade");

    // กันกดซ้ำ
    if (fade.classList.contains("active")) return;

    fade.classList.add("active");

    setTimeout(() => {
        window.location.href = "opening.html";
    }, 1500);
}

document.addEventListener("DOMContentLoaded", function () {
    const submitButton = document.getElementById("submitButton");
    const mainScreen = document.getElementById("mainScreen");
    const iframe = document.getElementById("iframe");

    mainScreen.style.display = "none"; // 화면을 숨김

    submitButton.addEventListener("click", function () {
        mainScreen.style.display = "block"; // 화면을 보이게 함
        iframe.src = "index.html";
    });
});

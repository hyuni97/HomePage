const openPopupButton = document.querySelector("#openPopupButton");
const backTap = document.querySelector(".backTap");
const openPopup = document.querySelector("#popup");

openPopupButton.addEventListener("click", function (event) {
    openPopup.classList.add("on");
});
backTap.addEventListener("click", function (event) {
    openPopup.classList.remove("on");
});
window.addEventListener("popstate", function (event) {
    // 뒤로가기 버튼을 눌렀을 때 팝업만 닫기
    if (popup.style.display === "block") {
        popup.style.display = "none";
        event.preventDefault(); // 기본 브라우저 뒤로가기 동작 취소
    }
});

// 개인정보 관련
const privacyButton = document.getElementById("privacy");
const popupOverlay = document.getElementById("popupOverlay");
const backButton = document.getElementById("close-popup");

privacyButton.addEventListener("click", () => {
    popupOverlay.style.display = "flex";
});

backButton.addEventListener("click", () => {
    popupOverlay.style.display = "none";
});

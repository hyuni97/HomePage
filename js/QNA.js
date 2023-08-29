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
    if (openPopup.classList.contains("on")) {
        openPopup.classList.remove("on");
        // 이벤트를 중지하여 기본 뒤로 가기 동작을 방지합니다.
        event.preventDefault();
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

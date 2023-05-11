const message = document.getElementById("js-message");
const info = document.getElementById("js-info");

const openModal = document.getElementById("modal");
const closes = document.getElementsByClassName("modal-close-btn");
const notis = document.getElementsByClassName("noti");
const messageSubtitle = document.getElementById("message-subtitle");

const messageBox = document.getElementById("message-box");
const infoBox = document.getElementById("info-box");


message.addEventListener("click", () => {
    openModal.style.display = "flex";
    messageSubtitle.classList.remove("ml-7");
    messageBox.style.display = "flex";
    infoBox.style.display = "none";

    for (var noti of notis) noti.style.display = "none";
});

info.addEventListener("click", () => {
    openModal.style.display = "flex";
    infoBox.style.display = "flex";
    messageBox.style.display = "none";
});

for (var close of closes) {
    close.addEventListener("click", () => {
        openModal.style.display = "none";
    });
}
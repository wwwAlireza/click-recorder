import { controlBtn, recordTime } from "./select.js";

const changeIcon = {
    start: () => {
        controlBtn.play.querySelector(".playIcon").classList.add("d-none");
        controlBtn.play.querySelector(".stopPlayIcon").classList.remove("d-none");
    },
    stop: () => {
        controlBtn.play.querySelector(".playIcon").classList.remove("d-none");
        controlBtn.play.querySelector(".stopPlayIcon").classList.add("d-none");
    }
}

let pointCounter = setTimeout(() => { }, 0)
const displayClickedPoints = () => {
    let len = 0;
    pointCounter = setInterval(() => {
        if (len != clickedPoints.length) {
            addPoint(clickedPoints[len]);
            len++;
        }
        else {
            clearInterval(pointCounter);
            stopPlay();
            playStatus = false;
        }
    }, 500);
}

const colors = ["#0d6efd", "#6f42c1", "#d63384", "#fd7e14", "#ffc107", "#198754", "#dc3545", "#0dcaf0"];
let lastColor;
const getRandomColor = () => {
    let randomNum = Math.floor(Math.random() * (7 - 0 + 1)) + 0;
    let selectedColor = colors[randomNum];
    if (selectedColor == lastColor) {
        getRandomColor();
    }
    else {
        lastColor = selectedColor
        return selectedColor;
    }
}

const addPoint = data => {
    let div = document.createElement("div");
    div.classList.add("clickPoint");
    div.innerText = data.index;
    div.style.left = `${data.x - 15}px`;
    div.style.top = `${data.y - 15}px`;
    div.style.backgroundColor = getRandomColor() || "#fd7e14";
    if (data.index > 99) {
        div.style.width = `36px`;
        div.style.height = `36px`;
        div.style.left = `${data.x - 18}px`;
        div.style.top = `${data.y - 18}px`;
    }
    document.body.appendChild(div);
}

const startPlay = () => {
    changeIcon.start();
    controlBtn.record.classList.add("hide");
    controlBtn.play.classList.add("right-25");
    displayClickedPoints()
};

const stopPlay = () => {
    changeIcon.stop();
    controlBtn.record.classList.remove("hide");
    controlBtn.play.classList.remove("right-25");
    clearInterval(pointCounter);
};

export { startPlay, stopPlay }
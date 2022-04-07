import { controlBtn, recordTime, recordAlert } from "./select.js";

const changeIcon = {
    start: () => {
        controlBtn.record.querySelector(".recordIcon").classList.add("d-none");
        controlBtn.record.querySelector(".stopRecordIcon").classList.remove("d-none");
    },
    stop: () => {
        controlBtn.record.querySelector(".recordIcon").classList.remove("d-none");
        controlBtn.record.querySelector(".stopRecordIcon").classList.add("d-none");
    }
}

let timeCounter = setInterval(() => { }, 0);
const timer = {
    start: () => {
        timeCounter = setInterval(() => {
            if (t_millisecond != 60) {
                ++t_millisecond;
                recordTime.millisecond.innerText = String(t_millisecond).length == 1 ? `0${t_millisecond}` : t_millisecond;
            } else if (t_second != 60) {
                t_millisecond = 0;
                ++t_second;
                recordTime.second.innerText = String(t_second).length == 1 ? `0${t_second}` : t_second;
            }
            else if (t_minute != 60) {
                t_second = 0;
                ++t_minute
                recordTime.minute.innerText = String(t_minute).length == 1 ? `0${t_minute}` : t_minute;
            }
            else {
                timer.stop();
                alert("Over Recording !!!!!");
                stopRecord();
                recordStatus = false;
            }
        }, 1);
    },

    stop: () => {
        clearInterval(timeCounter);
    }
}

let clickIndex = 0;
const clickRecorder = (data) => {
    clickedPoints.push({
        x: data.pageX,
        y: data.pageY,
        index: ++clickIndex
    });
}

const resetTimer = () => {
    recordTime.minute.innerText = "00";
    recordTime.second.innerText = "00";
    recordTime.millisecond.innerText = "00";
    t_minute = 0;
    t_second = 0;
    t_millisecond = 0;
}

const startRecord = () => {
    changeIcon.start();
    controlBtn.play.classList.add("hide");
    controlBtn.record.classList.add("left-25");
    recordTime.container.classList.remove("d-none");
    recordAlert.classList.remove("d-none");
    resetTimer();
    clickIndex = 0;
    clickedPoints = [];
    timer.start();
    setTimeout(() => {
        document.body.addEventListener("click", clickRecorder);
    }, 100)
};

const stopRecord = () => {
    changeIcon.stop();
    controlBtn.play.classList.remove("hide");
    controlBtn.record.classList.remove("left-25");
    recordTime.container.classList.add("d-none");
    recordAlert.classList.add("d-none");
    document.body.removeEventListener("click", clickRecorder);
    timer.stop();
};

export { startRecord, stopRecord };
import { controlBtn } from "./select.js";
import { startRecord, stopRecord } from "./record.js";
import { startPlay, stopPlay } from "./play.js";

const deletePoints = () => {
    let points = document.querySelectorAll(".clickPoint");
    for (let point of points) {
        point.remove();
    }
}

const checkRecordStatus = () => {
    deletePoints();
    if (playStatus) {
        stopPlay();
        playStatus = false;
    }
    if (recordStatus) {
        recordStatus = false;
        stopRecord();
    } else {
        recordStatus = true;
        startRecord();
    }
};

const checkPlayStatus = () => {
    if (recordStatus) {
        stopRecord();
        recordStatus = false;
    }
    if (playStatus) {
        stopPlay();
        playStatus = false;
    } else if (clickedPoints.length != 0) {
        deletePoints();
        startPlay();
        playStatus = true;
    }
}

controlBtn.record.addEventListener("click", checkRecordStatus);
controlBtn.play.addEventListener("click", checkPlayStatus);
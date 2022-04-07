const $ = query => document.querySelector(query);
const $$ = query => document.querySelectorAll(query);

const root = $(":root");

const controlBtn = {
    record: $("#recordButton"),
    play: $("#playButton"),
};

const recordTime = {
    container: $(".recordTime"),
    minute: $(".recordTime .minute"),
    second: $(".recordTime .second"),
    millisecond: $(".recordTime .millisecond"),
}

const recordAlert = $(".recordAlert")


export { controlBtn, recordTime, recordAlert, root };
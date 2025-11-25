let startTime;
let timeoutHandle;
let delay = 0;
let waitgreen = false;
const area = document.getElementById("area");
const display = document.getElementById("display");
const result = document.getElementById('result');
function preparetest(){
    waitgreen = true;
    area.style.backgroundColor = 'red';
    display.textContent = 'chờ xanh lá...';
    result.textContent = 'Đang chờ...';

    delay = Math.random() * 1500 + 1500;

    timeoutHandle = setTimeout(startTimer, delay);
    area.onclick = handleclick;
}
function handleclick(){
    if(waitgreen){
        earlyclick();
    }
    else if(area.style.backgroundColor === 'green'){
        endTimer();
    }else{
        preparetest();
    }
}
function endTimer(){
    const reactionTime = new Date().getTime() - startTime;

    display.textContent = 'Thời gian phản ứng';
    result.textContent = `${reactionTime} ms`;
    area.style.backgroundColor = "darkgreen";

    setTimeout(startRound, 1500);
}
function earlyclick(){
    clearTimeout(timeoutHandle);
    area.style.backgroundColor = 'darkred';
    display.textContent = "thua";
    result.textContent = "thời gian";

    setTimeout(startRound, 1500);
}
function startRound(){
    waitgreen = false;
    area.style.backgroundColor = 'blue';
    display.textContent = 'Bấm vào màn hình để bắt đầu';
    result.textContent = 'Time --';


    area.onclick = handleclick;
}
function startTimer(){
    waitgreen = false;
    startTime = new Date().getTime();
    area.style.backgroundColor = 'green';
    display.textContent = 'BẤM NGAY!';

    area.onclick = handleclick;
}
startRound();
let timerDisplay = document.querySelector('.timerDisplay');
let stopbtn = document.getElementById('stopbtn');
let startbtn = document.getElementById('startbtn');
let resetbtn = document.getElementById('resetbtn');

let msec = 0o0;
let secs = 0o0;
let mins = 0o0;

let timerId = null;

startbtn.addEventListener('click', function(){
   if(timerId !==null){
     clearInterval(timerId);
   }
    timerId=setInterval(startTimer,10)
});

stopbtn.addEventListener('click' , function(){
   clearInterval(timerId);
});

resetbtn.addEventListener('click', function(){
    clearInterval(timerId);
    timerDisplay.innerHTML='00 : 00 : 00';
});
function startTimer(){
    msec++;
    if(msec == 100){
        msec = 0;
        secs++;
        if(secs == 60){
            secs = 0;
            mins++;
        }
    }

    let msecString = msec < 10 ? '0${msec}' : msec;
    let secsString = msec < 10 ? '0${secs}' : secs;
    let minsString = msec < 10 ? '0${mins}' : mins;

    timerDisplay.innerHTML='${minsSrting} : ${secsString}: ${msecString}';
    
}

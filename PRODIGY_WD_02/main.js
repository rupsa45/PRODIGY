const timeDisplay=document.querySelector("#timeDisplay")
const startBtn=document.querySelector("#startBtn")
const stopBtn=document.querySelector("#stopBtn")
const resetBtn=document.querySelector("#resettBtn")

let startTime=0;
let elapsedTime=0;
let currentTime=0;
let paused=true;
let intervalId;
let hrs=0;
let min=0;
let secs=0;

startBtn.addEventListener("click",()=>{
    if(paused){
        paused=false;
        startTime=Date.now()-elapsedTime;
        intervalId=setInterval(update,75)

    }
});
stopBtn.addEventListener("click",()=>{
    if(!paused)
    {
        paused=true;
        elapsedTime=Date.now() -startTime;
        clearInterval(intervalId)
    }
});
resetBtn.addEventListener("click",()=>{
    paused=true;
    elapsedTime=0;
    startTime=0;
    currentTime=0;
    hrs=0;
    min=0;
    secs=0
    timeDisplay.textContent="00:00:00"
});
function update(){
     elapsedTime=Date.now()-startTime;
    
     secs=Math.floor((elapsedTime / 1000)%60);
     min=Math.floor((elapsedTime/ (1000*60)) % 60);
     hrs=Math.floor((elapsedTime/(1000*60*60))%60);

     secs=pad(secs);
     min=pad(min);
     hrs=pad(hrs);

     timeDisplay.textContent=`${hrs}:${min}:${secs}`
     function pad(unit){
        return (("0" + unit).length > 2 ? unit : "0"+ unit)
     }
}
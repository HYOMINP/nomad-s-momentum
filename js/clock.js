const clock = document.querySelector("#clock")


function showClock(){
    const newDate = new Date();
    const hours = String(newDate.getHours()).padStart(2, "0");
    const minutes = String(newDate.getMinutes()).padStart(2, "0");
    const seconds = String(newDate.getSeconds()).padStart(2, "0");
    clock.innerText = `${hours}:${minutes}:${seconds}`;
}

showClock();
setInterval(showClock, 1000);


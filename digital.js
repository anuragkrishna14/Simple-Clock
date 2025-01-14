function time(){

    let today = new Date();

    let hours = today.getHours() % 12;
    if(hours<10) hours = "0"+hours;
    let minutes = today.getMinutes();
    if(minutes<10) minutes = "0"+minutes;
    let seconds = today.getSeconds();
    if(seconds<10) seconds = "0"+seconds;
    let ampm = (today.getHours()>12)?"PM":"AM";

    document.querySelector(".hours .time").innerHTML = hours;
    document.querySelector(".minutes .time").innerHTML = minutes;
    document.querySelector(".seconds .time").innerHTML = seconds;
    document.querySelector(".am-pm .hand").innerHTML = ampm;
    
    setTimeout("time()", 1000);
}
time();

let analog = document.querySelector("#analog");
let digital = document.querySelector("#digital");

analog.addEventListener("click", () => {
    if(!analog.classList.contains("active")){
        digital.classList.remove("active");
        document.querySelector(".digital_clock").style.display = "none";
        analog.classList.add("active");
        document.querySelector(".analog_clock").style.display = "flex";
    }
});

digital.addEventListener("click", () => {
    if(!digital.classList.contains("active")){
        analog.classList.remove("active");
        document.querySelector(".analog_clock").style.display = "none";
        digital.classList.add("active");
        document.querySelector(".digital_clock").style.display = "flex";
    }
});

// ****************Analog***************** //
function timeAnalog(){

    let today = new Date();

    let hour = today.getHours()%12;
    let minute = today.getMinutes();
    let second = today.getSeconds();

    let sRotations = second;
    let mRotations = (minute*60)+second;
    let hRotations = (hour*60*60)+(minute*60)+second;


    document.querySelector(".second").style.rotate = (sRotations*(360/60))+"deg";
    document.querySelector(".minute").style.rotate = (mRotations*(360/(60*60)))+"deg";
    document.querySelector(".hour").style.rotate = (hRotations*(360/(12*60*60)))+"deg";
    
    // setTimeout("timeAnalog()", 1000);
}
setInterval(timeAnalog, 1000)
// timeAnalog();


// ****************Digital***************** //
function timeDigital(){

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
    
    setTimeout("timeDigital()", 1000);
}
timeDigital();




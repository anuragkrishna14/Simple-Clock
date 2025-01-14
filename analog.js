
function time(){

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
    
    // setTimeout("time()", 1000);
}
setInterval(time, 1000)
// time();

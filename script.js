
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




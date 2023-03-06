const hour = document.getElementById("hours");
const minute = document.getElementById("minutes");
const second = document.getElementById("seconds");
const ampm = document.getElementById("ampm");


function updateclock() {

    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();

    if (h > 12) {
        h = h - 12
        ampm.innerText = "PM";
    }else{
        ampm.innerText="AM"
    }
    h = (h < 10 ? "0":"")+ h;
    m = (m < 10 ? "0" :"")+ m;
    s = (s < 10 ? "0":"")+ s;
    hour.innerText = h;
    minute.innerText = m;
    second.innerText = s;
    ampm, (innerText = ampm)

}

setInterval(updateclock,1000);
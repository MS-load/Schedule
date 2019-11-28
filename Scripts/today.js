window.addEventListener('load', loadSite)

function loadSite() {

    const d = new Date();
    console.log(d)
    document.querySelector(".year").innerHTML = d.getFullYear();

    //change 0-11 to January-December
    document.querySelector(".month").innerHTML = d.getMonth();

    document.querySelector(".day").innerHTML = d.getDate();

   

    //change 0-6 to Monday-Sunday
    document.querySelector(".weekday").innerHTML = d.getDay();

    setInterval(getTime, 10000)

}

function getTime() {
    const d = new Date();
 //change 0-9 to 00-09
 document.querySelector(".hour").innerHTML = d.getHours() + " :";

 //change 0-9 to 00-09
 document.querySelector(".minute").innerHTML = d.getMinutes() + " :";

 //change 0-9 to 00-09
 document.querySelector(".second").innerHTML = d.getSeconds();
}
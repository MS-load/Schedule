//TODO
//setinterval för att få tiden att uppdateras.
//create element i javascript istället för i html


window.addEventListener( 'load', loadSite)

function loadSite() {

    const d = new Date();
    document.querySelector(".year").innerHTML = d.getFullYear();

    getMonthName();

    document.querySelector(".day").innerHTML = d.getDate();

    //change 0-9 to 00-09
    document.querySelector(".hour").innerHTML = d.getHours() +" :";

    //change 0-9 to 00-09
    document.querySelector(".minute").innerHTML = d.getMinutes();

    getWeekdayName();
}


/**
 * changes 0-11 to january-febuary
 */
function getMonthName() {
    const d = new Date();
    const month = new Array(11);
    month[0] = "January";
    month[1] = "February";
    month[2] = "March";
    month[3] = "April";
    month[4] = "May";
    month[5] = "June";
    month[6] = "July";
    month[7] = "August";
    month[8] = "September";
    month[9] = "October";
    month[10] = "November";
    month[11] = "December";
   
    const n = month[d.getMonth()];
    document.querySelector(".month").innerHTML = n;
  }


/**
 * changes 0-6 to monday-sunday
 */
function getWeekdayName() {
    const d = new Date();
    const weekday = new Array(7);
    weekday[0] = "Sunday";
    weekday[1] = "Monday";
    weekday[2] = "Tuesday";
    weekday[3] = "Wednesday";
    weekday[4] = "Thursday";
    weekday[5] = "Friday";
    weekday[6] = "Saturday";
  
    const n = weekday[d.getDay()];
    document.querySelector(".weekday").innerHTML = n;
  }

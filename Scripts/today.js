window.addEventListener('load', loadSite)

function loadSite() {
    getTimeNow()
}


function getTimeNow() {

    const d = new Date();
    const dateContainer = document.getElementsByClassName("date")[0]
    const weekdayContainer = document.getElementsByClassName("weekday")[0]
    const timeContainer = document.getElementsByClassName("time")[0]


    /**
     * changes 0-6 to Sunday-Saturday
     */
    const weekday = new Array(7);
    weekday[0] = "Sunday";
    weekday[1] = "Monday";
    weekday[2] = "Tuesday";
    weekday[3] = "Wednesday";
    weekday[4] = "Thursday";
    weekday[5] = "Friday";
    weekday[6] = "Saturday";
    const weekdayName = weekday[d.getDay()];

    /**
     * changes 0-11 to january-febuary
     */
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
    const monthName = month[d.getMonth()];


    setInterval(() => {
        d.setSeconds(d.getSeconds() + 1)

        dateContainer.innerHTML = d.getDate() + " " + monthName + " " + d.getFullYear();
        weekdayContainer.innerHTML = weekdayName;
        timeContainer.innerHTML = d.getHours() + ":" + (d.getMinutes() < 10 ? '0' : '') + d.getMinutes() + ":" + (d.getSeconds() < 10 ? '0' : '') + d.getSeconds();
    }, 1000);
}

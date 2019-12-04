
window.addEventListener('load', loadSite)

function loadSite() {
    getTimeNow()
}


function getTimeNow() {

    const d = new Date()
    console.log(d)
    const dateContainer = document.getElementsByClassName("date")[0]
    const weekdayContainer = document.getElementsByClassName("weekday")[0]
    const timeContainer = document.getElementsByClassName("time")[0]


    /**
     * changes 0-6 to Sunday-Saturday
     */
    const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

    const weekdayName = weekday[d.getDay()];

    /**
     * changes 0-11 to january-february
     */
    const month = ["January", "February", "March", "April", "May", "June", "July",
        "August", "September", "October", "November", "December"]

    const monthName = month[d.getMonth()]


    setInterval(() => {
        d.setSeconds(d.getSeconds() + 1)

        dateContainer.innerHTML = d.getDate() + " " + monthName + " " + d.getFullYear();
        weekdayContainer.innerHTML = weekdayName;
        timeContainer.innerHTML = d.getHours() + ":" + (d.getMinutes() < 10 ? '0' : '') + d.getMinutes() + ":" + (d.getSeconds() < 10 ? '0' : '') + d.getSeconds();
    }, 1000)
}

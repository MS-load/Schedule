window.addEventListener('load', loadSite)

function loadSite() {
    getTimeNow()
}


/**
 * Publish the current date, month and time
 */ 
function getTimeNow() {

    const d = new Date()
    const dateContainer = document.getElementsByClassName("date")[0]
    const weekdayContainer = document.getElementsByClassName("weekday")[0]
    const timeContainer = document.getElementsByClassName("time")[0]

    /**
     * @type Array of the days
     */
    const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    const weekdayName = weekday[d.getDay()]

    /**
     * @type Array of the months
     */
    const month = ["January", "February", "March", "April", "May", "June", "July",
        "August", "September", "October", "November", "December"]
    const monthName = month[d.getMonth()]

//TODO. change or use the => on the rest of the code
 /**
  * 
  *  */   
setInterval(() => {
        d.setSeconds(d.getSeconds() + 1)

        dateContainer.innerHTML = d.getDate() + " " + monthName + " " + d.getFullYear()
        weekdayContainer.innerHTML = weekdayName
        timeContainer.innerHTML = d.getHours() + ":" + (d.getMinutes() < 10 ? '0' : '') + d.getMinutes() + ":" + (d.getSeconds() < 10 ? '0' : '') + d.getSeconds()
    }, 1000)
}

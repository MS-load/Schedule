
window.addEventListener('load', loadSite)

function loadSite() {
    uppdateCurrentTime()
    console.log(new Date())
}


/**
 * Publish the current date, month and time
 * 
 */
function uppdateCurrentTime() {
    const dateContainer = document.getElementsByClassName("date")[0]
    const weekdayContainer = document.getElementsByClassName("weekday")[0]
    const timeContainer = document.getElementsByClassName("time")[0]


    setInterval(function () {
        const date = new Date()
        const monthName = getMonthName(date)
        const weekdayName = getWeekdayName(date)

        dateContainer.innerHTML = date.getDate() + " " + monthName + " " + date.getFullYear()
        weekdayContainer.innerHTML = weekdayName
        timeContainer.innerHTML = date.getHours() + ":" + (date.getMinutes() < 10 ? '0' : '') + date.getMinutes() + ":" + (date.getSeconds() < 10 ? '0' : '') + date.getSeconds()
    }, 1000)
}


/**
 * @param {string} date -returns the name of the current month
 * 
 */
function getMonthName(date) {
    const month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    return month[date.getMonth()]
}


/**
 * @param {string} date -returns the name of the current weekday
 * 
 */
function getWeekdayName(date) {
    const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    return weekday[date.getDay()]
}

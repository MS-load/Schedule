
window.addEventListener('load', loadSite)

function loadSite() {
    uppdateCurrentTime()
    changeIcon()
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
 * Change the icon source depending on current month
 * 
 */
function changeIcon() {
const date = new Date()    
const Month = date.getMonth()
let src
    if (Month === 0) {
    src = "./media/0.svg"
} else if (Month === 1) {
    src = "./media/1.svg"
} else if (Month === 2) {
    src = "./media/2.svg"
} else if (Month === 3) {
    src = "./media/3.svg"
} else if (Month === 4) {
    src = "./media/4.svg"
} else if (Month === 5) {
    src = "./media/5.svg"
} else if (Month === 6) {
    src = "./media/6.svg"
} else if (Month === 7) {
    src = "./media/7.svg"
} else if (Month === 8) {
    src = "./media/8.svg"
} else if (Month === 9) {
    src = "./media/9.svg"
} else if (Month === 10) {
    src = "./media/10.svg"
} else if (Month === 11) {
    src = "./media/11.svg"
}

document.getElementsByClassName("season-icon")[0].src=src
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

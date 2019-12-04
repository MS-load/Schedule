const date = new Date()
window.addEventListener("load", loadPage)

/**
 * 
 * Runs on page load
 */
function loadPage() {
    initCalendarMonth()
    setupEventListeners()
}

/**
 * Starts to write the calendar for this month
 */
function initCalendarMonth() {
    const dateContainer = document.getElementById("dateContainer")
    
    updateMonthName(date)
    getCorrectFirstDay(dateContainer, date)
    getNrOfDaysInMonth(dateContainer, date)
}

/**
 * Writes the calendar for next month 
 */
function onNextClicked() {
    clearDivs()
    date.setMonth(date.getMonth() + 1)
    initCalendarMonth()
}

/**
 * Writes the calendar for previous month
 */
function onPreviousClicked() {
    clearDivs()
    date.setMonth(date.getMonth() - 1)
    initCalendarMonth()
}

/**
 * When buttons are clicked functions are runned to rewrite calendar for new month
 * @param {mouseEvent}
 */
function setupEventListeners() {
    document.getElementById("previous-button").addEventListener("click", onPreviousClicked)
    document.getElementById("next-button").addEventListener("click", onNextClicked)
}



/**
 * Clears the calendar ready to be rewritten when buttons are clicked
 */
function clearDivs() {
    document.getElementById("dateContainer").innerHTML = " ";
}


/**
 * Makes the calender start on correct weekday
 * @param {HTMLDivElement} dateContainer 
 * @param {String} date is the date required
 */
function getCorrectFirstDay(dateContainer, date) {
    const dayInWeek = new Date(date.getFullYear(), date.getMonth(), 0).getDay()
    console.log(dayInWeek)
    /**
     * Gives the correct day on first day of month
     */
    for (let i = 0; i < dayInWeek; i++) {
        let emptyBox = document.createElement("div")
        dateContainer.appendChild(emptyBox)
    }
}

/**
 * Populate the dates
 * @param {HTMLDivElement} dateContainer
 * @param {String} date is the date required
 */
function getNrOfDaysInMonth(dateContainer, date) {
    const numberOfDaysInMonth = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate()

    for (let i = 1; i <= numberOfDaysInMonth; i++) {
        let dateBox = document.createElement("div")
        dateBox.innerText = i
        dateContainer.appendChild(dateBox)


        const month = (date.getMonth() + 1)
        const year = (date.getFullYear())

        let searchTaskDate = (year + "-" + String(month).padStart(2, '0') + "-" + (String(i).padStart(2, '0')))
        getTaskCountPerDay(searchTaskDate, dateBox)
    }
}

/**
 * Gets the month name and year
 * @param {String} date is the date required
 */
function updateMonthName(date) {
    const month = ["January", "February", "March", "April", "May", "June", "July",
        "August", "September", "October", "November", "December"]
    
    const monthName = month[date.getMonth()]
            document.getElementById("calendar").innerText = monthName + ' ' + date.getFullYear()
}

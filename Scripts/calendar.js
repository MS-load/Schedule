window.addEventListener('load', loadPage)

/**
 * 
 * Runs on page load
 */
function loadPage() {
    const dateContainer = document.getElementById("dateContainer")
    const d = new Date()
    getMonthName(d)
    getCorrectFirstDay(dateContainer, d)
    getNrOfDaysInMonth(dateContainer, d)

}

/**
 * Makes the calender start on correct weekday
 * @param {HTMLDivElement} dateContainer 
 * @param {String} d is the date required
 */
function getCorrectFirstDay(dateContainer, d) {
    const dayInWeek = new Date(d.getFullYear(), d.getMonth(), 0).getDay()
    console.log(dayInWeek)
    /**
     * Gives the correct day on first day of month
     */
    for (let i = 0; i < dayInWeek; i++) {
        let emptyBox = document.createElement("div")
        emptyBox.innerText = " "
        dateContainer.appendChild(emptyBox)
    }
}

/**
 * Populate the dates
 * @param {HTMLDivElement} dateContainer
 * @param {String} d is the date required
 */
function getNrOfDaysInMonth(dateContainer, d) {
    const numberOfDaysInMonth = new Date(d.getFullYear(), d.getMonth() + 1, 0).getDate()
    console.log(numberOfDaysInMonth)

    /**
     * Creates divs to print out all days in month in
     */
    for (let i = 1; i <= numberOfDaysInMonth; i++) {
        let dateBox = document.createElement("div")
        dateBox.innerText = i
        dateContainer.appendChild(dateBox)
        // taskCount = document.createElement("p")
        // taskCount.innerHTML = getTaskCountPerDay()
        // dateBox.appendChild(taskCount)
    }
}

/**
 * Gets the month name
 * @param {String} d is the date required
 */
function getMonthName(d) {
    const month = ["January", "February", "March", "April", "May", "June", "July",
        "August", "September", "October", "November", "December"]

    const monthName = month[d.getMonth()]
    document.getElementById("calendar").innerText = monthName + ' ' + d.getFullYear()
}


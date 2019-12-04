
window.addEventListener('load', loadSite)

function loadSite() {
    let dateContainer = document.getElementById("dateContainer")
    const date = new Date()
    getMonthName(date)
    getCorrectFirstDay(dateContainer, date)
    renderDates(dateContainer, date)
}



/**
 * Makes the calender start on correct weekday
 * @param {HTMLDivElement} dateContainer 
 * @param {String} date is the date required
 */
function getCorrectFirstDay(dateContainer, date) {
    const dayInWeek = new Date(date.getFullYear(), date.getMonth(), 0).getDay()

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
function renderDates(dateContainer, date) {
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
 * Gets the month name
 * @param {String} date is the date required
 */
function getMonthName(date) {
    const month = ["January", "February", "March", "April", "May", "June", "July",
        "August", "September", "October", "November", "December"]

    const monthName = month[date.getMonth()]
    document.getElementById("calendar").innerText = monthName + ' ' + date.getFullYear()
}


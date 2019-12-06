const date = new Date()
let clicked = null
window.addEventListener("load", loadPage)

/**
 * Runs on page load
 */
function loadPage() {
    initCalendarMonth()
    setupEventListeners()
    filterTasks()
    
}

/**
 * Starts to write the calendar for this month
 */
function initCalendarMonth() {
    const dateContainer = document.getElementById("dateContainer")
    clearDivs()
    updateMonthName(date)
    getCorrectFirstDay(dateContainer, date)
    renderDatesOfMonth(dateContainer, date)
}

/**
 * Writes the calendar for next month 
 */
function onNextClicked() {
    date.setMonth(date.getMonth() + 1)
    initCalendarMonth()
}

/**
 * Writes the calendar for previous month
 */
function onPreviousClicked() {
    date.setMonth(date.getMonth() - 1)
    initCalendarMonth()
}

/**
 * When buttons are clicked functions are run to rewrite calendar for new month
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
 * Gives the day on which the month begins
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
function renderDatesOfMonth(dateContainer, date) {

    const numberOfDaysInMonth = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate()
    const month = (date.getMonth() + 1)
    const year = (date.getFullYear())

    for (let i = 1; i <= numberOfDaysInMonth; i++) {
        const dateBox = document.createElement("div")
        dateBox.innerText = i
        const searchDate = (year + "-" + String(month).padStart(2, '0') + "-" + (String(i).padStart(2, '0')))


        dateBox.setAttribute("data-date", searchDate)
        dateContainer.appendChild(dateBox)

        TaskCount = document.createElement("p")
        dateBox.appendChild(TaskCount)
        TaskCount.innerText = getTaskCountPerDay(searchDate)
    }
    holidaysForCurrentMonth(year, month)
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

/**
 * Gets teh holidays for the required month and year
 * @param {Number} year 
 * @param {Number} month 
 */
function holidaysForCurrentMonth(year, month) {

    $.ajax({
        url: "http://api.dryg.net/dagar/v2.1/" + year + "/" + month,
        type: "GET",
        dataType: "jsonp",
    }).then(function (data) {
        renderHolidays(data.dagar)
    }).catch(function (response) {
        console.error(response.statusText)
    })
}

/**
 * Renders the holidays Red
 * @param {Array} allDays an array of all the dates in the specified month
 */
function renderHolidays(allDays) {
    const holidays = []
    for (const day of allDays) {
        if (day["röd dag"] === "Ja") {
            holidays.push(day.datum)
        }
    }
    for (let i = 0; i < holidays.length; i++) {
        let redDays = $("[data-date='" + holidays[i] + "']")
        $(redDays).css({ "color": "red" })
    }
}

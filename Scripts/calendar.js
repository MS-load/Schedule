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


function initCalendarMonth() {
    const dateContainer = document.getElementById("dateContainer")
    
    updateMonthName(date)
    getCorrectFirstDay(dateContainer, date)
    getNrOfDaysInMonth(dateContainer, date)
}

function onNextClicked() {
    clearDivs()
    date.setMonth(date.getMonth() + 1)
    initCalendarMonth()
}

function onPreviousClicked() {
    clearDivs()
    date.setMonth(date.getMonth() - 1)
    initCalendarMonth()
}

function setupEventListeners() {
    document.getElementById("previous-button").addEventListener("click", onPreviousClicked)
    document.getElementById("next-button").addEventListener("click", onNextClicked)
}

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
        emptyBox.innerText = " "
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
    console.log(numberOfDaysInMonth)

    /**
     * Creates divs to print out all days in month in
     */
    for (let i = 1; i <= numberOfDaysInMonth; i++) {
        let dateBox = document.createElement("div")
        dateBox.innerText = i
        dateContainer.appendChild(dateBox)
        
    
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

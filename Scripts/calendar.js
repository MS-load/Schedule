window.addEventListener('load', loadPage)

/**
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

    for (let i = 0; i < dayInWeek; i++) {
        let emptyBox = document.createElement("div")
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
    const month = (d.getMonth() + 1)
    const year = (d.getFullYear()) 

    for (let i = 1; i <= numberOfDaysInMonth; i++) {
        let dateBox = document.createElement("div")
        dateBox.className = "Date"
        dateBox.innerText = i
        dateContainer.appendChild(dateBox)
        TaskCount = document.createElement("p")
        dateBox.appendChild(TaskCount)

        let searchTaskDate = (year + "-" + String(month).padStart(2, '0') + "-" + (String(i).padStart(2, '0')))
        TaskCount.innerText = getTaskCountPerDay(searchTaskDate)
        
        console.log(typeof searchTaskDate)

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

function displayedMonth() {

}

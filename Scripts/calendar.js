<<<<<<< HEAD


function loadPage() {
    getMonthName()
}



const currentDate = new Date()

document.getElementById("calendar").innerHTML = currentDate.getMonth() + 1

const numberOfDaysInMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate()

console.log(numberOfDaysInMonth)

const dateContainer = document.getElementById("dateContainer")
const dayInWeek = new Date(currentDate.getFullYear(), currentDate.getMonth(), 0).getDay()


console.log(dayInWeek)
=======
window.addEventListener('load', loadPage)
>>>>>>> refs/heads/master

/**
 * 
 * Runs on page load
 */
<<<<<<< HEAD
for (i = 0; i < dayInWeek; i++) {
    console.log(i)
    let empty = document.createElement('div')
    empty.innerText = " "
    dateContainer.appendChild(empty)
}

/**
 * Creates div to print out all days in month in
=======
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
>>>>>>> refs/heads/master
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


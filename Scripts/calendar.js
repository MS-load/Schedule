

function loadPage() {
    getMonthName()
}



const currentDate = new Date()

document.getElementById("calendar").innerHTML = currentDate.getMonth() + 1

const numberOfDaysInMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate()

console.log(numberOfDaysInMonth)

const dateContainer = document.getElementById("dateContainer")
const dayInWeek = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1).getDay()


console.log(dayInWeek)

/**
 * Gives the correct day on first day of month
 */
for (let i = 1; i < dayInWeek; i++) {
    let dateBox = document.createElement("div")

    dateBox.classlist = 'days'
    dateContainer.appendChild(dateBox)


}

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



/**
 * Writes month name in h2 title instead of just a number
 */
function getMonthName() {
    const d = new Date()
    const month = ["January", "February", "March", "April", "May", "June", "July",
    "August", "September", "October", "November", "December"]

    const n = month[d.getMonth()]
    document.getElementById("calendar").innerText = n
}


loadPage()


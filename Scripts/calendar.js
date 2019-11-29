

function loadPage() {
     getMonthName()
}



const currentDate = new Date()
document.getElementById("calendar").innerHTML = currentDate.getMonth() + 1;
let numberOfDaysInMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate()

console.log(numberOfDaysInMonth)

let dateContainer = document.getElementById("dateContainer")
let dayInWeek = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1).getDay()


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

 

}



/**
 * Writes month name in h2 title instead of just a number
 */
function getMonthName() {
    console.log('hej')
    const d = new Date();
    const month = new Array(11);
    month[0] = "January";
    month[1] = "February";
    month[2] = "March";
    month[3] = "April";
    month[4] = "May";
    month[5] = "June";
    month[6] = "July";
    month[7] = "August";
    month[8] = "September";
    month[9] = "October";
    month[10] = "November";
    month[11] = "December";
    
    const n = month[d.getMonth()];
    document.getElementById("calendar").innerText = n;
    }

    loadPage()


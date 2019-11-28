<<<<<<< HEAD
/**
 * @param {int} The month number, 0 based
 * @param {int} The year, not zero based, required to account for leap years
 * @return {Date[]} List with date objects for each day of the month
 */
// function getDaysInMonth(month, year) {
//     const date = new Date(year, month, 1)
//     console.log(date)
//     const days = []
//     console.log(days)
//     while (date.getMonth() === month) {
//        days.push(new Date(date));
//        date.setDate(date.getDate() + 1);
//     }
//     // return console.log(days)
// }

// getDaysInMonth(4, 1989)
=======


const currentDate = new Date()
document.getElementById("calendar").innerHTML = currentDate.getMonth() + 1;
let numberOfDaysInMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 0).getDate()

console.log(numberOfDaysInMonth)

let dateContainer = document.getElementById("dateContainer")

for (let i = 1; i <= numberOfDaysInMonth; i++) {
    console.log("add box")
    let dateBox = document.createElement("div")
    dateBox.innerText = i
    dateContainer.appendChild(dateBox)
}


>>>>>>> 909b95388aa9b89df440818583c14540616a3dec

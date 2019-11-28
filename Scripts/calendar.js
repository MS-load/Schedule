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
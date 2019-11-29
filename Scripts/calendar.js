

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


for (let i = 1; i < dayInWeek; i++) {
    let dateBox = document.createElement("div")
    
    dateBox.classlist = 'days'
    dateContainer.appendChild(dateBox)
 

}

for (let i = 1; i <= numberOfDaysInMonth; i++) {
    let dateBox = document.createElement("div")
    dateBox.innerText = i
    dateContainer.appendChild(dateBox)

 

}




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


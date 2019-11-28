

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



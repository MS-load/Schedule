function renderCalendar(year, month) {
    let startMonth = newDate(year, month).getDay()
    let totalDays = 32 - (newDate(year, month, 32).getDay())
    let showMonth = document.getElementById("month")
    let showYear = document.getElementById("year")

    showMonth.textContent = months['${month}']
    showYear.textContent = year

    let showNumber = 1
    let tableBody = document.getElementById("table-body")

}

renderCalendar(2019, 11)
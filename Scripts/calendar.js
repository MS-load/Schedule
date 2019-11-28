/* window.addEventListener('load', loadPage) 


function loadPage () {
    displayCalendar()
} */

let body = document.getElementsByTagName('body')[0];

today = new Date();
currentMonth = today.getMonth();
currentYear = today.getFullYear();
selectYear = document.getElementById('year')
selectMonth = document.getElementById('month')

months = {
    0: 'Dec',
    1: 'Jan'
};



monthAndYear = document.getElementById('displaymonthandyear');
displayCalendar(currentMonth, currentYear);








function displayCalendar(month, year) {


    let firstDay = (new Date(year, month)).getDay();

    let date = 1;

    table = document.getElementById('calendar-full-body');

    table.innerHTML = '';
    monthAndYear.innerHTML = months[month] + '' + year;
    selectYear.value = year;
    selectMonth.value = month;
    
    
    
    for (let i = 0; i < 6; i++) {

    let row = document.createElement('tr');


    for (let j = 0; j < 7; j++) {
        if (i=== 0 && j < firstDay) {
            cell = document.createElement('td');
            cellText = document.createTextNode('');
            cell.appendChild(cellText);
            row.appendChild(cell);
        }

        else if (date > daysInMonth(month, year)) {
            break;
        }

        else {
            cell = document.createElement('td');
            cellText = document.createTextNode(date);
            cell.appendChild(cellText);
            row.appendChild(cell);
            date++;

        }
    }

    table.appendChild(row);
}

function daysInMonth(iMonth, iYear) {
    return 32 - new Date(iYear, iMonth, 32).getDate();
}

}
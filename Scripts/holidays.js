window.addEventListener("load", loadPage)

function loadPage() {
    listHolidaysFor2019()
}
function listHolidaysFor2019() {

    $.ajax({
        url: "http://api.dryg.net/dagar/v2.1/" + year + "/" + month,
        type: "GET",
        dataType: "jsonp",
    }).then(function (data) {
        printHolidays(data.dagar)
        console.log(data)

    }).catch(function (response) {
        console.error(response.statusText)
    })
}

function printHolidays(allDays) {
    for (const day of allDays) {
        if (day["röd dag"] === "Ja") {
            const holidays= [] 
            holidays.push(day.datum)
            console.log(holidays)
        }
    }



}


$(document).ready(function () {
    addEventListener()
    restoreTaskList()
})



function restoreTaskList() {
    let data = localStorage.getItem("task")
    if (data) {
        let restoreList = JSON.parse(data)
        console.log(restoreList)
        for (var i = 0; i < (restoreList.length); i++) {
            $("ul").append("<li>" + restoreList[i] + "</li>")
        }
    } else {
        restoreList = []
    }
}

function addEventListener() {
    $(":submit").click(addTask)
}

function addTask() {
    let task = $(":text").val()
    let taskDate = $("#taskDate").val() //Why cant I use type here ?
    let taskTime = $("#taskTime").val() // Why cant i use type here ?

    console.log(taskDate)
    console.log(taskTime)

    $("ul").append("<li>" + task + " " + taskTime + " " + taskDate + "</li>")

    const listOfTasks = []
    $("ul li").each(function () { listOfTasks.push($(this).text()) })

    console.log(listOfTasks)
    saveTaskToLS("task", listOfTasks)
    saveTaskToLS("task-time", taskTime)
    saveTaskToLS("task-date", taskDate)

    addPrefix()
    addSuffix()

    $(":text").val("")

}

function addPrefix() {

}

function addSuffix() {

}

function removeTask() {
    getTaskFromLS()
}


function saveTaskToLS(key, value) {
    localStorage.setItem(key, JSON.stringify(value))
}

function getTaskFromLS(key) {
    return console.log(JSON.parse(localStorage.getItem(key)) || [])
}

function clearTaskFromLS() {
    localStorage.clear()
}
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
    //imp:need to change the input to a form to be able to store multiple data!!
    let task = $(":text").val()
    let taskDate = $("#taskDate").val() //Why cant I use type here ?
    let taskTime = $("#taskTime").val() // Why cant i use type here

    console.log(taskDate)
    console.log(taskTime)

    $("ul").append("<li>" + task + " " + taskTime + " " + taskDate + "</li>")

    const listOfTasks = []
    $("ul li").each(function () { listOfTasks.push($(this).text()) })

    console.log(listOfTasks)
    saveTaskToLS(listOfTasks)

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


function saveTaskToLS(task) {
    localStorage.setItem('task', JSON.stringify(task))
}

function getTaskFromLS() {
    return console.log(JSON.parse(localStorage.getItem('task')) || [])
}

function clearTaskFromLS() {
    localStorage.clear()
}
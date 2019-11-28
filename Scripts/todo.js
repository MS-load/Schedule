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
    $("button").click(addTask)
}

function addTask() {
    //imp:need to change the input to a form to be able to store multiple data!!
    let task = $("#input").val()
    $("ul").append("<li>" + task + "</li>")

    const listOfTasks = []
    $("ul li").each(function () { listOfTasks.push($(this).text()) })

    console.log(listOfTasks)
    saveTaskToLS(listOfTasks)

    addPrefix()
    addSuffix()

    $("#input").val("")

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



$(document).ready(function () {
    addEventListener()
    restoreTaskList()
    removeTask()
})


function addEventListener() {
    $(":submit").click(getTask)
}

/**
 * Restores the existing task list from Local Storage
 */
function restoreTaskList() {
    let data = localStorage.getItem("task-details") // how to store as on object
    if (data) {
        let restoreList = JSON.parse(data)
        console.log(restoreList)
        for (var i = 0; i < (restoreList.length); i++) {
            $("ul").append("<li><input type='checkbox'>" + restoreList[i] + "</li>")
        }
    } else {
        restoreList = []
    }
}

function getTask() {

    const taskItemsArray = $("form").serializeArray()
    const taskItemsObj = {}

    $(taskItemsArray).each(function (i, field) {
        taskItemsObj[field.name] = field.value
    })

    const task = taskItemsObj.text
    const taskDate = taskItemsObj.date
    const taskTime = taskItemsObj.time

    showTask(task, taskDate, taskTime)

    const listOfTasks = []
    
    $("form").each(function () { listOfTasks.push(taskItemsObj) })

    console.log(listOfTasks)
    saveTaskToLS("task-details", listOfTasks)

    $(":text").val("")
}

function showTask(task, taskDate, taskTime) {
    $("ul").append("<li><input type='checkbox'> " + task + "<br/> time:" + taskTime + "<br/> date:" + taskDate + " </li>")
}

function removeTask() {
    $('input[type="checkbox"]').click(function(){
        if($(this).prop("checked") == true){
         console.log("test")   
        }
    })
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


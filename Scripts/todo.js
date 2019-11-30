


$(document).ready(function () {
    //restoreTaskList()
    //removeTask()
    getDefaultValues()
    $("form").on("submit", getTask)

})

function getDefaultValues() {
    $("input[type=time]").val("00:00")
    const today = new Date().getFullYear() + "-" + new Date().getMonth() + "-" + new Date().getDate()
    $("input[type=date]").val(today)
    $(":text").val("Add task")
}

function getTask() {

    const taskItemsArray = $("form").serializeArray()
    const taskItemsObj = {}

    $(taskItemsArray).each(function (i, field) {
        taskItemsObj[field.name] = field.value
    })

    getTaskFromLS('task-details', taskItemsObj)

    $(":text").val("")

    return false
}

function getTaskFromLS(key, value) {
    let listOfTasks = JSON.parse(localStorage.getItem(key)) || []

    listOfTasks.push(value)
    console.log(listOfTasks)
    saveTaskToLS('task-details', listOfTasks)
    showTask(listOfTasks)
}

function saveTaskToLS(key, value) {
    localStorage.setItem(key, JSON.stringify(value))
}

function showTask(listOfTasks) {
    const taskText = listOfTasks[listOfTasks.length-1].text
    const taskTime = listOfTasks[listOfTasks.length-1].time
    const taskDate = listOfTasks[listOfTasks.length-1].date
    $("ul").append("<li>" + taskText+" <br/> time: " + taskTime + " <br/> date: "+taskDate+"</li>")
    
    
    addScrollToList()

}

function addScrollToList() {
    $("ul").scrollTop($("ul")[0].scrollHeight)
}

function removeTask() {
    $('input[type="checkbox"]').click(function () {
        if ($(this).prop("checked") == true) {
            console.log("test")
        }
    })
}




function clearTaskFromLS() {
    localStorage.clear()
}


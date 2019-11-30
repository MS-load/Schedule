


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
    const formItemsArray = $("form").serializeArray()
    const taskItemsObj = {}
    taskItemsObj.trash = false
    taskItemsObj.edit = false

    $(formItemsArray).each(function (i, field) {
        taskItemsObj[field.name] = field.value
    })

    getTaskFromLS('task-details', taskItemsObj)

    $(":text").val("")

    return false
}

function getTaskFromLS(key, value) {
    let taskItemsArray = JSON.parse(localStorage.getItem(key)) || []

    taskItemsArray.push(value)
    value.number = taskItemsArray.length - 1
    const taskNumber = value.number
    console.log(taskItemsArray)
    saveTaskToLS('task-details', taskItemsArray)
    showTask(taskItemsArray,taskNumber)
}

function saveTaskToLS(key, value) {
    localStorage.setItem(key, JSON.stringify(value))
}

function showTask(taskItemsArray,taskNumber) {
    const taskText = taskItemsArray[taskItemsArray.length - 1].text
    const taskTime = taskItemsArray[taskItemsArray.length - 1].time
    const taskDate = taskItemsArray[taskItemsArray.length - 1].date
    
    const trash = "<i class='"+ taskNumber +" material-icons'>delete</i>"
    
    $("ul").append(
        "<li><div><p>" + taskText + "</p>" + trash + "</div><div><p> time: " +
        taskTime + "</p><p> date: " + taskDate + "</p></div></li >")

    addScrollToList()

    $("."+ taskNumber).click(removeTask)
}

function addScrollToList() {
    $("ul").scrollTop($("ul")[0].scrollHeight)
}

function removeTask() {
    console.log($(event.target).attr('class'))
    $(event.target).parent().parent().remove()

}

function clearTaskFromLS() {
    localStorage.clear()
}


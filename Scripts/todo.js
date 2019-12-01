


$(document).ready(function () {
    restoreTaskList()
    //removeTask()
    getDefaultValues()
    $("form").on("submit", getTask)

})


function restoreTaskList(){
    let OldArray = JSON.parse(localStorage.getItem('task-details')); //get data from storage
  if (OldArray !== null) { //if data exist (todos are in storage)
    OldArray.forEach(function(){ //append each element into the dom
        showTask(OldArray)
    })
  } else { //if nothing exist in storage, keep todos array empty
    OldArray = [];
  }
}

function getDefaultValues() {
    $("input[type=time]").val("00:00")
    let today = new Date().toISOString().substr(0, 10)
    $("input[type=date]").val(today)
    $(":text").val("Add task")
}

function getTask() {
    const formItemsArray = $("form").serializeArray()
    const taskItemsObj = {}

    $(formItemsArray).each(function (i, field) {
        taskItemsObj[field.name] = field.value
    })

    const savedArray = getTaskFromLS('task-details', taskItemsObj)

    saveTaskToLS('task-details', savedArray)
    
    showTask(savedArray)

    $(":text").val("")

    return false
}

function getTaskFromLS(key, value) {
    const taskItemsArray = JSON.parse(localStorage.getItem(key)) || []

    taskItemsArray.push(value)
    value.number = (taskItemsArray.length - 1)

    return taskItemsArray

}


function saveTaskToLS(key, value) {
    localStorage.setItem(key, JSON.stringify(value))
}

function showTask(taskItemsArray) {
    //const taskItemsArray = JSON.parse(localStorage.getItem('task-details'))
    const taskText = taskItemsArray[taskItemsArray.length - 1].text
    const taskTime = taskItemsArray[taskItemsArray.length - 1].time
    const taskDate = taskItemsArray[taskItemsArray.length - 1].date
    const taskNumber = taskItemsArray[taskItemsArray.length - 1].number

    const trash = "<i class='" + taskNumber + " material-icons'>delete</i>"

    $("ul").append(
        "<li><div><p>" + taskText + "</p>" + trash + "</div><div><p> time: " +
        taskTime + "</p><p> date: " + taskDate + "</p></div></li >")
    addScrollToList()
    $("." + taskNumber).click(function () {
        removeTaskFromLS(taskNumber)
        removeTask()
    })
}




function addScrollToList() {
    $("ul").scrollTop($("ul")[0].scrollHeight)
}

function removeTask() {
    $(event.target).parent().parent().remove()
}

function removeTaskFromLS(taskNumber) {
    const modifiedArray = JSON.parse(localStorage.getItem('task-details'))
    const number = taskNumber
    for (let i = 0; i < modifiedArray.length; i++) {
        if (modifiedArray[i].number == number) {
            modifiedArray.splice(i, 1)
            break
        }
    }
    saveTaskToLS('task-details', modifiedArray)
}

function clearTaskFromLS() {
    localStorage.clear()
}


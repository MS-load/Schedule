/**
 * On load
 */
$(document).ready(function () {
    getOldTaskList()
    getDefaultValues()
    $("form").on("submit", getTask)

})

/**
 *Gets the already saved tasks from the local storage
 */
function getOldTaskList() {
    let OldArray = JSON.parse(localStorage.getItem('task-details'))
    console.log(OldArray)
    if (OldArray !== null) {
        showTask(OldArray)
    } else {
        OldArray = []
    }
}

/**
 * Gets the default value for the form
 */
function getDefaultValues() {
    $("input[type=time]").val("00:00")
    let today = new Date().toISOString().substr(0, 10)
    $("input[type=date]").val(today)
    $(":text").val("Add task")
}

/**
 * Gets the task input form the form 
 * @return {boolean} false
 */
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

/**
 * Gets the tasks from the local storage 
 * @param {String} key the name in the local storage
 * @param {Object} value the object saved inside the array
 * @return {Array} the array stored in the local storage
 */
function getTaskFromLS(key, value) {
    const taskItemsArray = JSON.parse(localStorage.getItem(key)) || []
    taskItemsArray.push(value)
    value.number = (taskItemsArray.length - 1)
    return taskItemsArray
}


/**
 * saves the task to the local storage
 * @param {String} key  the name in the local storage
 * @param {Array} value the array saved to local storage
 */
function saveTaskToLS(key, value) {
    localStorage.setItem(key, JSON.stringify(value))
}

/**
 * Displays task on DOM
 * @param {Array} arrayPassed the array to be displayed
 */
function showTask(arrayPassed) {
    $("ul").empty()
    for (i = 0; i < arrayPassed.length; i++) {
        const taskText = arrayPassed[i].text
        const taskTime = arrayPassed[i].time
        const taskDate = arrayPassed[i].date
        const taskNumber = arrayPassed[i].number

        const edit = "<i class='material-icons edit" + taskNumber + "'>edit</i>"
        const trash = "<i class='" + taskNumber + " material-icons'>delete</i>"

        $("ul").append(
            "<li><div><p>" + taskText + "</p><p>" + edit + trash + "</p></div><div><p> time: " +
            taskTime + "</p><p> date: " + taskDate + "</p></div></li >")

        addScrollToList()

        $("." + taskNumber).click(function () {
            removeTaskFromLS(taskNumber)
            removeTask()
        })

        $(".edit" + taskNumber).click(function () {
            editItem(taskNumber, arrayPassed)
        })
    }
}

/**
 * Allows user to edit an item
 * @param {Number} taskNumber 
 * @param {Array} arrayPassed 
 */
function editItem(taskNumber, arrayPassed) {
    const taskText = arrayPassed[taskNumber].text
    const taskTime = arrayPassed[taskNumber].time
    const taskDate = arrayPassed[taskNumber].date

    $("input[type=time]").val(taskTime)
    $("input[type=date]").val(taskDate)
    $(":text").val(taskText)

    removeTaskFromLS(taskNumber)
    removeTask()
}

/**
 * Scrolls to bottom of List
 */
function addScrollToList() {
    $("ul").scrollTop($("ul")[0].scrollHeight)
}

/**
 * Removes Task from DOM
 */
function removeTask() {
    $(event.target).parent().parent().parent().remove()
}

/**
 * Removes task from Local Storage
 * @param {Number} taskNumber 
 */
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

//WIP
function getTaskCountPerDay() {


}





//get the current number displayed
//change to other months
//edit to be improved
//sorting to be improved
//add swedish holidays
//filter by chosen day



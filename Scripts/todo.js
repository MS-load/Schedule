let id = 0

/**
 * On load
 */
$(document).ready(function () {
    renderSavedTasksList()
    renderDefaultValues()
    $("form").on("submit", getTask)
})

/**
 *Renders the already saved tasks from the local storage
 */
function renderSavedTasksList() {
    let storedTasks = JSON.parse(localStorage.getItem('task-details'))
    //console.log(storedTasks)
    if (storedTasks !== null) {
        renderTask(storedTasks)
    } else {
        storedTasks = []
    }
}

/**
 * Gets the default value for the form
 */
function renderDefaultValues() {
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
    const taskItemDetails = {}
    const taskDetails = $("form").serializeArray()
    $(taskDetails).each(function (i, field) {
        taskItemDetails[field.name] = field.value
    })
    taskItemDetails.id = id++

    console.log(taskItemDetails)
    const taskFromLS = getTaskFromLS('task-details', taskItemDetails)

    saveTaskToLS('task-details', taskFromLS)

    renderTask(taskFromLS)
    $(":text").val("")
    getTaskCountPerDay(searchTaskDate, dateBox)
    return false
}

/**
 * Gets the tasks from the local storage 
 * @param {String} key the name in the local storage
 * @param {Object} value the object saved inside the array
 * @return {Array} the array stored in the local storage
 */
function getTaskFromLS(key, value) {
    const initialTaskDetails = JSON.parse(localStorage.getItem(key)) || []
    initialTaskDetails.push(value)
    return initialTaskDetails
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
 * @param {Array} taskToRender the array to be displayed
 */
function renderTask(taskToRender) {
    $("ul").empty()
    for (i = 0; i < taskToRender.length; i++) {
        const taskText = taskToRender[i].text
        const taskTime = taskToRender[i].time
        const taskDate = taskToRender[i].date
        const taskNumber = taskToRender[i].id

        const edit = "<i class='material-icons edit" + taskNumber + "'>edit</i>"
        const trash = "<i class='" + taskNumber + " material-icons'>delete</i>"

        $("ul").append(
            "<li><div><p>" + taskText + "</p><p>" + edit + trash + "</p></div><div><p> time: " +
            taskTime + "</p><p> date: " + taskDate + "</p></div></li >")



        addScrollToList()

        $(".material-icons").click(function () {
            removeTaskFromLS(taskNumber)
            removeTask()
        })

        $(".edit").click(function () {
            editItem(taskNumber, taskToRender)

            removeTaskFromLS(taskNumber)
            removeTask()
        })
    }

}

/**
 * Allows user to edit an item
 * @param {Number} taskNumber 
 * @param {Array} taskToRender 
 */
function editItem(taskNumber, taskToRender) {
    const editText = taskToRender[taskNumber].text
    const editTime = taskToRender[taskNumber].time
    const editDate = taskToRender[taskNumber].date
    console.log(taskNumber)
    $("input[type=time]").val(editTime)
    $("input[type=date]").val(editDate)
    $(":text").val(editText)

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
    const modifiedTaskDetail = JSON.parse(localStorage.getItem('task-details'))
    const number = taskNumber
    for (let i = 0; i < modifiedTaskDetail.length; i++) {
        if (modifiedTaskDetail[i].number == number) {
            modifiedTaskDetail.splice(i, 1)
            break
        }
    }
    saveTaskToLS('task-details', modifiedTaskDetail)
}

function getTaskCountPerDay(searchTaskDate, dateBox) {

    TaskCount = document.createElement("p")
    dateBox.appendChild(TaskCount)
    let latestTaskDetail = JSON.parse(localStorage.getItem('task-details')) || []

    let numberOfTasks = 0

    for (let i = 0; i < latestTaskDetail.length; i++) {
        if (searchTaskDate == latestTaskDetail[i].date) {
            numberOfTasks++
        }
    }
    if (numberOfTasks > 0) {
        return TaskCount.innerText = numberOfTasks
    }
    else {
        return TaskCount.innerText = ""
    }
}

//edit to be improved
//sorting to be improved
//add swedish holidays
//filter by chosen day



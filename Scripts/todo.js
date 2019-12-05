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
    const storedTasks = JSON.parse(localStorage.getItem('task-details'))
    if (storedTasks !== null) {
        renderTask(storedTasks)
    } else {
        storedTasks = []
    }
}

/**
 * Renders the default value for the form
 */
function renderDefaultValues() {
    const today = new Date().toISOString().substr(0, 10)
    $(":text").val("Add task")
    $("input[type=time]").val("00:00")
    $("input[type=date]").val(today)
}

/**
 * Gets the task details from the form
 * @param {MouseEvent} event 
 */
function getTask(event) {
    event.preventDefault()

    const taskItemDetails = {}
    const taskDetails = $("form").serializeArray()

    $(taskDetails).each(function (i, field) {
        taskItemDetails[field.name] = field.value
    })
    taskItemDetails.id = + new Date()

    const taskFromLS = getTaskFromLS('task-details', taskItemDetails)

    saveTaskToLS('task-details', taskFromLS)

    renderTask(taskFromLS)
    $(":text").val("")
    $("input[type=submit]").val("Add Task")
    $("input").css({ "background-color": "", "color": "", "border": "" })
    initCalendarMonth()

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
 * @param {Array} valueToSet the array saved to local storage
 */
function saveTaskToLS(key, valueToSet) {
    localStorage.setItem(key, JSON.stringify(valueToSet))
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
        const taskId = taskToRender[i].id

        const edit = "<i class='material-icons edit'>edit</i>"
        const trash = "<i class='material-icons delete'>delete</i>"

        $("ul").append(
            "<li><div><p>" + taskText + "</p><p id ='" + taskId + "'>" + edit + trash + "</p></div><div><p> Time: " +
            taskTime + "</p><p> Date: " + taskDate + "</p></div></li >")

        addScrollToList()

        $("#" + taskId + " .delete").click(function () {
            elementId = $(this).parent().attr('id')
            removeTaskFromLS(elementId)
            removeTask()
            initCalendarMonth()
        })

        $("#" + taskId + " .edit").click(function () {
            editing = true
            elementId = $(this).parent().attr('id')
            editItem(elementId, taskToRender)
        })
    }
}

/**
 * Allows user to edit an item
 * @param {Number} elementId timestamp created for each element
 * @param {Array} taskToRender the array to be passed
 */
function editItem(elementId, taskToRender) {
    const modifiedTaskDetail = JSON.parse(localStorage.getItem('task-details'))

    for (let i = 0; i < modifiedTaskDetail.length; i++) {
        if (elementId == modifiedTaskDetail[i].id) {
            const editText = taskToRender[i].text
            const editTime = taskToRender[i].time
            const editDate = taskToRender[i].date

            $(":text").val(editText)
            $("input[type=time]").val(editTime)
            $("input[type=date]").val(editDate)
            $("input[type=submit]").val("Edit Task")
            $("input").css({ "background-color": "white", "color": "red", "border": "solid red 0.5px" })
        }
    }
    removeTaskFromLS(elementId)
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
 * @param {Number} elementId timestamp created for each element
 */
function removeTaskFromLS(elementId) {
    const modifiedTaskDetail = JSON.parse(localStorage.getItem('task-details'))

    for (let i = 0; i < modifiedTaskDetail.length; i++) {
        if (elementId == modifiedTaskDetail[i].id) {
            modifiedTaskDetail.splice(i, 1)
            break
        }
    }
    saveTaskToLS('task-details', modifiedTaskDetail)
}

/**
 * gets the number of counts in a day 
 * @param {String} searchTaskDate the relevant date
 */
function getTaskCountPerDay(searchTaskDate) {
    const latestTaskDetail = JSON.parse(localStorage.getItem('task-details')) || []
    let numberOfTasks = 0

    for (let i = 0; i < latestTaskDetail.length; i++) {
        if (searchTaskDate == latestTaskDetail[i].date) {
            numberOfTasks++
        }
    }
    if (numberOfTasks > 0) {
        return numberOfTasks
    }
    else {
        return ""
    }
}

filterTask()
function filterTask() {
    

}



//filter by chosen day
//sorting to be improved



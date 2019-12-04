let editing = false
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
    let time = new Date().toISOString().substr(0, 10)
    let today = new Date().toISOString().substr(0, 10)
    $("input[type=date]").val(today)
    $(":text").val("Add task")
}

/**
 * Gets the task input form the form 
 * @return {boolean} false
 */
function getTask(event) {
    event.preventDefault()
    const taskItemDetails = {}
    const taskDetails = $("form").serializeArray()
    $(taskDetails).each(function (i, field) {
        taskItemDetails[field.name] = field.value
    })
    taskItemDetails.id = + new Date()

    console.log(taskItemDetails)
    const taskFromLS = getTaskFromLS('task-details', taskItemDetails)

    saveTaskToLS('task-details', taskFromLS)

    renderTask(taskFromLS)
    $(":text").val("")
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
        const taskId = taskToRender[i].id

        const edit = "<i class='material-icons edit'>edit</i>"
        const trash = "<i class='material-icons delete'>delete</i>"

        $("ul").append(
            "<li><div><p>" + taskText + "</p><p id ='" + taskId + "'>" + edit + trash + "</p></div><div><p> time: " +
            taskTime + "</p><p> date: " + taskDate + "</p></div></li >")

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
 * @param {Number} elementId 
 * @param {Array} taskToRender 
 */
function editItem(elementId, taskToRender) {
    const modifiedTaskDetail = JSON.parse(localStorage.getItem('task-details'))

    for (let i = 0; i < modifiedTaskDetail.length; i++) {
        if (elementId == modifiedTaskDetail[i].id) {
            const editText = taskToRender[i].text
            const editTime = taskToRender[i].time
            const editDate = taskToRender[i].date

            $("input[type=time]").val(editTime)
            $("input").css({ "background-color": "white", "color": "red", "border": "solid red 0.5px" })

            $("input[type=date]").val(editDate)
            $("input[type=date]").val(editDate)
            $(":text").val(editText)
            $(":text").val(editText)
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
 * @param {Number} taskId 
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

//add swedish holidays
//filter by chosen day
//sorting to be improved



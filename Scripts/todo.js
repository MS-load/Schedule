


$(document).ready(function () {
    //restoreTaskList()
    //removeTask()
    $("form").on("submit", getTask)
    getDefaultValues()
})


/**
 * Restores the existing task list from Local Storage
 */
// function restoreTaskList() {
//     let data = localStorage.getItem("task-details") // how to store as on object
//     if (data) {
//         let restoreList = JSON.parse(data)
//         console.log(restoreList)
//         for (var i = 0; i < (restoreList.length); i++) {
//             $("ul").append("<li><input type='checkbox'>" + restoreList[i] + "</li>")
//         }
//     } else {
//         restoreList = []
//     }
// }

function getDefaultValues(){
    $("#taskTime").val("00:00")
    $("#taskDate").val()
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
    console.log(JSON.parse(localStorage.getItem(key)))
    saveTaskToLS('task-details',listOfTasks)
    console.log(listOfTasks)
}

function saveTaskToLS(key, value) {
    localStorage.setItem(key, JSON.stringify(value))
}

function showTask(task, taskDate, taskTime) {
    $("ul").append("<li><input type='checkbox'> " + task + "<br/> time:" + taskTime + "<br/> date:" + taskDate + " </li>")
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


$(document).ready(function () {
    addEventListener()
})

function addEventListener() {
    $("button").click(addTask)
}

function addTask() {
    let task = $("#input").val()
    $("ul").append("<li>" + task + "</li>")

    
    const listOfTasks = []
    $("ul li").each(function() { listOfTasks.push($(this).text())})

    console.log(listOfTasks)
    saveTaskToLS(listOfTasks)
    getTaskFromLS()
}




function saveTaskToLS(task){
    localStorage.setItem('task', JSON.stringify(task))
}

function getTaskFromLS() {
    return console.log(JSON.parse(localStorage.getItem('listOfTasks')) || [])
}
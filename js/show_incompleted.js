document.getElementById('Incomplete-task').addEventListener('click', function() {
    taskIncompleted = 0;
    document.getElementById("task-incompleted").innerText = taskIncompleted + " " +  "Incompleted Tasks";

    textIncompleted = document.getElementById("Incomplete-task");
    textIncompleted.classList.remove("located-incompleted");

    textCompletedTask = document.getElementById("complete-task");
    textCompletedTask.classList.add("tasks-c");
    textCompletedTask.classList.remove("located-completed");

    var arrayShowTAsk = document.getElementById("tbody-content");
    var travelArray = arrayShowTAsk.getElementsByClassName("hidden-task");
    for (x=0;x<travelArray.length;x++){
        travelArray[x].classList.remove("display-tasks");
    }

    var globalClass = arrayShowTAsk.getElementsByClassName("datos");
    for (x=0;x<globalClass.length;x++){
        globalClass[x].classList.remove("hidden-task");
    }

    var pencilEdit = arrayShowTAsk.getElementsByClassName("edit");
    for (x=0;x<pencilEdit.length;x++){
        pencilEdit[x].classList.remove("display-none-pencil");
    }

    var trash = arrayShowTAsk.getElementsByClassName("icons-trash");
    for (x=0;x<trash.length;x++){
        trash[x].classList.remove("trash");
    }

    var counter = document.getElementById("tbody-content");
    var countersIncomplete = counter.getElementsByClassName("datos");
    for (x=0;x<countersIncomplete.length;x++){
        taskIncompleted = countersIncomplete.length
        document.getElementById("task-incompleted").innerText = taskIncompleted + " " +  "Incompleted Tasks";
    }

    completeTask = function(element){
        checktask = element.parentNode.parentNode;
        checktask.classList.remove('datos');
        checktask.classList.add('hidden-task');

        taskIncompleted--
        document.getElementById("task-incompleted").innerText = taskIncompleted + " " +  "Incompleted Tasks";

        var date = new Date();

        formatDate = (date)=>{
            var monthNameShort = date.toLocaleString("en-US", { month: "short" });
            var formatted_date = date.getDate() + "  " + monthNameShort + "  " + date.getFullYear();
            return formatted_date;
        }

        var completeDate  = element.parentNode.nextElementSibling.nextElementSibling;
        completeDate.innerHTML = formatDate(date);

        element.classList.add("red-checkbox");
    }

    deleteBtn = function(element){
        document.getElementById('deleteLineRow').onclick = () => {
            deleteLineBtn = element.parentElement.parentNode.parentNode;
            deleteLineBtn.parentNode.removeChild(deleteLineBtn);
            
            taskIncompleted--
            document.getElementById("task-incompleted").innerText = taskIncompleted + " " +  "Incompleted Tasks";
        }
    }

    var hideButton = document.getElementById("botton-add-task");
    hideButton.classList.remove("hide-button");
});
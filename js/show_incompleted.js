showIncomplete = function(element){
    taskIncompleted = 0;
    document.getElementById("task-incompleted").innerText = taskIncompleted + " " +  "Incompleted Tasks";

    textIncompleted = element.parentNode.firstElementChild;
    textIncompleted.classList.remove("located-incompleted")

    textCompletedTask = element.parentNode.parentNode.lastElementChild.firstElementChild;
    textCompletedTask.classList.add("tasks-c")
    textCompletedTask.classList.remove("located-completed")

    var arrayShowTAsk = element.parentNode.parentNode.parentNode.nextElementSibling.firstElementChild.lastElementChild.lastElementChild;
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

    var hideButton = element.parentNode.parentNode.parentNode.nextElementSibling.firstElementChild.firstElementChild.firstElementChild;
    hideButton.classList.remove("hide-button")
}
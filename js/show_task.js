showTask = function(element){
    textCompletedTask = element.parentNode.firstElementChild;
    textCompletedTask.classList.remove("tasks-c")
    textCompletedTask.classList.add("located-completed")

    textIncompleted = element.parentNode.parentNode.firstElementChild.firstElementChild;
    textIncompleted.classList.add("located-incompleted")

    var counter = document.getElementById("table-dinamic");
    var fila = counter.getElementsByTagName('tbody')[0];

    dinamicDate = 0;
    dinamicDate = fila.children.length;
    document.getElementById("task-incompleted").innerText = dinamicDate + " " +  "Completed Tasks";

    var arrayShowTAsk = element.parentNode.parentNode.parentNode.nextElementSibling.firstElementChild.lastElementChild.lastElementChild;
    var travelArray = arrayShowTAsk.getElementsByClassName("hidden-task");
    for (x=0;x<travelArray.length;x++){
        travelArray[x].classList.add("display-tasks");
        travelArray[x].classList.remove("datos");
    }

    var globalClass = arrayShowTAsk.getElementsByClassName("datos");
    for (x=0;x<globalClass.length;x++){
        globalClass[x].classList.add("hidden-task");
    }

    var PencilEdit = arrayShowTAsk.getElementsByClassName("edit");
    for (x=0;x<PencilEdit.length;x++){
        PencilEdit[x].classList.add("display-none-pencil");
    }

    var trash = arrayShowTAsk.getElementsByClassName("icons-trash");
    for (x=0;x<trash.length;x++){
        trash[x].classList.add("trash");
    }

    completeTask = function(element){
        checktask = element.parentNode.parentNode;
        checktask.classList.remove('display-tasks');
        checktask.classList.add('datos');

        var completeDate  = element.parentNode.nextElementSibling.nextElementSibling;
        completeDate.innerHTML = " ";

        dinamicDate--
        document.getElementById("task-incompleted").innerText = dinamicDate + " " +  "Completed Tasks";
    }
}
showIncomplete = function(element){
    textIncompleted = element.parentNode.firstElementChild;
    textIncompleted.classList.remove("located-incompleted")

    textCompletedTask = element.parentNode.parentNode.lastElementChild.firstElementChild;
    textCompletedTask.classList.add("tasks-c")
    textCompletedTask.classList.remove("located-completed")

    var counter = document.getElementById("table-dinamic");
    var fila = counter.getElementsByTagName('tbody')[0];
    dinamicDate = 0;
    dinamicDate = fila.children.length;
    document.getElementById("task-incompleted").innerText = dinamicDate + " " +  "Incompleted Tasks";

    var arrayShowTAsk = element.parentNode.parentNode.parentNode.nextElementSibling.firstElementChild.lastElementChild.lastElementChild;
    var travelArray = arrayShowTAsk.getElementsByClassName("hidden-task");
    for (x=0;x<travelArray.length;x++){
        travelArray[x].classList.remove("display-tasks");
    }

    var globalClass = arrayShowTAsk.getElementsByClassName("datos");
    for (x=0;x<globalClass.length;x++){
        globalClass[x].classList.remove("hidden-task");
    }

    var PencilEdit = arrayShowTAsk.getElementsByClassName("edit");
    for (x=0;x<PencilEdit.length;x++){
        PencilEdit[x].classList.remove("display-none-pencil");
    }

    var trash =arrayShowTAsk.getElementsByClassName("icons-trash");
    for (x=0;x<trash.length;x++){
        trash[x].classList.remove("trash");
    }

    var PencilEdit = arrayShowTAsk.getElementsByClassName("edit");
    for (x=0;x<PencilEdit.length;x++){
        PencilEdit[x].classList.remove("display-none-pencil");
    }

    var trash = arrayShowTAsk.getElementsByClassName("icons-trash");
    for (x=0;x<trash.length;x++){
        trash[x].classList.remove("trash");
    }

    completeTask = function(element){
        checktask = element.parentNode.parentNode;
        checktask.classList.remove('datos');
        checktask.classList.add('hidden-task');

        var date = new Date();

        formatDate = (date)=>{
            var monthNameShort = date.toLocaleString("en-US", { month: "short" });
            var formatted_date = date.getDate() + "  " + monthNameShort + "  " + date.getFullYear();
            return formatted_date;
        }

        var completeDate  = element.parentNode.nextElementSibling.nextElementSibling;
        completeDate.innerHTML = formatDate(date);

        dinamicDate--
        document.getElementById("task-incompleted").innerText = dinamicDate + " " +  "Incompleted Tasks";
    }
}
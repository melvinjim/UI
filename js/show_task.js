showTask = function(element){
    textCompletedTask = element.parentNode.firstElementChild;
    textCompletedTask.classList.remove("tasks-c")
    textCompletedTask.classList.add("located-completed")

    textIncompleted = element.parentNode.parentNode.firstElementChild.firstElementChild;
    textIncompleted.classList.add("located-incompleted")

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

    var counter = document.getElementById("tbody-content");
    var counterss = counter.getElementsByClassName("display-tasks");
    for (x=0;x<counterss.length;x++){
        document.getElementById("task-incompleted").innerText = counterss.length + " " +  "Completed Tasks";
    }
    
    // dinamicDates = 0;
    // dinamicDates = rows.children.length;
    // document.getElementById("task-incompleted").innerText = dinamicDates + " " +  "Completed Tasks";

    completeTask = function(element){
        checktask = element.parentNode.parentNode;
        checktask.classList.remove('display-tasks');
        checktask.classList.add('datos');

        var completeDate  = element.parentNode.nextElementSibling.nextElementSibling;
        completeDate.innerHTML = " ";
        
        element.classList.remove("red-checkbox");

        counterss.length--
        document.getElementById("task-incompleted").innerText = counterss.length + " " +  "Completed Tasks";
    }

    deleteBtn = function(element){
        document.getElementById('deleteLineRow').onclick = () => {
            deleteLineBtn = element.parentElement.parentNode.parentNode;
            deleteLineBtn.parentNode.removeChild(deleteLineBtn);
            
            counterss.length--
            document.getElementById("task-incompleted").innerText = counterss.length + " " +  "Completed Tasks";
        }
    }

    
}
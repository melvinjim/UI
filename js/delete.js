var counter = document.getElementById("tbody-content");
var countersIncomplete = counter.getElementsByClassName("datos");
for (x=0;x<countersIncomplete.length;x++){
    taskIncompleted = countersIncomplete.length 
    document.getElementById("task-incompleted").innerText = taskIncompleted + " " +  "Incompleted Tasks";
}

deleteBtn = function(element){
    document.getElementById('deleteLineRow').onclick = () => {
        deleteLineBtn = element.parentElement.parentNode.parentNode;
        deleteLineBtn.parentNode.removeChild(deleteLineBtn);
        
        taskIncompleted--
        document.getElementById("task-incompleted").innerText = taskIncompleted + " " +  "Incompleted Tasks";
    }
}
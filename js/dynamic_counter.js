taskIncompleted = 0;
document.getElementById("task-incompleted").innerText = taskIncompleted + " " +  "Incompleted Tasks";

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

var date = new Date();

formatDate = (date)=>{
    var monthNameShort = date.toLocaleString("en-US", { month: "short" });
    const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    var minutos = date.getMinutes()
    if(minutos < 10) { minutos = '0' + minutos; }
    var formatted_date = weekday[date.getDay()] + " " + + date.getDate() + ", " + monthNameShort + "  " + date.getFullYear() + "-" + + date.getHours() + ":" + minutos;
    return formatted_date;
}

document.getElementById("dinamic-date").innerHTML = formatDate(date);

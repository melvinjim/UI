taskIncompleted = 0;
document.getElementById("task-incompleted").innerText = taskIncompleted + " " +  "Incompleted Tasks";

var counter = document.getElementById("tbody-content");
var countersIncomplete = counter.getElementsByClassName("datos");
for (x=0;x<countersIncomplete.length;x++){
    taskIncompleted = countersIncomplete.length 
    document.getElementById("task-incompleted").innerText = taskIncompleted + " " +  "Incompleted Tasks";
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
